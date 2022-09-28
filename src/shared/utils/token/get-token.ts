import cookie from "js-cookie";

import { AUTH_TOKEN_COOKIE, USERTYPE_COOKIE } from "../constants";

type TokenType = "auth" | "userType";

export const getToken = (tokenType: TokenType): string | undefined => {
  if (tokenType === "auth") {
    return cookie.get(AUTH_TOKEN_COOKIE);
  }

  if (tokenType === "userType") {
    return cookie.get(USERTYPE_COOKIE);
  }

  return undefined;
};
