import {useColors} from '@hooks';
import {StyleSheet} from 'react-native';

const useStyles = () => {
  const {colors} = useColors();
  return StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: colors.background,
    },
    text: {
      color: colors.text,
    },
    listHeader: {
      padding: 10,
      borderBottomWidth: 1,
      flexDirection: 'row',
      borderBottomColor: colors.text,
    },
    renderItem: {
      padding: 10,
      marginTop: 10,
      borderRadius: 10,
      flexDirection: 'row',
      backgroundColor: colors.primary,
    },
    wrapper: {
      flex: 1,
      alignItems: 'center',
    },
    level: {
      textTransform: 'capitalize',
    },
    contentContainer: {
      paddingHorizontal: 16,
    },
    center: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: colors.background,
    },
  });
};
export default useStyles;
