/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { request as __request } from '../core/request';

export class LoginService {

    /**
     * User Login Api View
     * API to authenticate User
     *
     * Authentication Required : NO
     *
     * Data :{
         * "email" : "email id",
         * "password" : "password"
         * }
         * @returns any
         * @throws ApiError
         */
        public static loginCreate(): CancelablePromise<any> {
            return __request({
                method: 'POST',
                path: `/login/`,
            });
        }

    }