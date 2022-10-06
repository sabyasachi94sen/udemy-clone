import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { NextPage } from "next";
import type { AppProps } from "next/app";
import NextNprogress from "nextjs-progressbar";
import { useRef } from "react";

import "@fontsource/inter/variable.css";
import "@/shared/styles/globals.css";

import { DashboardLayout } from "@/shared/components";
import { Head, TWResponsiveIndicator } from "@/shared/components/libs";
import { AppProviders } from "@/shared/stores/app-providers";

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

  const queryClient = useRef(new QueryClient());

  return (
    <>
      <Head title="Pippams" />
      <QueryClientProvider client={queryClient.current}>
        <Hydrate state={pageProps.dehydrateState}>
          <NextNprogress
            showOnShallow
            color="#29D"
            height={3}
            options={{ showSpinner: false }}
            startPosition={0.3}
            stopDelayMs={200}
          />
          <AppProviders>
            {/* <AuthProvider> */}
            <TWResponsiveIndicator />
            {Component.isPublicRoute ? (
              // public page
              <Component {...pageProps} />
            ) : (
              // Do auth check for the protected routes
              // <AuthGuard>
              <DashboardLayout>
                <Component {...pageProps} />
              </DashboardLayout>
              // </AuthGuard>
            )}
            {/* </AuthProvider> */}
          </AppProviders>
        </Hydrate>
      </QueryClientProvider>
    </>
  );
}
