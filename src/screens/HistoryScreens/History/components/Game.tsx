import React, {FC} from 'react';
import {Pressable, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Text} from '@components';
import {HistoryStackNavigationProps} from 'navigation/types';
import Icon from 'react-native-vector-icons/FontAwesome';
import {GameProps} from '../../types';
import useStyles from '../styles';
import {useColors} from '@hooks';

const Game: FC<GameProps> = ({item, index}) => {
  const styles = useStyles();
  const {colors} = useColors();
  const {navigate} =
    useNavigation<HistoryStackNavigationProps<'RoundDetails'>>();

  const handePress = () => {
    navigate('RoundDetails', {
      id: item.id,
    });
  };

  return (
    <Pressable onPress={handePress}>
      <View style={styles.renderItem}>
        <View style={styles.wrapper}>
          <Text dark>#{index + 1}</Text>
        </View>
        <View style={styles.wrapper}>
          <Text children={item.level} style={styles.level} dark />
        </View>
        <View style={styles.wrapper}>
          <Icon
            size={22}
            color={colors.DARK_BLUE}
            name={item.error > 1 || item.stopped ? 'close' : 'check'}
          />
        </View>
      </View>
    </Pressable>
  );
};

export default Game;
