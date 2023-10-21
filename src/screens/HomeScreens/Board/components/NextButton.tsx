import React, {FC} from 'react';
import {Pressable} from 'react-native';
import Animated from 'react-native-reanimated';
import {Text} from '@components';
import {Rocket} from '@assets/SVG';
import {NextButtonProps} from '../types';
import useStyles from '../styles';

const NextButton: FC<NextButtonProps> = ({handleNext, animStyles}) => {
  const styles = useStyles();
  return (
    <Animated.View style={[styles.nextButton, animStyles]}>
      <Pressable onPress={handleNext} style={styles.nextContainer}>
        <Text children="Next" dark bold uppercase size={20} lineHeight={24} />
        <Rocket />
      </Pressable>
    </Animated.View>
  );
};

export default NextButton;
