

import cookie from "js-cookie";

import { AUTH_TOKEN_COOKIE } from "../constants";

type TokenType = "auth";
/* ---- Remove both auth tokens from local storage ---- */
export const deleteLocalAuthTokens = (): void => {
  cookie.remove(AUTH_TOKEN_COOKIE);
};
