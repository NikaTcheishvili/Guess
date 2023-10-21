import React, {useEffect, useState} from 'react';
import {FlatList, ListRenderItem} from 'react-native';
import {Loader} from '@components';
import firestore, {
  FirebaseFirestoreTypes,
} from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import {useIsFocused} from '@react-navigation/native';
import {GAMES_COLLECTION, USER_COLLECTION} from '@utils/firestore';
import {EmptyHistory, Game, ListHeader} from './components';
import useStyles from './styles';
import {IGame} from '../types';

const HistoryScreen = () => {
  const styles = useStyles();
  const user = auth().currentUser;
  const isFocused = useIsFocused();
  const [games, setGames] = useState<IGame[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isFocused) {
      firestore()
        .collection(USER_COLLECTION)
        .doc(user?.uid)
        .collection(GAMES_COLLECTION)
        .get()
        .then(querySnapshot => {
          const list: FirebaseFirestoreTypes.DocumentData[] = [];
          querySnapshot.forEach(queryDocumentSnapshot => {
            list.push({
              id: queryDocumentSnapshot.id,
              ...queryDocumentSnapshot.data(),
            });
          });

          setIsLoading(false);
          setGames(list.reverse() as IGame[]);
        });
    }
  }, [isFocused, user?.uid]);

  const renderItem: ListRenderItem<IGame> = ({item, index}) => {
    return <Game item={item} index={index} />;
  };

  if (isLoading) {
    return <Loader />;
  }

  if (!games.length) {
    return <EmptyHistory />;
  }

  return (
    <FlatList
      data={games}
      renderItem={renderItem}
      ListHeaderComponent={ListHeader}
      contentContainerStyle={styles.contentContainer}
    />
  );
};

export default HistoryScreen;
