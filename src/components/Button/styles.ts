import {useColors} from '@hooks';
import {StyleSheet} from 'react-native';

const useStyles = () => {
  const {colors} = useColors();
  return StyleSheet.create({
    wrapper: {
      width: '100%',
      marginTop: 24,
    },
    cont: {
      padding: 14,
      borderRadius: 10,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: colors.PRIMARY,
    },
    dark: {
      color: colors.DARK_BLUE,
    },
  });
};

export default useStyles;
