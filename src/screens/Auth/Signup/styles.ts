import {Values} from '@constants';
import {useColors} from '@hooks';
import {StyleSheet} from 'react-native';

const useStyles = () => {
  const {colors} = useColors();

  return StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: 24,
      backgroundColor: colors.background,
    },
    nameField: {
      marginTop: Values.height / 5,
    },
    error: {
      color: colors.FAILURE,
      marginTop: 10,
    },
    signin: {
      marginTop: 20,
      marginLeft: 5,
    },
  });
};

export default useStyles;
