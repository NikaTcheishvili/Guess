import {StyleSheet, useWindowDimensions} from 'react-native';
import {useColors} from '@hooks';

const useStyles = () => {
  const {colors} = useColors();
  const {height} = useWindowDimensions();

  return StyleSheet.create({
    container: {
      backgroundColor: colors.background,
      paddingHorizontal: 24,
      paddingTop: height / 5,
    },
    heading: {
      alignItems: 'center',
    },
    text: {
      color: colors.text,
    },
    label: {
      color: colors.DARK_BLUE,
    },
  });
};

export default useStyles;
