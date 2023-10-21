import React, {FC} from 'react';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useColors} from '@hooks';
import {Text} from '@components';
import {RoundItemProps} from '../types';
import useStyles from '../styles';

const RoundItem: FC<RoundItemProps> = ({item, index}) => {
  const styles = useStyles();
  const {colors} = useColors();
  const cities = item.cities.join(', ');

  return (
    <>
      {!index && (
        <Text bold style={styles.title}>
          Rounds:
        </Text>
      )}
      <View style={styles.item}>
        <Text flex dark bold>
          Round #{index + 1}
        </Text>
        <View style={styles.divider} />
        <View style={styles.fieldWrapper}>
          <Text flex dark>
            Cities:
          </Text>
          <Text flex dark>
            {cities}
          </Text>
        </View>
        <View style={styles.fieldWrapper}>
          <Text flex dark>
            Hightest Temp:
          </Text>
          <Text flex dark>
            {item.highestTemp} °F
          </Text>
        </View>
        <View style={styles.fieldWrapper}>
          <Text flex dark>
            Selected City:
          </Text>
          <Text flex dark>
            {item.selectedCity}
          </Text>
        </View>
        <View style={styles.fieldWrapper}>
          <Text flex dark>
            Selected City Temp:
          </Text>
          <Text flex dark>
            {item.selectedCityTemp} °F
          </Text>
        </View>
        <View style={styles.fieldWrapper}>
          <Text flex dark>
            Round result:
          </Text>
          <Icon
            size={22}
            style={styles.flexOne}
            color={colors.DARK_BLUE}
            name={item.won ? 'check' : 'close'}
          />
        </View>
      </View>
    </>
  );
};

export default RoundItem;
