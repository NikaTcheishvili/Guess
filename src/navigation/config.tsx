import React from 'react';
import {
  RouteProp,
  getFocusedRouteNameFromRoute,
} from '@react-navigation/native';
import {BottomTabNavigationOptions} from '@react-navigation/bottom-tabs';
import {NativeStackNavigationOptions} from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/Feather';
import {HeaderLeft, HeaderRight} from './Header';
import {BOARD_SCREEN, HISTORY} from './ScreenNames';
import {TabParamList} from './AppNavigator';
import {Colors} from '@constants';

type TabOptionsProp = {
  route: RouteProp<TabParamList, keyof TabParamList>;
};

const HOME_ICON = 'home';
const HISTORY_ICON = 'list';

export const hideHeader: NativeStackNavigationOptions = {
  headerShown: false,
};

const getTabBarStyle = (route: RouteProp<TabParamList, keyof TabParamList>) => {
  const routeName = getFocusedRouteNameFromRoute(route);
  return routeName === BOARD_SCREEN ? 'none' : 'flex';
};

export const tabOptions = ({
  route,
}: TabOptionsProp): BottomTabNavigationOptions => ({
  headerShown: false,
  tabBarHideOnKeyboard: true,
  tabBarLabelStyle: {fontSize: 12},
  tabBarActiveTintColor: Colors.PRIMARY,
  tabBarStyle: {display: getTabBarStyle(route)},
  tabBarIcon: ({color}) => {
    let iconName = HOME_ICON;
    if (route.name === HISTORY) {
      iconName = HISTORY_ICON;
    }
    return <Icon name={iconName} size={18} color={color} />;
  },
});

export const screenOptions: NativeStackNavigationOptions = {
  title: '',
  headerLeft: () => <HeaderLeft />,
  headerRight: () => <HeaderRight />,
};

export const homeStackScreenOptions: NativeStackNavigationOptions = {
  title: '',
  gestureEnabled: false,
  ...screenOptions,
};
