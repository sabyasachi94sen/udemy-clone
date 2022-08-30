import cookie from "js-cookie";

import { AUTH_TOKEN_COOKIE } from "../constants";

type TokenType = "auth";

export const setToken = (tokenType: TokenType, token: string): void => {
  if (tokenType === "auth") {
    cookie.remove(AUTH_TOKEN_COOKIE);
    cookie.set(AUTH_TOKEN_COOKIE, token);
  }
};
