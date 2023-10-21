import React, {FC} from 'react';
import {Pressable, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Animated, {
  withDelay,
  withTiming,
  interpolate,
  useAnimatedStyle,
  interpolateColor,
} from 'react-native-reanimated';
import {Colors, Values} from '@constants';
import useStyles from '../styles';
import {CardProps} from '../types';
import {Text} from '@components';

const transX = (Values.width - Values.CARD_WIDTH - 48) / 2;

const Card: FC<CardProps> = ({
  item,
  level,
  flip,
  index,
  position,
  correct,
  disabled,
  onFlip = () => {},
}) => {
  const {top} = useSafeAreaInsets();
  const styles = useStyles();

  const isEasy = level === 10;
  const isMedium = level === 15;
  const isHard = level === 20;

  const animStyle = useAnimatedStyle(() => {
    const translateY = interpolate(
      position.value,
      [0, 1],
      [
        Values.height,
        isEasy
          ? (Values.height -
              top -
              Values.BOARD_HEADER_HIGHT -
              2 * Values.DISTANCE_BEETWEEN_CARDS) /
              2 -
            Values.CARD_HEIGHT
          : (isMedium || isHard) && (index === 2 || index === 3)
          ? 260
          : Values.DISTANCE_BEETWEEN_CARDS,
      ],
    );

    const translateX = interpolate(
      position.value,
      [0, 1],
      [
        0,
        index === 2 && isMedium
          ? 0
          : -transX +
            (index % 2) * (Values.CARD_WIDTH + Values.DISTANCE_BEETWEEN_CARDS),
      ],
    );

    return {
      transform: [
        {
          translateY: withDelay(index * 150, withTiming(translateY)),
        },
        {
          translateX: withDelay(index * 150, withTiming(translateX)),
        },
      ],
    };
  });

  const frontAnimStyle = useAnimatedStyle(() => {
    const rotateValue = interpolate(flip.value, [0, 1], [0, 180]);
    return {
      transform: [
        {
          rotateY: `${rotateValue}deg`,
        },
      ],
    };
  });

  const backAnimStyle = useAnimatedStyle(() => {
    const rotateValue = interpolate(flip.value, [0, 1], [180, 360]);
    return {
      transform: [
        {
          rotateY: `${rotateValue}deg`,
        },
      ],
    };
  });

  const bgColorAnimStyle = useAnimatedStyle(() => {
    const color = correct ? Colors.SUCCESS : Colors.FAILURE;
    return {
      backgroundColor: interpolateColor(
        flip.value,
        [0, 1],
        [Colors.PRIMARY, color],
      ),
    };
  });

  if (!item) {
    return <></>;
  }

  return (
    <Animated.View style={[styles.cardContainer, animStyle]}>
      <View>
        <Animated.View style={[styles.back, backAnimStyle]}>
          <Animated.View style={[styles.card, bgColorAnimStyle]}>
            <Text dark bold>
              Temp: {item.temp}°F
            </Text>
            <Text dark>Feels like: {item.feels_like}°F</Text>
            <Text dark>Humidity: {item.humidity}</Text>
            <Text dark>Pressure: {item.pressure}</Text>
          </Animated.View>
        </Animated.View>
        <Animated.View
          style={[styles.front, disabled && styles.disabled, frontAnimStyle]}>
          <Pressable onPress={() => onFlip()} disabled={disabled}>
            <View style={[styles.card]}>
              <Text dark uppercase bold>
                {item.name}
              </Text>
            </View>
          </Pressable>
        </Animated.View>
      </View>
    </Animated.View>
  );
};

export default Card;
