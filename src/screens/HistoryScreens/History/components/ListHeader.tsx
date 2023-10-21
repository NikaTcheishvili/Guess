import React from 'react';
import {View} from 'react-native';
import {Text} from '@components';
import useStyles from '../styles';

const ListHeader = () => {
  const styles = useStyles();
  return (
    <View style={styles.listHeader}>
      <View style={styles.wrapper}>
        <Text>Game #</Text>
      </View>
      <View style={styles.wrapper}>
        <Text>Level</Text>
      </View>
      <View style={styles.wrapper}>
        <Text>Result</Text>
      </View>
    </View>
  );
};

export default ListHeader;
