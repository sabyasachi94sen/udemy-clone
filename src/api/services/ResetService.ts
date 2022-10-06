/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { request as __request } from '../core/request';

export class ResetService {

    /**
     * Reset Password API
     * Authentication Required : NO
     *
     * Data : {
         * 'email': 'email@domain.com',
         * 'password': '',
         * 'confirm_password': '',
         * }
         * @returns any
         * @throws ApiError
         */
        public static resetPasswordCreate(): CancelablePromise<any> {
            return __request({
                method: 'POST',
                path: `/reset/password/`,
            });
        }

    }