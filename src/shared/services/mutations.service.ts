import { handleMutation } from "./api-client";

export const login = async (reqBody) =>
  handleMutation({ method: "POST", resourceUrl: "/login", reqBody });

export const logout = async (reqBody) =>
  handleMutation({ method: "POST", resourceUrl: "/login", reqBody });
