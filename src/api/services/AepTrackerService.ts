import type { CancelablePromise } from '../core/CancelablePromise';
import { request as __request } from '../core/request';
import type { Account } from '../models/Account';

export class AepTrackerService {

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
            public static aepTrackerList({
                page,
            }: {
                /** A page number within the paginated result set. * */
                page?: number,
            }): CancelablePromise<{
                count: number;
                next?: string | null;
                previous?: string | null;
                results: Array<Account>;
            }> {
                return __request({
                    method: 'GET',
                    path: `/student/activity/track/`,
                    query: {
                        'page': page,
                    },
                });

               }

            public static aepTrackerDelete(data
           ): CancelablePromise<void> {
                return __request({
                    method: 'DELETE',
                    path: `/student/aep/list/`,
                    body:data
                });
            }


            public static aepTrackerStatus(id
                ): CancelablePromise<void> {
                     return __request({
                         method: 'GET',
                         path: `/student/aep/list/?student_id=${id}`,
                         
                     });
                 }


                 public static aepTrackerComplete(data
                    ): CancelablePromise<void> {
                         return __request({
                             method: 'PUT',
                             path: `/student/activity/track/`,
                             body:data
                         });
                     }
    






            

        }

        
        
