import React, {FC} from 'react';
import {Pressable} from 'react-native';
import {Text} from '@components';
import Animated, {
  withTiming,
  useSharedValue,
  useAnimatedStyle,
  FlipInEasyX,
  FlipOutEasyX,
} from 'react-native-reanimated';
import {ButtonProps} from './types';
import useStyles from './styles';

const Button: FC<ButtonProps> = ({label, onPress, labelStyle, darkLabel}) => {
  const styles = useStyles();
  const opacity = useSharedValue(1);

  const fadeIn = () => {
    opacity.value = withTiming(0.5);
  };
  const fadeOut = () => {
    opacity.value = withTiming(1);
  };

  const animStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
  }));

  return (
    <Pressable
      onPress={onPress}
      onPressIn={fadeIn}
      onPressOut={fadeOut}
      style={styles.wrapper}>
      <Animated.View
        style={[styles.cont, animStyle]}
        entering={FlipInEasyX}
        exiting={FlipOutEasyX}>
        <Text children={label} style={[darkLabel && styles.dark, labelStyle]} />
      </Animated.View>
    </Pressable>
  );
};

export default Button;
