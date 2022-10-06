/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { request as __request } from '../core/request';

export class SuperAdminListService {

    /**
     * @returns any
     * @throws ApiError
     */
    public static superAdminListList({
        id,
    }: {
        /** Super Admin ID **/
        id?: string,
    }): CancelablePromise<any> {
        return __request({
            method: 'GET',
            path: `/super_admin_list/`,
            query: {
                'id': id,
            },
        });
    }

}