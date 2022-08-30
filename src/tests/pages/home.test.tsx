/* eslint-disable */
import { APP_API_ENDPOINT } from "@/config";
import Home from "@/pages/index";
import { server, rest } from "@/tests/utils/server";
import { render, screen } from "@/tests/utils/test-utils";
import { expect } from "vitest";

describe("Home page", () => {
  it("should redirect to /login when user is not logged in", async () => {
    server.use(
      rest.get(`${APP_API_ENDPOINT}/user`, (req, res, ctx) =>
        res(ctx.status(404), ctx.json({}))
      )
    );
    // router.push("/");
    render(<Home />);

    expect(screen.getByText(/Hello/i)).toBeInTheDocument();
  });
});

// describe("App", () => {
//   it("renders a heading", () => {
//     render(<Index />);

//     const heading = screen.getByText("heading");

//     expect(heading).toBeInTheDocument();
//   });

//   it("useStateContext works", async () => {
//     render(<Index />);

//     userEvent.click(screen.getByTestId("useStateContext"));

//     expect(await screen.findByText(/chatterjee/i)).toBeInTheDocument();
//   });

//   it("useReducerContextWorks", async () => {
//     render(<Index />);

//     userEvent.click(screen.getByTestId("useReducerContext"));

//     expect(await screen.findByText(/1000/i)).toBeInTheDocument();
//   });

//   it("query success works", async () => {
//     render(<Index />);

//     expect(screen.getByText(/post is loading/i)).toBeInTheDocument();

//     expect(await screen.findByText(/test/i)).toBeInTheDocument();
//   });

//   it("query error works", async () => {
//     server.use(
//       rest.get(`${APP_API_ENDPOINT}/user`, (req, res, ctx) =>
//         res(ctx.status(404), ctx.json({}))
//       )
//     );
//     render(<Index />);

//     expect(await screen.findByText(/404/i)).toBeInTheDocument();
//   });
// });
