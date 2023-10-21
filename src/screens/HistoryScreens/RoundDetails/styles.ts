import {useColors} from '@hooks';
import {StyleSheet} from 'react-native';

const useStyles = () => {
  const {colors} = useColors();

  return StyleSheet.create({
    container: {
      padding: 24,
    },
    item: {
      padding: 10,
      marginTop: 10,
      borderRadius: 10,
      backgroundColor: colors.PRIMARY,
    },
    contentContainer: {
      padding: 24,
    },
    field: {
      marginTop: 10,
      flexDirection: 'row',
    },
    level: {
      textTransform: 'capitalize',
    },
    header: {
      padding: 10,
      paddingBottom: 20,
      borderRadius: 10,
      backgroundColor: colors.SUCCESS,
    },
    center: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: colors.background,
    },
    fieldWrapper: {
      marginTop: 15,
      flexDirection: 'row',
    },
    flexOne: {
      flex: 1,
    },
    title: {
      marginTop: 10,
      marginLeft: 10,
      color: colors.text,
    },
    divider: {
      height: 0.5,
      width: '100%',
      marginTop: 10,
      backgroundColor: colors.DARK_BLUE,
    },
  });
};
export default useStyles;
