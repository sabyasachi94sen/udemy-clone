/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Account } from '../models/Account';
import type { CancelablePromise } from '../core/CancelablePromise';
import { request as __request } from '../core/request';

export class AdminService {

    /**
     * Admin Registration APIView
     * API to Register Admin
     *
     * Authentication Required : YES
     *
     * Data :
     * {
         * "name" : "User X",
         * "email" : "email@domain.com"
         * }
         *
         * PUT Data : {
             * "is_active" : false,
             * "username": "",
             * "email":"",
             * "role": "superadmin" / "admin" / "accountmanager"
             * }
             * @returns any
             * @throws ApiError
             */
            public static adminList({
                page,
            }: {
                /** A page number within the paginated result set. **/
                page?: number,
            }): CancelablePromise<{
                count: number;
                next?: string | null;
                previous?: string | null;
                results: Array<Account>;
            }> {
                return __request({
                    method: 'GET',
                    path: `/admin_list/`,
                    query: {
                        'page': page,
                    },
                });
            }

            public static adminActivity(adminId){
                return __request({
                    method: "GET",
                    path: `/admin/details/${adminId}/`
                })
            }

            /**
             * Admin Registration APIView
             * API to Register Admin
             *
             * Authentication Required : YES
             *
             * Data :
             * {
                 * "name" : "User X",
                 * "email" : "email@domain.com"
                 * }
                 *
                 * PUT Data : {
                     * "is_active" : false,
                     * "username": "",
                     * "email":"",
                     * "role": "superadmin" / "admin" / "accountmanager"
                     * }
                     * @returns Account
                     * @throws ApiError
                     */
                    public static adminCreate({
                        data,
                    }: {
                        data: Account,
                    }): CancelablePromise<Account> {
                        return __request({
                            method: 'POST',
                            path: `/admin/`,
                            body: data,
                        });
                    }

                    /**
                     * Admin Registration APIView
                     * API to Register Admin
                     *
                     * Authentication Required : YES
                     *
                     * Data :
                     * {
                         * "name" : "User X",
                         * "email" : "email@domain.com"
                         * }
                         *
                         * PUT Data : {
                             * "is_active" : false,
                             * "username": "",
                             * "email":"",
                             * "role": "superadmin" / "admin" / "accountmanager"
                             * }
                             * @returns Account
                             * @throws ApiError
                             */
                            public static adminRead({
                                id,
                            }: {
                                /** A unique integer value identifying this account. **/
                                id: number,
                            }): CancelablePromise<Account> {
                                return __request({
                                    method: 'GET',
                                    path: `/admin/${id}/`,
                                });
                            }

                            /**
                             * Admin Registration APIView
                             * API to Register Admin
                             *
                             * Authentication Required : YES
                             *
                             * Data :
                             * {
                                 * "name" : "User X",
                                 * "email" : "email@domain.com"
                                 * }
                                 *
                                 * PUT Data : {
                                     * "is_active" : false,
                                     * "username": "",
                                     * "email":"",
                                     * "role": "superadmin" / "admin" / "accountmanager"
                                     * }
                                     * @returns Account
                                     * @throws ApiError
                                     */
                                    public static adminUpdate({
                                        id,
                                        data,
                                    }: {
                                        /** A unique integer value identifying this account. **/
                                        id: number,
                                        data: Account,
                                    }): CancelablePromise<Account> {
                                        return __request({
                                            method: 'PUT',
                                            path: `/admin/${id}/`,
                                            body: data,
                                        });
                                    }

                                    /**
                                     * Admin Registration APIView
                                     * API to Register Admin
                                     *
                                     * Authentication Required : YES
                                     *
                                     * Data :
                                     * {
                                         * "name" : "User X",
                                         * "email" : "email@domain.com"
                                         * }
                                         *
                                         * PUT Data : {
                                             * "is_active" : false,
                                             * "username": "",
                                             * "email":"",
                                             * "role": "superadmin" / "admin" / "accountmanager"
                                             * }
                                             * @returns Account
                                             * @throws ApiError
                                             */
                                            public static adminPartialUpdate({
                                                id,
                                                data,
                                            }: {
                                                /** A unique integer value identifying this account. **/
                                                id: number,
                                                data: Account,
                                            }): CancelablePromise<Account> {
                                                return __request({
                                                    method: 'PATCH',
                                                    path: `/admin/${id}/`,
                                                    body: data,
                                                });
                                            }

                                            /**
                                             * Admin Registration APIView
                                             * API to Register Admin
                                             *
                                             * Authentication Required : YES
                                             *
                                             * Data :
                                             * {
                                                 * "name" : "User X",
                                                 * "email" : "email@domain.com"
                                                 * }
                                                 *
                                                 * PUT Data : {
                                                     * "is_active" : false,
                                                     * "username": "",
                                                     * "email":"",
                                                     * "role": "superadmin" / "admin" / "accountmanager"
                                                     * }
                                                     * @returns void
                                                     * @throws ApiError
                                                     */
                                                    public static adminDelete({
                                                        id,
                                                    }: {
                                                        /** A unique integer value identifying this account. **/
                                                        id: number,
                                                    }): CancelablePromise<void> {
                                                        return __request({
                                                            method: 'DELETE',
                                                            path: `/admin/${id}/`,
                                                        });
                                                    }

                                                }