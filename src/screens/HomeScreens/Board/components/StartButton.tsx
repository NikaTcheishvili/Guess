import React, {FC} from 'react';
import {Pressable} from 'react-native';
import Animated from 'react-native-reanimated';
import LottieView from 'lottie-react-native';
import {StartButtonProps} from '../types';
import useStyles from '../styles';

const StartButton: FC<StartButtonProps> = ({handleStart, lottieStyles}) => {
  const styles = useStyles();

  return (
    <Pressable onPress={handleStart} style={styles.lottieView}>
      <Animated.View style={[lottieStyles]}>
        <LottieView
          loop
          autoPlay
          style={styles.lottie}
          source={require('@assets/lottie/start.json')}
        />
      </Animated.View>
    </Pressable>
  );
};

export default StartButton;
