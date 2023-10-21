import React from 'react';
import {View} from 'react-native';
import {Button, Text} from '@components';
import {useNavigation} from '@react-navigation/native';
import {HomeStackNavigationProps} from 'navigation/types';
import useStyles from './styles';

const HomeScreen = () => {
  const styles = useStyles();
  const {navigate} = useNavigation<HomeStackNavigationProps<'BoardScreen'>>();

  const handleNav = (level: number) => {
    navigate('BoardScreen', {level});
  };

  return (
    <View style={styles.container}>
      <View style={styles.heading}>
        <Text children="Choose Level" style={[styles.text]} />
      </View>
      <Button label="Easy" onPress={() => handleNav(10)} darkLabel />
      <Button label="Medium" onPress={() => handleNav(15)} darkLabel />
      <Button label="Hard" onPress={() => handleNav(20)} darkLabel />
    </View>
  );
};

export default HomeScreen;
