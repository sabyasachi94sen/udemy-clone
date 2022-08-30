import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RenderResult, render as rtlRender } from "@testing-library/react";
import { ReactElement } from "react";

import { Providers } from "@/shared/stores/app-providers";

// export const MockMemoryRouter = ({ children }): JSX.Element => {
//   return (
//     <RouterContext.Provider value={useRouter()}>
//       {children}
//     </RouterContext.Provider>
//   );
// };

export function AllProviders({
  client,
  children,
}: {
  children: React.ReactNode;
  client: QueryClient;
}): JSX.Element {
  return (
    <QueryClientProvider client={client}>
      <Providers>{children}</Providers>
    </QueryClientProvider>
  );
}

// @see https://stackoverflow.com/a/68461339/9640026
const testQueryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

const render = (
  ui: ReactElement,
  { client = testQueryClient, ...options } = {}
): RenderResult =>
  rtlRender(ui, {
    wrapper: ({ children }) => (
      <AllProviders client={client}>{children}</AllProviders>
    ),
    ...options,
  });

// re-export everything
export * from "@testing-library/react";
export { default as userEvent } from "@testing-library/user-event";

// override React Testing Library's render with our own
export { render };
