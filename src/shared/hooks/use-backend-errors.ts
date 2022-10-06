import isArray from "lodash-es/isArray";
import toast from "react-hot-toast";

import { ApiError } from "@/api";

export const useBackendErrors = () => {
  const displayErrorMessages = (errors: ApiError) => {
    if (isArray(errors)) {
      // const msg = createValidationMessages(errors.body?.detail);
      // msg.forEach((e) => {
      //   toast.error(t(e));
      // });
    } else {
      // toast.error(errors?.response?.data?.errorMessage);
      toast.error(errors?.body?.errorMessage);
    }
  };

  return { displayErrorMessages };
};
