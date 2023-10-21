import React, {useEffect, useState} from 'react';
import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import AppNavigator from './AppNavigator';
import AuthNavigator from './AuthNavigator';
import {useAppSelector} from '@hooks';
import {Theme} from '@constants';
import {StatusBar} from 'react-native';

const Navigation = () => {
  const navigationRef = useNavigationContainerRef();
  const {theme} = useAppSelector(store => store.global);
  const [initializing, setInitializing] = useState(true);
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(user => {
      setIsAuth(!!user);
      if (initializing) {
        setInitializing(false);
      }
    });

    return subscriber;
  }, [initializing]);

  if (initializing) {
    return null;
  }

  return (
    <NavigationContainer
      ref={navigationRef}
      theme={theme === 'dark' ? Theme.dark : Theme.light}>
      <StatusBar hidden />
      {isAuth ? <AppNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};

export default Navigation;
