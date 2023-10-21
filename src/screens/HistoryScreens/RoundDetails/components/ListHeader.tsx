import React, {FC} from 'react';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Text} from '@components';
import {useColors} from '@hooks';
import {HeaderProps} from '../types';
import useStyles from '../styles';

const ListHeader: FC<HeaderProps> = ({level, isHelpUsed, error, stopped}) => {
  const styles = useStyles();
  const {colors} = useColors();

  return (
    <View style={styles.header}>
      <View style={styles.field}>
        <Text flex dark>
          Level:
        </Text>
        <Text flex style={styles.level} dark>
          {level}
        </Text>
      </View>
      {level !== 'easy' && (
        <View style={styles.field}>
          <Text flex dark>
            Help:
          </Text>
          <Icon
            size={22}
            style={styles.flexOne}
            color={colors.DARK_BLUE}
            name={isHelpUsed ? 'check' : 'close'}
          />
        </View>
      )}
      <View style={styles.field}>
        <Text flex dark>
          Final result:
        </Text>
        <Icon
          size={22}
          style={styles.flexOne}
          color={colors.DARK_BLUE}
          name={error > 1 || stopped ? 'close' : 'check'}
        />
      </View>
      {stopped && (
        <View style={styles.field}>
          <Text flex dark>
            Stopped:
          </Text>
          <Icon
            size={22}
            name="check"
            style={styles.flexOne}
            color={colors.DARK_BLUE}
          />
        </View>
      )}
    </View>
  );
};

export default ListHeader;
