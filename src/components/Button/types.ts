import {StyleProp, TextStyle} from 'react-native';

export type ButtonProps = {
  label: string;
  labelStyle?: StyleProp<TextStyle>;
  darkLabel?: boolean;
  onPress: () => void;
};
