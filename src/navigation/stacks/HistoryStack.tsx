import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HistoryScreen, RoundDetails} from '@screens';
import {screenOptions} from '../config';
import {HISTORY_SCREEN, ROUND_DETAILS_SCREEN} from '../ScreenNames';

export type HistoryStackParamList = {
  [HISTORY_SCREEN]: undefined;
  [ROUND_DETAILS_SCREEN]: {
    id: string;
  };
};

const Stack = createNativeStackNavigator<HistoryStackParamList>();

const HomeStack = () => {
  const {Navigator, Screen} = Stack;

  return (
    <Navigator screenOptions={screenOptions}>
      <Screen component={HistoryScreen} name={HISTORY_SCREEN} />
      <Screen component={RoundDetails} name={ROUND_DETAILS_SCREEN} />
    </Navigator>
  );
};

export default HomeStack;
