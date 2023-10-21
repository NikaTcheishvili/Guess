import {useColors} from '@hooks';
import {StyleSheet} from 'react-native';

const useStyles = () => {
  const {colors} = useColors();

  return StyleSheet.create({
    center: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: colors.background,
    },
  });
};

export default useStyles;
