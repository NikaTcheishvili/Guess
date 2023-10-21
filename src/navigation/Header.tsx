import React from 'react';
import {Pressable, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import auth from '@react-native-firebase/auth';
import {Text} from '@components';
import {setTheme} from '@store/slices/globalSlice';
import {useAppDispatch, useAppSelector, useColors} from '@hooks';
import useStyles from './styles';

const ICON_LIGHT = 'light-mode';
const ICON_DARK = 'nightlight';
const ICON_LOGOUT = 'logout';

export const HeaderLeft = () => {
  const dispatch = useAppDispatch();
  const {colors} = useColors();
  const {theme} = useAppSelector(state => state.global);
  const isDark = theme === 'dark';

  const handlePress = () => {
    dispatch(setTheme(isDark ? 'light' : 'dark'));
  };

  return (
    <Pressable onPress={handlePress} hitSlop={20}>
      <Icon
        size={18}
        name={isDark ? ICON_LIGHT : ICON_DARK}
        color={isDark ? colors.WHITE : colors.BLACK}
      />
    </Pressable>
  );
};

export const HeaderRight = () => {
  const {colors} = useColors();
  const styles = useStyles();
  const user = auth().currentUser;

  const handleLogout = () => {
    auth().signOut();
  };

  return (
    <>
      {user && (
        <View style={styles.container}>
          {user.displayName && <Text>Hello, {user.displayName}</Text>}
          <Pressable onPress={handleLogout} hitSlop={20}>
            <Icon
              size={18}
              name={ICON_LOGOUT}
              color={colors.FAILURE}
              style={styles.logout}
            />
          </Pressable>
        </View>
      )}
    </>
  );
};
