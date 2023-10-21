import {StyleProp, ViewStyle} from 'react-native';

export interface TextInputProps {
  value: string;
  placeholder: string;
  secureTextEntry?: boolean;
  style?: StyleProp<ViewStyle>;
  onChangeText: (text: string) => void;
}
