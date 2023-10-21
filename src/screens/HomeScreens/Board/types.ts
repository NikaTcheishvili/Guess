import {IWeather} from '@store/apis/types';
import {StyleProp, ViewStyle} from 'react-native';
import {SharedValue} from 'react-native-reanimated';

export type CardProps = {
  item: IWeather;
  index: number;
  level: number;
  correct: boolean;
  disabled: boolean;
  flip: SharedValue<number>;
  position: SharedValue<number>;
  onFlip: () => void;
};

export interface ExitModalProps {
  visible: boolean;
  toggleModal: () => void;
  onConfirm: () => void;
}

export interface HeaderProps {
  error: number;
  rounds: number;
  level: number;
  started: boolean;
  isHelpUsed: boolean;
  handleHelp: () => void;
  handleNav: () => void;
}

export interface StartButtonProps {
  handleStart: () => void;
  lottieStyles: StyleProp<ViewStyle>;
}

export interface NextButtonProps {
  handleNext: () => void;
  animStyles: StyleProp<ViewStyle>;
}

export interface GameOverProps {
  handleFinish: () => void;
  animStyles: StyleProp<ViewStyle>;
}

export interface CongratsModalProps {
  visible: boolean;
  handleDone: () => void;
}
