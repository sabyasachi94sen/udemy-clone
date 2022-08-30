import { NextPage } from "next";
import type { AppProps } from "next/app";
import NextNprogress from "nextjs-progressbar";

import "@/shared/styles/globals.css";
import { TWResponsiveIndicator } from "@/shared/components/libs";
import { AppProviders } from "@/shared/stores/app-providers";
import { AuthProvider, AuthGuard } from "@/shared/stores/auth.context";

// Pages are by default, checked for protected
// Ones with publicRoute true are public pages
export type NextApplicationPage = NextPage & {
  isPublicRoute?: boolean;
};

export default function MyApp(props: AppProps): JSX.Element {
  const {
    Component,
    pageProps,
  }: { Component: NextApplicationPage; pageProps: unknown } = props;

  return (
    <>
      <NextNprogress
        showOnShallow
        color="#29D"
        height={3}
        options={{ showSpinner: false }}
        startPosition={0.3}
        stopDelayMs={200}
      />
      <AppProviders>
        <AuthProvider>
          <TWResponsiveIndicator />
          {Component.isPublicRoute ? (
            // public page
            <Component {...pageProps} />
          ) : (
            // Do auth check for the protected routes
            <AuthGuard>
              <Component {...pageProps} />
            </AuthGuard>
          )}
        </AuthProvider>
      </AppProviders>
    </>
  );
}
