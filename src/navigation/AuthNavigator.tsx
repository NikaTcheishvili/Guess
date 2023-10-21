import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SigninScreen, SignupScreen} from '@screens';
import {SIGNUP_SCREEN, SIGNIN_SCREEN} from './ScreenNames';
import {screenOptions} from './config';

export type AuthStackParamList = {
  [SIGNIN_SCREEN]: undefined;
  [SIGNUP_SCREEN]: undefined;
};

const Stack = createNativeStackNavigator<AuthStackParamList>();

const AuthNavigator = () => {
  const {Navigator, Screen} = Stack;

  return (
    <Navigator screenOptions={screenOptions}>
      <Screen component={SigninScreen} name={SIGNIN_SCREEN} />
      <Screen component={SignupScreen} name={SIGNUP_SCREEN} />
    </Navigator>
  );
};

export default AuthNavigator;
