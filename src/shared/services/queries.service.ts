import { handleQuery, handleMutation } from "./api-client";

import { User, UserResponse } from "@/types/api";

// @see https://github.com/microsoft/TypeScript/issues/10571
// We're duplicating the Error result generics in useQuery call to type the Error
// Till TS allows skipping generics

export const fetchAuthUser = async (queryParams?: Partial<API.QueryParams>) =>
  handleQuery<UserResponse, Partial<API.QueryParams>>({
    resourceUrl: `/user`,
    queryParams,
  });

// export const createAuthUser = async (reqBody: RequestBody) =>
//   handleMutation<MutationResponse, RequestBody>({
//     resourceUrl: `/user`,
//     method: "PUT",
//     reqBody,
//   });
