/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { request as __request } from '../core/request';

export class UserService {

    /**
     * User Details Api View
     * API to fetch User details
     *
     * Authentication Required : NO
     *
     * Headers :
     * {
         * "Authorization" : "Token XXXX"
         * }
         * @returns any
         * @throws ApiError
         */
        public static userDetailsList(): CancelablePromise<any> {
            return __request({
                method: 'GET',
                path: `/user/details/`,
            });
        }

        /**
         * User Update Api View
         * API to Update User details
         *
         * Authentication Required : YES
         *
         * Headers : {
             * "Authorization" : "Token XXXX"
             * }
             *
             * PUT Data : {
                 * "username" : "kamal",
                 * "email"    : "karre@eoraa.com"
                 * }
                 * @returns any
                 * @throws ApiError
                 */
                public static userUpdateUpdate(): CancelablePromise<any> {
                    return __request({
                        method: 'PUT',
                        path: `/user/update/`,
                    });
                }

            }