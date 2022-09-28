/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { request as __request } from '../core/request';

export class ForgotService {

    /**
     * Forgot Password API
     *
     * Authentication Required : NO
     * Request Data
     * {
         * "email" : ""
         * }
         * @returns any
         * @throws ApiError
         */
        public static forgotPasswordCreate(): CancelablePromise<any> {
            return __request({
                method: 'POST',
                path: `/forgot/password/`,
            });
        }

    }