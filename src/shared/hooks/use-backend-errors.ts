import { AxiosError } from "axios";
import isArray from "lodash-es/isArray";
import toast from "react-hot-toast";

export const useBackendErrors = () => {
  const displayErrorMessages = (errors: AxiosError) => {
    console.log(
      "file: use-form-errors.ts ~ line 8 ~ displayErrorMessages ~ errors",
      errors,
    );
    if (isArray(errors)) {
      // const msg = createValidationMessages(errors.body?.detail);
      // msg.forEach((e) => {
      //   toast.error(t(e));
      // });
    } else {
      toast.error(errors?.response?.data?.errorMessage);
    }
  };

  return { displayErrorMessages };
};
