import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";

import { AuthProvider } from "./auth.context";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
});

type AppProvidersProps = { children: React.ReactNode };

function ReactQueryClientProvider({
  children,
}: AppProvidersProps): JSX.Element {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}

function Providers({ children }: AppProvidersProps): JSX.Element {
  return (
    <>
      <Toaster
        toastOptions={{
          duration: 5000,
        }}
      />
      <AuthProvider>{children}</AuthProvider>
    </>
  );
}

function AppProviders({ children }: AppProvidersProps): JSX.Element {
  return (
    <ReactQueryClientProvider>
      <Providers>{children}</Providers>
      <ReactQueryDevtools initialIsOpen={false} />
    </ReactQueryClientProvider>
  );
}

export { Providers, AppProviders, ReactQueryClientProvider };
