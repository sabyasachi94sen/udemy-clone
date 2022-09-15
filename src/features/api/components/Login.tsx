import axios from "axios";

const Login = async (loginCreds: object) => {

  const config = {
    method: "post",
    url: "https://pippams-dev.eoraa.com/api/login/",
    headers: {
      "Content-Type": "application/json",
    },
    data: JSON.stringify(loginCreds),
  };

  const res = await axios(config);

  return res;
};

export const loginObj = {
  login: Login,
};
