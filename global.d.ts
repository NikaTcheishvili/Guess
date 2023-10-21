import '@react-navigation/native';
import {ColorsType} from 'constants/types';

declare module '@react-navigation/native' {
  export type ExtendedTheme = {
    dark: boolean;
    colors: ColorsType;
  };
  export function useTheme(): ExtendedTheme;
}
