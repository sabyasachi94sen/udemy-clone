// @see https://stackoverflow.com/a/49479954/9640026
import { AxiosResponse } from "axios";

// from the axios api handler, we're returning the error data
// which is type of AxiosResponse
export type APIError = AxiosResponse;

// _Request, _Data, _Query
