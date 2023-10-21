import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {Coord, IWeather, IWeatherRes} from './types';
import {Credentials} from '@constants';

export const weatherApi = createApi({
  reducerPath: 'weatherApi',
  baseQuery: fetchBaseQuery({
    baseUrl: Credentials.WEATHER_BASE_URL,
  }),
  tagTypes: ['Weather'],
  keepUnusedDataFor: 0,
  endpoints: builder => ({
    getWeatherByCoords: builder.query<IWeather[], Coord[]>({
      queryFn: async (coords, api, extraOptions, baseQuery) => {
        const promises = coords.map(coord => {
          return baseQuery({
            url: '/weather',
            params: {
              ...coord,
              appid: Credentials.WEATHER_API_KEY,
            },
          });
        });

        const response = await Promise.all(promises);

        const data: IWeather[] = response.map(res => {
          const {coord, id, name, main} = (res?.data as IWeatherRes) || {};

          return {
            id,
            name,
            coord,
            temp: main.temp,
            humidity: main.humidity,
            pressure: main.pressure,
            feels_like: main.feels_like,
          };
        });

        return {
          data,
        };
      },
      providesTags: ['Weather'],
    }),
  }),
});

export const {useGetWeatherByCoordsQuery} = weatherApi;
