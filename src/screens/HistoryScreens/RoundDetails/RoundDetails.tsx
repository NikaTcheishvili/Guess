import React, {useEffect, useState} from 'react';
import {FlatList, ListRenderItem} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import {useRoute} from '@react-navigation/native';
import {HistoryStackRouteProps} from 'navigation/types';
import {Loader} from '@components';
import {ListHeader, RoundItem} from './components';
import {GAMES_COLLECTION, USER_COLLECTION} from '@utils/firestore';
import {IGame, Round} from '../types';
import useStyles from './styles';

const RoundDetails = () => {
  const styles = useStyles();
  const user = auth().currentUser;
  const {params} = useRoute<HistoryStackRouteProps<'RoundDetails'>>();
  const [game, setGame] = useState<IGame>();

  useEffect(() => {
    firestore()
      .collection(USER_COLLECTION)
      .doc(user?.uid)
      .collection(GAMES_COLLECTION)
      .doc(params.id)
      .get()
      .then(res => {
        if (res.exists) {
          setGame(res.data() as IGame);
        }
      });
  }, [params.id, user?.uid]);

  const renderItem: ListRenderItem<Round> = ({item, index}) => {
    return <RoundItem item={item} index={index} />;
  };

  if (!game?.rounds.length) {
    return <Loader />;
  }

  return (
    <FlatList
      data={game?.rounds}
      renderItem={renderItem}
      ListHeaderComponent={
        <ListHeader
          level={game.level}
          error={game.error}
          stopped={game.stopped}
          isHelpUsed={game.isHelpUsed}
        />
      }
      contentContainerStyle={styles.contentContainer}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default RoundDetails;
