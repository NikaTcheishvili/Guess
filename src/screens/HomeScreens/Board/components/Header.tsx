import React, {FC} from 'react';
import {Pressable, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Text} from '@components';
import {HeaderProps} from '../types';
import useStyles from '../styles';

const Header: FC<HeaderProps> = ({
  error,
  rounds,
  level,
  started,
  isHelpUsed,
  handleHelp,
  handleNav,
}) => {
  const styles = useStyles();
  return (
    <View>
      <Pressable onPress={handleNav} style={styles.arrowContainer}>
        <Icon name="arrow-back-ios" size={20} {...styles.label} />
      </Pressable>
      <View style={styles.info}>
        <Text>Mistake: {error > 1 ? 1 : error} / 1</Text>
        <View>
          <Text>
            Round: {rounds} / {level}
          </Text>
          <View style={styles.helpWrapper}>
            {level !== 10 && (
              <Pressable
                onPress={handleHelp}
                disabled={!started || isHelpUsed}
                style={[styles.helpButton, isHelpUsed && styles.disabled]}>
                <Text dark children="HELP" />
              </Pressable>
            )}
          </View>
        </View>
      </View>
    </View>
  );
};

export default Header;
