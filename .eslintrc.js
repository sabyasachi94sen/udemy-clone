module.exports = {
  extends: [
    "next",
    "next/core-web-vitals",
    "airbnb",
    "airbnb-typescript",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    // "plugin:sonarjs/recommended",
    "prettier",
  ],
  plugins: [
    "react",
    "react-hooks",
    "@typescript-eslint",
    "testing-library",
    "import",
    "unused-imports",
    // "sonarjs",
  ],
  parser: "@typescript-eslint/parser",

  env: {
    browser: true,
    es6: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 2022,
    project: "./tsconfig.json",
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  overrides: [
    {
      // We enable eslint-plugin-testing-library rules or preset only for matching test files!
      files: ["**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[jt]s?(x)"],
      extends: ["plugin:testing-library/react"],
    },
    {
      // Next.js, storybook needs default exports for pages and API points
      files: ["src/pages/**/*", "**/*/*.stories.@(js|jsx|ts|tsx)"],
      rules: {
        "import/no-default-export": "off",
      },
    },
  ],
  rules: {
    /*---- Eslint base ---- */
    "space-before-function-paren": [
      "error",
      {
        anonymous: "never",
        named: "never",
        asyncArrow: "always",
      },
    ],
    "padding-line-between-statements": [
      "error",
      { blankLine: "always", prev: "*", next: "return" },
      { blankLine: "always", prev: ["const", "let", "var"], next: "*" },
      {
        blankLine: "any",
        prev: ["const", "let", "var"],
        next: ["const", "let", "var"],
      },
    ],
    "object-curly-spacing": ["error", "always"],
    "one-var": ["error", "never"],
    "no-use-before-define": 0,
    "consistent-return": ["error", { treatUndefinedAsUnspecified: false }],

    // React
    "react/prop-types": 0,
    "react/jsx-indent": [2, 2],
    "react/jsx-indent-props": [2, 2],
    "react/jsx-filename-extension": 0,
    "react/react-in-jsx-scope": 0,
    "react/jsx-no-literals": 0,
    "react/jsx-one-expression-per-line": 0,
    "react/jsx-max-depth": 0,
    "react/jsx-newline": 0,
    "react/jsx-props-no-spreading": 0,
    "react/require-default-props": 0,
    "react/jsx-sort-props": [
      "error",
      {
        callbacksLast: true,
        shorthandFirst: true,
        shorthandLast: false,
        ignoreCase: false,
        noSortAlphabetically: false,
        reservedFirst: true,
      },
    ],

    /* ---- Accesibility ---- */
    // This is for children <a> tag under nextjs Link
    "jsx-a11y/anchor-is-valid": [
      "error",
      {
        components: ["Link"],
        specialLink: ["hrefLeft", "hrefRight"],
        aspects: ["invalidHref", "preferButton"],
      },
    ],

    /* ---- TypeScript ---- */
    "@typescript-eslint/no-unused-vars": "off", // handled by unused-imports plugin
    "no-unused-vars": "off", // or "@typescript-eslint/no-unused-vars": "off",
    "unused-imports/no-unused-imports": "error",
    "unused-imports/no-unused-vars": [
      "warn",
      {
        vars: "all",
        varsIgnorePattern: "^_",
        args: "after-used",
        argsIgnorePattern: "^_",
      },
    ],
    "@typescript-eslint/no-explicit-any": ["error"],
    "@typescript-eslint/no-use-before-define": ["error", { functions: false }],
    "@typescript-eslint/no-inferrable-types": [
      "error",
      {
        ignoreParameters: false,
        ignoreProperties: false,
      },
    ],

    /* ---- Import ---- */
    "import/prefer-default-export": 0,
    "import/no-default-export": 1, // prefer named exports
    "import/order": [
      "error",
      {
        "newlines-between": "always",
        groups: [
          "builtin",
          "external",
          "internal",
          "parent",
          "sibling",
          "index",
          "object",
        ],
        pathGroups: [
          { pattern: "@/modules/**", group: "internal", position: "after" },
          {
            pattern: "@public/**",
            group: "internal",
            position: "before",
          },
          {
            pattern: "@/**",
            group: "internal",
            position: "before",
          },
        ],
        alphabetize: {
          order:
            "asc" /* sort in ascending order. Options: ['ignore', 'asc', 'desc'] */,
          caseInsensitive: true /* ignore case. Options: [true, false] */,
        },
      },
    ],
    "sort-imports": [
      "error",
      {
        allowSeparatedGroups: true,
        ignoreCase: true,
        ignoreDeclarationSort: true,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ["none", "all", "multiple", "single"],
      },
    ],
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        js: "never",
        jsx: "never",
        ts: "never",
        tsx: "never",
      },
    ],
    "import/no-extraneous-dependencies": [
      "error",
      {
        // Skip test related files
        devDependencies: [
          "**/*.test.@(js|jsx|ts|tsx)",
          "./src/tests/**/*",
          "**/*/*.stories.@(js|jsx|ts|tsx)",
        ],
      },
    ],
  },
  ignorePatterns: ["node_modules/", ".next/"],
  settings: {
    "import/resolver": {
      alias: {
        map: [
          ["@", "./src/"],
          ["@public", "./public/"],
        ],
        extensions: [".ts", ".js", ".jsx", ".json", ".tsx"],
      },
    },
  },
};
