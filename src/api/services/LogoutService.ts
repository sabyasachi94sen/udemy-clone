/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { request as __request } from '../core/request';

export class LogoutService {

    /**
     * Logout DELETE API
     * Service usage and description : This API is used to log out the user.
     *
     * Authentication Required : NO
     *
     * Request Data
     * {
         * "token" : ""
         * }
         * @returns void
         * @throws ApiError
         */
        public static logoutDelete(): CancelablePromise<void> {
            return __request({
                method: 'DELETE',
                path: `/logout/`,
            });
        }

    }