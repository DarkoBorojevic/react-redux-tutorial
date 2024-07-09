import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ROOT_URL } from '../constants';

const baseQuery = fetchBaseQuery({
    rootUrl: ROOT_URL
});

export const parentApiSlice = createApi({
    baseQuery,
    tagTypes: ['Product'],
    endpoints: (builder) => ({
        
    })
});
