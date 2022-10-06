
import { handleMutation } from "@/shared/services/api-client";

const verifyEmail = (email: object) => handleMutation({
    resourceUrl: "forgot/password",
    method: "POST",
    reqBody: email,
  });

const verifyOTP = (mutateObj: object) => {
  const data = {
     ...mutateObj
  };

  return handleMutation({
    resourceUrl: "verify/otp",
    method: "POST",
    reqBody: data,
  });
};

const confirmPassword = (mutateObj: object) => {
  const data = {
   ...mutateObj
  };

  return handleMutation({
    resourceUrl: "reset/password",
    method: "POST",
    reqBody: data,
  });
};

export const PasswordResetObj = {
  verify_email: verifyEmail,
  verify_otp: verifyOTP,
  confirm_password: confirmPassword,
};
