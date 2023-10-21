import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeStack, HistoryStack} from './stacks';
import {HISTORY, HOME, INITIAL} from './ScreenNames';
import {hideHeader, tabOptions} from './config';

export type TabParamList = {
  [HOME]: undefined;
  [HISTORY]: undefined;
};

export type AppNavigatorParamList = {
  [INITIAL]: undefined;
};

const Tab = createBottomTabNavigator<TabParamList>();
const Stack = createNativeStackNavigator<AppNavigatorParamList>();

const TabNavigator = () => {
  const {Navigator, Screen} = Tab;
  return (
    <Navigator screenOptions={tabOptions}>
      <Screen name={HOME} component={HomeStack} />
      <Screen name={HISTORY} component={HistoryStack} />
    </Navigator>
  );
};

const AppNavigator = () => {
  const {Navigator, Screen} = Stack;
  return (
    <Navigator initialRouteName={INITIAL} screenOptions={hideHeader}>
      <Screen name={INITIAL} component={TabNavigator} />
    </Navigator>
  );
};

export default AppNavigator;
