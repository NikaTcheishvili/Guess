import {useColors} from '@hooks';
import {StyleSheet} from 'react-native';

const useStyles = () => {
  const {colors} = useColors();
  return StyleSheet.create({
    container: {
      fontSize: 14,
      lineHeight: 20,
      color: colors.text,
    },
    uppercase: {
      textTransform: 'uppercase',
    },
    headline: {
      fontSize: 24,
      lineHeight: 36,
    },
    label: {
      fontSize: 16,
      lineHeight: 24,
    },
    center: {
      textAlign: 'center',
    },
    dark: {
      color: colors.DARK_BLUE,
    },
    flex: {
      flex: 1,
    },
    bold: {
      fontWeight: '600',
    },
  });
};

export default useStyles;
