import {TextProps as RNTextProps} from 'react-native';

export type TextProps = {
  size?: number;
  label?: boolean;
  headline?: boolean;
  uppercase?: boolean;
  center?: boolean;
  lineHeight?: number;
  color?: string;
  dark?: boolean;
  flex?: boolean;
  bold?: boolean;
  marginTop?: number;
} & RNTextProps;
