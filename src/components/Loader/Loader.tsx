import React from 'react';
import {ActivityIndicator, View} from 'react-native';
import useStyles from './styles';

const Loader = () => {
  const styles = useStyles();
  return (
    <View style={styles.center}>
      <ActivityIndicator />
    </View>
  );
};

export default Loader;
