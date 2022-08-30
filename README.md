# Pimpams frontend

## Base Folder Structure

```

  ├── /public
  │    ├── /images
  │    ├── /fonts
  ├── /src
  │    ├── /shared
  │    │    ├── /libs (shareable components across projects, which can even be their own npm packages)
  │    │    ├── /components
  │    │    │    ├── /Component
  │    │    │    │    ├── Component.js/tsx
  │    │    │    │    ├── Component.test.js/tsx
  │    │    │    │    ├── Component.module.scss (*If needed)
  │    │    │    ├── index.js (re-exports  the components, for cleaner path resolve)
  │    │    ├── /services
  │    │    │    ├── api-client.ts (setup global api instance of axios, and base handleQuery, handleMutation functions)
  │    │    │    ├── queries.service.ts
  │    │    │    ├── mutations.service.ts
  │    │    │    ├── index.ts (re-exports the shared queries and mutations)
  │    │    ├── /hooks
  │    │    ├── /contexts
  │    │    │    ├── app-providers.tsx (encapsulates app-wide providers like ReactQueryClientProvider,ThemeProvider etc)
  │    │    ├── /utils (app-wide shareable things)
  │    │    │    ├── funcs/ (util functions based on approx type)
  │    │    │    ├── ├── example.utils.ts (util functions based on approx type)
  │    │    │    ├── ├── index.ts (re-exports the utils funcs files as needed)
  │    │    │    ├── ...
  │    │    ├── /styles (app-wide global styles, component styles are scored there with CSS modules)
  │    │    │    ├── globals.css (all tailwind styles)
  │    │    │    ├── _app.global.scss (*if needed)
  │    │    │    ├── _variables.global.scss (*if needed, declare css variables)
  │    │    │    ├── index.scss (*if needed, bundles and exports the global styles to be imported in root index.js)
  │    ├── /modules (co-locates files that are used on a feature. by default maps 1:1 to page)
  │    │    ├── /page (default: corresponds to routes from /pages folder)
  │    │    │    ├── /components
  │    │    │    │    ├── /Component
  │    │    │    │    │    ├── Component.tsx
  │    │    │    │    │    ├── Component.test.tsx
  │    │    │    │    │    ├── Component.module.scss
  │    │    │    │    ├── index.ts (exports all the com )
  │    │    │    ├── page.service.ts
  │    │    │    ├── page.utils.ts
  │    ├── /pages (nextjs treats each page as route itself)
  │    ├── /tests
  │    │    ├── /e2e (end-to-end test-files)
  │    │    ├── /test-results (end-to-end test generated screenshots/videos)
  │    │    ├── /utils
  │    │    │    ├── /mocks (mock data and handlers for test using msw)
  │    │    │    ├── test-setup.tsx (setup custom reusable wrapper for tests)
  │    │    │    ├── generate-data.ts (generate data for mock database)
  │    │    │    ├── server.ts (test mock server setup for msw)
  │    ├── /types (shareable types)
  │    ├── config.ts (exports the process.env variables)
  ├── .storybook/ (storybook configs)
  ├── .env.test (test env vars)
  ├── .env.local (local env vars)
  ├── playwright.config.ts (config for e2e playwright tests)
  ├── jest.config.ts (jest config)
  ├── jest.setup.ts (jest setup for tests hooks)
  └── playwright.config.ts (config for e2e playwright tests)

```

## Tech Used

- NextJS with Typescript, Tailwind
- Uses `axios` for api-calls, and `react-query` for remote data-state and cache

## File-import Aliases

Aliases are for easier imports. Aliases can be used to import like `import { something } from '@/shared/components/....'`,

- Aliases are setup in `tsonfig.json` for vs-code path-resolve, `jest.config.js` for jest moduleNameResolver

**Default aliases setup**

- `@/` for `./src`: from root

## Test

- Uses `react-testing-library` with `jest` as test-runner
- `msw` to mock api calls
- Base test setup can be found in `jest.config.js` and `jest.setup.js`
- Test-utils functions and data are in `src/tests/utils*`
- Uses `playwright/test` for e2e tests

## Generate Backend types

**If the backend has proper swagger data models defined**, we can generate the types automatically [openapi-typescript-codegen](https://www.npmjs.com/package/openapi-typescript-codegen)

Download the openapi json or yaml file of the apiDocs, check the `generate:api` script in `package.json`, it will show the parameters that are needed

# Features

### How authentication works

`TODO`
