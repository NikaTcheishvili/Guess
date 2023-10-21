import {persistStore, persistReducer, PersistConfig} from 'redux-persist';
import {combineReducers, configureStore} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {GlobalSlice} from './slices';
import {weatherApi, locationApi} from './apis';

const persistConfig: PersistConfig<any> = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['global'],
};

const reducers = combineReducers({
  global: GlobalSlice,
  [weatherApi.reducerPath]: weatherApi.reducer,
  [locationApi.reducerPath]: locationApi.reducer,
});

const persistedReducer = persistReducer(persistConfig, reducers);
const middlewares = [weatherApi.middleware, locationApi.middleware];

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }).concat(middlewares),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof reducers>;
export type AppDispatch = typeof store.dispatch;
