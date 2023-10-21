import {Pressable} from 'react-native';
import React, {FC} from 'react';
import Animated from 'react-native-reanimated';
import {Weary} from '@assets/SVG';
import {Text} from '@components';
import {GameOverProps} from '../types';
import useStyles from '../styles';

const GameOver: FC<GameOverProps> = ({handleFinish, animStyles}) => {
  const styles = useStyles();

  return (
    <Animated.View style={[styles.nextButton, styles.gameOver, animStyles]}>
      <Weary />
      <Text dark bold uppercase size={20} marginTop={10} lineHeight={24}>
        Game over
      </Text>
      <Pressable onPress={() => handleFinish()}>
        <Text dark uppercase bold marginTop={16}>
          Finish
        </Text>
      </Pressable>
    </Animated.View>
  );
};

export default GameOver;
