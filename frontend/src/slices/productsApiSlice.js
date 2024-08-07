import { PRODUCTS_URL } from '../constants';
import { parentApiSlice } from './parentApiSlice';

export const productsApiSlice = parentApiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getAllProducts: builder.query({
            query: () => ({
                url: PRODUCTS_URL,
            }),
            keepUnusedDataFor: 4,
        }),
        getSingleProduct: builder.query({
            query: (productId) => ({
                url: `${PRODUCTS_URL}/${productId}`,
            }),
            keepUnusedDataFor: 4,
        }),
    }),
});

export const { 
    useGetAllProductsQuery, 
    useGetSingleProductQuery 
} = productsApiSlice;