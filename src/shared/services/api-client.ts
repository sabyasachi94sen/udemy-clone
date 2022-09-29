import axios, { AxiosRequestConfig, AxiosInstance, AxiosError } from "axios";

import { APP_API_ENDPOINT } from "@/config";
import { getToken } from "@/shared/utils";
import { GetAuthToken } from "@/features/helpers";

// https://typescript.tv/best-practices/error-ts1196-catch-clause-variable-type-annotation/#Type-Guards
// Type guard with "type predicate"
function isAxiosError(candidate: {
  isAxiosError: boolean;
}): candidate is AxiosError {
  return candidate.isAxiosError === true;
}



// Axios instance
const api: AxiosInstance = axios.create({
  headers: {
    "Content-Type": "application/json",
  },
});

// Global interceptor for auth token
// api.interceptors.request.use((config: AxiosRequestConfig) => {
//   // Get the authToken cookie, it's set when user logs in or signs up
//   const authToken = getToken("auth");

//   if (authToken) {
//     // eslint-disable-next-line no-param-reassign
//     config.headers.Authorization = `Bearer ${authToken}`;
//   }

//   return config;
// });

/* ---- Base function to get data ---- */
export const handleQuery = async <TResponse, TQuery>(config: {
  resourceUrl: string;
  queryParams?: TQuery;
}): Promise<TResponse> => {
  try {

   
    const response = await api.request({
      method: "GET",
      url: `${APP_API_ENDPOINT}${config.resourceUrl}`,
      ...(config.queryParams && { params: { ...config.queryParams } }), // Pass params if there's query object passed
      headers:{
        Authorization : GetAuthToken()
      },
    });

    return await Promise.resolve(response.data);
  } catch (error) {
    if (isAxiosError(error)) {
      return await Promise.reject(error.response);
    }

    return await Promise.reject(error);
  }
};

/* ---- Base function for Data mutation requests -> POST, PUT, PATCH, DELETE ---- */
type MutationMethods = "POST" | "PUT" | "PATCH" | "DELETE";

export const handleMutation = async <TResponse, TBody,TQuery>(config: {
  resourceUrl: string;
  method: MutationMethods;
  reqBody?: TBody;
  queryParams?: TQuery;
}): Promise<TResponse> => {
  // Check if the passed method: POST, PUT, PATCH, DELETE
  if (!["POST", "PUT", "DELETE", "PATCH"].includes(config.method)) {
    return Promise.reject(new Error("Pass a valid method"));
  }

  console.log(APP_API_ENDPOINT)

  try {
      
    
    const response = await api.request({
      method: `${config.method}`,
      url: `${APP_API_ENDPOINT}${config.resourceUrl}/`,
      ...(config.queryParams && { params: { ...config.queryParams } }),
      ...(config.reqBody && { data: config.reqBody }),
      headers: {
        Authorization: GetAuthToken()
      }
    });

    return await Promise.resolve(response.data);
  } catch (error) {
    if (isAxiosError(error)) {
      return await Promise.reject(error.response);
    }

    return await Promise.reject(error);
  }
};
