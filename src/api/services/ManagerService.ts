/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { request as __request } from '../core/request';

export class ManagerService {

    /**
     * Account Manager Registration APIView
     * API to Register Account Manager
     *
     * Authentication Required : YES
     *
     * Data :{
         * "manager_name" : "User X",
         * "email" : "email@domain.com"
         * }
         * @returns any
         * @throws ApiError
         */
        public static managerRegisterCreate(): CancelablePromise<any> {
            return __request({
                method: 'POST',
                path: `/manager/register/`,
            });
        }

        /**
         * Account Manager Update APIView
         * API to Register Admin
         *
         * Authentication Required : YES
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
            public static managerUdUpdate({
                id,
            }: {
                /** A unique integer value identifying this account. **/
                id: number,
            }): CancelablePromise<any> {
                return __request({
                    method: 'PUT',
                    path: `/manager/ud/${id}/`,
                });
            }

            /**
             * Account Manager Update APIView
             * API to Register Admin
             *
             * Authentication Required : YES
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
                public static managerUdDelete({
                    id,
                }: {
                    /** A unique integer value identifying this account. **/
                    id: number,
                }): CancelablePromise<void> {
                    return __request({
                        method: 'DELETE',
                        path: `/manager/ud/${id}/`,
                    });
                }

            }