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

    }