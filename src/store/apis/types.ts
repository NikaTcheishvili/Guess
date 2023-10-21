export interface Coord {
  lat: number;
  lon: number;
}

export interface IWeather {
  id: number;
  name: string;
  temp: number;
  feels_like: number;
  humidity: number;
  pressure: number;
  coord: Coord;
}

export interface IWeatherRes {
  coord: Coord;
  id: number;
  main: {
    feels_like: number;
    humidity: number;
    pressure: number;
    temp: number;
    temp_max: number;
    temp_min: number;
  };
  name: string;
}

export interface ILocation {
  latitude: number;
  longitude: number;
}

export interface ILocationReq {
  limit: number;
  offset: number;
}

export interface ILocationRes {
  data: ILocation[];
  metadata: {
    currentOffset: number;
    totalCount: number;
  };
}
