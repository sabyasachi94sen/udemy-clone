import axios from "axios";

const verifyEmail = async (email: object) => {
  const config = {
    method: "post",
    url: "https://pippams-dev.eoraa.com/api/forgot/password/",
    headers: {
      "Content-Type": "application/json",
    },
    data: JSON.stringify(email),
  };

  const res = await axios(config);

  return res;
};

const verifyOTP = async (email: string, otp: object) => {
  const data = {
    email,
    ...otp,
  };

  const config = {
    method: "post",
    url: "https://pippams-dev.eoraa.com/api/verify/otp/",
    headers: {
      "Content-Type": "application/json",
    },
    data: JSON.stringify(data),
  };

  const res = await axios(config);

  return res;
};

const confirmPassword = async (email: string, password: object) => {
  const data = {
    email,
    ...password,
  };

  const config = {
    method: "post",
    url: "https://pippams-dev.eoraa.com/api/reset/password/",
    headers: {
      "Content-Type": "application/json",
    },

    data: JSON.stringify(data),
  };

  const res = await axios(config);

  return res;
};

export const PasswordResetObj = {
  verify_email: verifyEmail,
  verify_otp: verifyOTP,
  confirm_password: confirmPassword,
};
