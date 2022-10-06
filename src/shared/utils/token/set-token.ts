import cookie from "js-cookie";

import { AUTH_TOKEN_COOKIE, USERTYPE_COOKIE } from "../constants";

type TokenType = "auth" | "userType";

export const setToken = (tokenType: TokenType, token: string): void => {
  if (tokenType === "auth") {
    cookie.remove(AUTH_TOKEN_COOKIE);
    cookie.set(AUTH_TOKEN_COOKIE, token);
  }
  if (tokenType === "userType") {
    cookie.remove(USERTYPE_COOKIE);
    cookie.set(USERTYPE_COOKIE, token);
  }
};
