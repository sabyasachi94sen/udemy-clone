/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { request as __request } from '../core/request';

export class AepService {

    /**
     * @returns void
     * @throws ApiError
     */
    public static aepDeleteDelete({
        id,
    }: {
        id: string,
    }): CancelablePromise<void> {
        return __request({
            method: 'DELETE',
            path: `/aep/delete/${id}/`,
        });
    }

    /**
     * @returns any
     * @throws ApiError
     */
    public static aepListList(): CancelablePromise<any> {
        return __request({
            method: 'GET',
            path: `/aep/list/`,
        });
    }

}