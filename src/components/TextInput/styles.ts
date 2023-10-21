import {useColors} from '@hooks';
import {StyleSheet} from 'react-native';

const useStyles = () => {
  const {colors} = useColors();
  return StyleSheet.create({
    input: {
      width: '100%',
      height: 45,
      marginTop: 20,
      borderWidth: 1,
      borderRadius: 10,
      color: colors.text,
      paddingHorizontal: 10,
      borderColor: colors.text,
    },
    placeholder: {
      color: colors.text,
    },
  });
};

export default useStyles;
