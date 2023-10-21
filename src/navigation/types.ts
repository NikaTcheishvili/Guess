import {RouteProp} from '@react-navigation/native';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {AppNavigatorParamList, TabParamList} from './AppNavigator';
import {HistoryStackParamList} from './stacks/HistoryStack';
import {HomeStackParamList} from './stacks/HomeStack';
import {AuthStackParamList} from './AuthNavigator';

export type AppNavigatorNavigationProps<
  T extends keyof AppNavigatorParamList & string,
> = NativeStackNavigationProp<AppNavigatorParamList, T>;

export type BottomTabNavigationProps<T extends keyof TabParamList & string> =
  BottomTabNavigationProp<TabParamList, T>;

export type AuthStackNavigationProps<
  T extends keyof AuthStackParamList & string,
> = NativeStackNavigationProp<AuthStackParamList, T>;

export type HomeStackNavigationProps<
  T extends keyof HomeStackParamList & string,
> = NativeStackNavigationProp<HomeStackParamList, T>;

export type HistoryStackNavigationProps<
  T extends keyof HistoryStackParamList & string,
> = NativeStackNavigationProp<HistoryStackParamList, T>;

export type AppNavigtorRouteProps<
  T extends keyof AppNavigatorParamList & string,
> = RouteProp<AppNavigatorParamList, T>;

export type BottomTabRouteProps<T extends keyof TabParamList & string> =
  RouteProp<TabParamList, T>;

export type AuthStackRouteProps<T extends keyof AuthStackParamList & string> =
  RouteProp<AuthStackParamList, T>;

export type HomeStackRouteProps<T extends keyof HomeStackParamList & string> =
  RouteProp<HomeStackParamList, T>;

export type HistoryStackRouteProps<
  T extends keyof HistoryStackParamList & string,
> = RouteProp<HistoryStackParamList, T>;
