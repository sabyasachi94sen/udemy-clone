import { UserResponse } from "@/types/api";

import { handleQuery } from "./api-client";

// @see https://github.com/microsoft/TypeScript/issues/10571
// We're duplicating the Error result generics in useQuery call to type the Error
// Till TS allows skipping generics

export const fetchAuthUser = async () =>
  handleQuery<UserResponse, null>({
    resourceUrl: `user/details/`,
  });

// export const createAuthUser = async (reqBody: RequestBody) =>
//   handleMutation<MutationResponse, RequestBody>({
//     resourceUrl: `/user`,
//     method: "PUT",
//     reqBody,
//   });
