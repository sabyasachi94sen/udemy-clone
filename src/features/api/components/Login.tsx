import { handleMutation } from "@/shared/services/api-client";


const Login = (loginCreds: object) => handleMutation({
    resourceUrl: "login",
    method: "POST",
    reqBody: loginCreds,
  });

export const loginObj = {
  login: Login,
};
