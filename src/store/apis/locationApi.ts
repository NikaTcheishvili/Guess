import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {Coord, ILocationReq, ILocationRes} from './types';
import {Credentials} from '@constants';

export const locationApi = createApi({
  reducerPath: 'locationApi',
  baseQuery: fetchBaseQuery({
    baseUrl: Credentials.LOCATIONS_BASE_URL,
  }),
  tagTypes: ['Location'],
  keepUnusedDataFor: 0,
  endpoints: builder => ({
    getCities: builder.query<Coord[], ILocationReq>({
      query: ({limit, offset}) => ({
        url: 'cities',
        params: {
          limit,
          offset,
          hateoasMode: 'off',
          countryIds: 'US',
        },
      }),
      providesTags: ['Location'],
      transformResponse: (response: ILocationRes) =>
        response.data.map(({latitude, longitude}) => ({
          lat: latitude,
          lon: longitude,
        })),
    }),
  }),
});

export const {useGetCitiesQuery} = locationApi;
