import React from 'react';
import {View} from 'react-native';
import {Text} from '@components';
import useStyles from '../styles';

const EmptyHistory = () => {
  const styles = useStyles();
  return (
    <View style={styles.center}>
      <Text>You don't have game history yet.</Text>
    </View>
  );
};

export default EmptyHistory;
