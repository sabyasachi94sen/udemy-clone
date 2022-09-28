/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { request as __request } from '../core/request';

export class AdminListService {

    /**
     * @returns any
     * @throws ApiError
     */
    public static adminListList({
        id,
    }: {
        /** Admin ID **/
        id?: string,
    }): CancelablePromise<any> {
        return __request({
            method: 'GET',
            path: `/admin_list/`,
            query: {
                'id': id,
            },
        });
    }

}