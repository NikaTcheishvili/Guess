import {Colors, Values} from '@constants';
import {useColors} from '@hooks';
import {StyleSheet} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const useStyles = () => {
  const {colors} = useColors();
  const {top} = useSafeAreaInsets();

  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
    },
    levelButtons: {
      flex: 1,
      paddingHorizontal: 24,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: colors.background,
    },
    buttonContainer: {
      paddingHorizontal: 24,
    },
    cover: {
      paddingTop: 15,
      borderRadius: 16,
      borderWidth: 0.5,
      alignSelf: 'center',
      alignItems: 'center',
      width: Values.CARD_WIDTH,
      height: Values.CARD_HEIGHT,
      backgroundColor: colors.PRIMARY,
      transform: [
        {
          translateY:
            Values.height -
            (top + Values.BOARD_HEADER_HIGHT) -
            2 * Values.DISTANCE_BEETWEEN_CARDS,
        },
      ],
    },
    nextButton: {
      borderRadius: 20,
      alignItems: 'center',
      justifyContent: 'center',
      position: 'absolute',
      backgroundColor: colors.PRIMARY,
      width: Values.NEXT_BUTTON_WIDTH,
      height: Values.NEXT_BUTTON_HEIGHT,
      top: Values.height / 2 - Values.NEXT_BUTTON_HEIGHT / 2,
      left: Values.width / 2 - Values.NEXT_BUTTON_WIDTH / 2,
    },
    nextContainer: {
      gap: 5,
      flexDirection: 'row',
      alignItems: 'center',
    },
    helpWrapper: {
      width: '100%',
      height: 40,
    },
    helpButton: {
      width: '100%',
      height: 40,
      marginTop: 10,
      borderRadius: 8,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: colors.PRIMARY,
    },
    info: {
      marginTop: 10,
      marginHorizontal: 24,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    disabled: {
      opacity: 0.5,
    },
    gameOver: {
      alignItems: 'center',
      width: Values.GAME_OVER_WIDTH,
      height: Values.GAME_OVER_HEIGHT,
      top: Values.height / 2 - Values.GAME_OVER_HEIGHT / 2,
      left: Values.width / 2 - Values.GAME_OVER_WIDTH / 2,
    },
    label: {
      color: colors.text,
    },
    lottieView: {
      position: 'absolute',
      top: Values.height / 2 - 75,
      left: Values.width / 2 - 80,
    },
    modal: {
      height: 150,
      borderRadius: 16,
      marginHorizontal: 24,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: colors.WHITE,
      marginTop: Values.height / 2 - 75,
      shadowColor: colors.BLACK,
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
    modalButtons: {
      gap: 50,
      marginTop: 20,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    arrowContainer: {
      marginTop: 10,
      paddingHorizontal: 24,
    },
    lottie: {
      width: 150,
      height: 150,
    },
    cardContainer: {
      flex: 1,
      alignItems: 'center',
    },
    card: {
      borderRadius: 16,
      borderWidth: 0.5,
      alignItems: 'center',
      width: Values.CARD_WIDTH,
      height: Values.CARD_HEIGHT,
      justifyContent: 'space-evenly',
      backgroundColor: colors.PRIMARY,
    },
    front: {
      backfaceVisibility: 'hidden',
    },
    back: {
      position: 'absolute',
      backfaceVisibility: 'hidden',
    },
    congratsModal: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: Colors.DARK_BLUE,
    },
    congratsAnimstyle: {
      width: Values.width,
      height: Values.height / 2,
    },
    doneButtonContainer: {
      marginTop: 40,
      paddingHorizontal: 24,
    },
  });
};

export default useStyles;
