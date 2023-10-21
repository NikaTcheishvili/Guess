import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {BoardScreen, HomeScreen} from '@screens';
import {hideHeader, homeStackScreenOptions} from '../config';
import {BOARD_SCREEN, HOME_SCREEN} from '../ScreenNames';

export type HomeStackParamList = {
  [HOME_SCREEN]: undefined;
  [BOARD_SCREEN]: {
    level: number;
  };
};

const Stack = createNativeStackNavigator<HomeStackParamList>();

const HomeStack = () => {
  const {Navigator, Screen} = Stack;

  return (
    <Navigator screenOptions={homeStackScreenOptions}>
      <Screen component={HomeScreen} name={HOME_SCREEN} />
      <Screen
        component={BoardScreen}
        name={BOARD_SCREEN}
        options={hideHeader}
      />
    </Navigator>
  );
};

export default HomeStack;
