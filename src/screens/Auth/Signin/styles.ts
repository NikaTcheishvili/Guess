import {useColors} from '@hooks';
import {StyleSheet} from 'react-native';

const useStyles = () => {
  const {colors} = useColors();

  return StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 100,
      paddingHorizontal: 24,
      backgroundColor: colors.background,
    },
    error: {
      color: colors.FAILURE,
      marginTop: 10,
    },
    signup: {
      marginTop: 20,
      marginLeft: 5,
    },
  });
};

export default useStyles;
