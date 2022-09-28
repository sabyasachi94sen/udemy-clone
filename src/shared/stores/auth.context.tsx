/**
 * @see
 * https://github.com/ivandotv/nextjs-client-signin-logic/blob/ac1a6a5ba0/src/components/AuthProvider.tsx
 * https://github.com/ivandotv/nextjs-client-signin-logic/
 * https://theodorusclarence.com/blog/nextjs-redirect-no-flashing
 */

/**
 * AUTH FLOW:
 * If path is not public,
 * AuthGuard check (redirect to login if needed) ->
 * EmailVerifyGuard check (redirect to "/", "/confirm-email" or "/add-details", depending on condnition ->
 * Render the actual path component
 */

/**
 * COMMENTS ON DIFF. WITH REACT ROUTER:
 * On react router, the private router is a path itself,
 * but here the router and authProvider are seperate,
 * hence, there might be delay in what the router displays,
 * what should be the logical display based on state calculated by next/router
 * need to find the ways to mask those brief flash of unwanted router view and eventual
 * actual route push by authProvider functions
 */

import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import React, { createContext, useContext, useEffect } from "react";

import { FullPageLoader } from "@/shared/components";
import { fetchAuthUser } from "@/shared/services";
import { User } from "@/types/api";

type AppContextValue = {
  isAuthenticated: boolean;
  user: User | undefined;
  refetchAuthUser: () => void;
  isLoading: boolean;
  setRedirect: (redirect: string) => void;
  getRedirect: () => string | null;
  clearRedirect: () => void;
};

const AuthContext = createContext<AppContextValue | undefined>(undefined);

/**
 * To remember the link user visited, but couldn't due to auth
 * we redirect them to that router after signing in
 */
const redirectKey = "SIGN_IN_REDIRECT";

const setRedirect = (redirect: string) => {
  window.sessionStorage.setItem(redirectKey, redirect);
};

const getRedirect = (): string | null =>
  window.sessionStorage.getItem(redirectKey);

const clearRedirect = () => window.sessionStorage.removeItem(redirectKey);

/**
 * Calls user api-endpoint on first-load,to check for if user is authenticated, and stores
 */
export function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  const userResult = useQuery(["authUser"], () => fetchAuthUser(), {
    staleTime: Infinity, // never auto refetch this query, only through manual query fn
  });

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated: userResult.isSuccess,
        user: userResult.error ? undefined : userResult.data?.data, // this is to handle userResult persisiting between logging out session
        isLoading: userResult.isLoading,
        refetchAuthUser: userResult.refetch,
        setRedirect,
        getRedirect,
        clearRedirect,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

/**
 * useAuth hook to access context value from authProvider easily
 */
export const useAuth = (): AppContextValue => {
  const context = useContext(AuthContext);

  if (context === undefined) {
    throw new Error(`useAuth must be used within a AuthUserProvider`);
  }

  return context;
};

/**
 * Shows laoding state while backend authcheck call is being done,
 * redirects accordingly if user not authenticated
 */
export function AuthGuard({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  const router = useRouter();

  const { isAuthenticated, isLoading } = useAuth();

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      // remember the page that user tried to access
      setRedirect(router.route);
      router.push("/login");
    }
  }, [isAuthenticated, isLoading, router]);

  // show loading indicator while the auth provider is still initializing
  if (isLoading || !isAuthenticated) {
    return <FullPageLoader />;
  }

  // if auth initialized with a valid user show protected page
  return <>{children}</>;
}

/**
 * Check if user needs to have verified email, before visting a route
 * the routes that are not required to check, are passed
 * it comes after AuthGuard
 */

const ONBOARDING_PATH = "/add-details";
const CONFIRM_EMAIL_PATH = "/confirm-email";

export function EmailVerifyGuard({
  noRequireVerifyPaths,
  children,
}: {
  noRequireVerifyPaths: string[];
  children: React.ReactNode;
}): JSX.Element {
  const router = useRouter();
  const { user } = useAuth();

  // check if current path requires email verified to access
  const pathRequiresVerfication = !noRequireVerifyPaths.includes(
    router.pathname,
  );

  useEffect(() => {
    // if verificationRequired and user email is not verified,
    // redirect to /confirm-email
    if (pathRequiresVerfication && !user?.email_verified_at) {
      router.push(CONFIRM_EMAIL_PATH);
    }

    // user email is verified, but user hasn't added details
    if (
      user?.email_verified_at &&
      !user.first_name &&
      router.pathname !== ONBOARDING_PATH
    ) {
      router.push(ONBOARDING_PATH);
    }

    /**
     * if user is verified and visits confirm-email path,
     * if user has addded details and visits add-details path
     * redirect to home
     */
    if (
      (user?.email_verified_at && router.pathname === CONFIRM_EMAIL_PATH) ||
      (user?.first_name && router.pathname === ONBOARDING_PATH)
    ) {
      router.push("/");
    }

    // skipping the router deps here, as doing so will re-run this useEffect,
    // we want to change only on refetchAuthUser value
  }, [user, pathRequiresVerfication]);

  /**
   * If the path requires emauk verified, but email is't verified
   * or the email is verified but user hasn't added details, show the loader
   * as in this cases, the redirect will happen from the useEffect
   * this is to prevent flash of unauthorised content
   */
  if (
    (pathRequiresVerfication && !user?.email_verified_at) ||
    (user?.email_verified_at &&
      !user?.first_name &&
      router.pathname !== ONBOARDING_PATH)
  ) {
    return <FullPageLoader />;
  }

  return <>{children}</>;
}
