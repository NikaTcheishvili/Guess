import firestore from '@react-native-firebase/firestore';

export const USER_COLLECTION = 'Users';
export const GAMES_COLLECTION = 'Games';

export const updateError = (
  userId: string,
  currentGameId: string,
  error: number,
) => {
  firestore()
    .collection(USER_COLLECTION)
    .doc(userId)
    .collection(GAMES_COLLECTION)
    .doc(currentGameId)
    .update({
      error: error + 1,
    });
};

export const startGame = async (userId: string, level: number) => {
  return await firestore()
    .collection(USER_COLLECTION)
    .doc(userId)
    .collection(GAMES_COLLECTION)
    .add({
      error: 0,
      rounds: [],
      stopped: false,
      isHelpUsed: false,
      level: level === 10 ? 'easy' : level === 15 ? 'medium' : 'hard',
    });
};

export const updateRounds = async (
  userId: string,
  currentGameId: string,
  payload: Record<string, any>,
) => {
  firestore()
    .collection(USER_COLLECTION)
    .doc(userId)
    .collection(GAMES_COLLECTION)
    .doc(currentGameId)
    .update({
      rounds: firestore.FieldValue.arrayUnion(payload),
    });
};

export const updateHelp = (userId: string, currentGameId: string) => {
  firestore()
    .collection(USER_COLLECTION)
    .doc(userId)
    .collection(GAMES_COLLECTION)
    .doc(currentGameId)
    .update({
      isHelpUsed: true,
    });
};

export const finishGame = async (
  userId: string,
  currentGameId: string,
  stopped: boolean,
  payload: Record<string, any>,
) => {
  firestore()
    .collection(USER_COLLECTION)
    .doc(userId)
    .collection(GAMES_COLLECTION)
    .doc(currentGameId)
    .update({
      stopped: !!stopped,
      rounds: firestore.FieldValue.arrayUnion(payload),
    });
};
