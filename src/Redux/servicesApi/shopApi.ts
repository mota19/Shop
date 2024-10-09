import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { shopApiAllProductsResponse } from '../../typesTs/type';

export const shopApi = createApi({
    reducerPath: 'shopApi',
    baseQuery: fetchBaseQuery({baseUrl: 'https://fakestoreapi.com/'},),
    endpoints: (builder) => ({getShopAllProducts: builder.query<shopApiAllProductsResponse, {}>({query: ({})=> 'products'}),
    getOneProduct: builder.query<shopApiAllProductsResponse, {id: number}>({query:({id})=>`products/${id}`})}),
})

export const {useGetShopAllProductsQuery, useGetOneProductQuery} = shopApi;