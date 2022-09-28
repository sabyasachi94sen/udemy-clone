/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { request as __request } from '../core/request';

export class VerifyService {

    /**
     * Verify OTP API
     *
     * Authentication Required : NO
     * Request Data
     * {
         * "email" : "email@domain.com",
         * "otp" : "1232"
         * }
         * @returns any
         * @throws ApiError
         */
        public static verifyOtpCreate(): CancelablePromise<any> {
            return __request({
                method: 'POST',
                path: `/verify/otp/`,
            });
        }

    }