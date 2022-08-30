
import cookie from "js-cookie";

import { AUTH_TOKEN_COOKIE } from "../constants";

type TokenType = "auth";

export const getToken = (tokenType: TokenType): string | undefined => {
  if (tokenType === "auth") {
    return cookie.get(AUTH_TOKEN_COOKIE);
  }

  return undefined;
};
