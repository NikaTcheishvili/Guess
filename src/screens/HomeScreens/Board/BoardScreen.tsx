import React, {useCallback, useEffect, useState} from 'react';
import {View, SafeAreaView} from 'react-native';
import {skipToken} from '@reduxjs/toolkit/query';
import auth from '@react-native-firebase/auth';
import {useNavigation, useRoute} from '@react-navigation/native';
import {useGetCitiesQuery, useGetWeatherByCoordsQuery} from '@store/apis';
import {
  runOnJS,
  withDelay,
  withTiming,
  interpolate,
  useSharedValue,
  useAnimatedStyle,
  withSequence,
} from 'react-native-reanimated';
import {HomeStackNavigationProps, HomeStackRouteProps} from 'navigation/types';
import {Cover} from '@assets/SVG';
import {
  startGame,
  finishGame,
  updateHelp,
  updateError,
  updateRounds,
} from '@utils/firestore';
import {
  Card,
  Header,
  GameOver,
  ExitModal,
  NextButton,
  StartButton,
} from './components';
import CongratsModal from './components/CongratsModal';
import {IWeather} from '@store/apis/types';
import useStyles from './styles';

const randomNum = Math.floor(Math.random() * 1000) + 1;

const BoardScreen = () => {
  const styles = useStyles();
  const position = useSharedValue(0);
  const flip = useSharedValue(0);
  const fadeIn = useSharedValue(0);
  const lottie = useSharedValue(0);
  const {params} = useRoute<HomeStackRouteProps<'BoardScreen'>>();
  const {goBack} = useNavigation<HomeStackNavigationProps<'HomeScreen'>>();
  const [level, setLevel] = useState(params.level);
  const [error, setError] = useState(0);
  const [rounds, setRounds] = useState(1);
  const [offset, setOffset] = useState(randomNum);
  const [useHelp, setUseHelp] = useState(false);
  const [isHelpUsed, setIsHelpUsed] = useState(false);
  const [currentGameId, setCurrentGameId] = useState('');
  const [selectedCity, setSelectedCity] = useState<IWeather>({} as IWeather);
  const [started, setStarted] = useState(false);
  const [visible, setVisible] = useState(false);
  const [congratsVisible, setCongratsVisible] = useState(false);
  const [selectingDisabled, setSelectingDisabled] = useState(false);
  const [isGameWon, setIsGameWon] = useState(false);
  const userId = auth().currentUser?.uid;

  const {data: cities} = useGetCitiesQuery(
    {limit: level / 5, offset},
    {skip: !level},
  );
  const {data: weather} = useGetWeatherByCoordsQuery(cities ?? skipToken);
  const sortedTemp = weather?.map(item => item.temp).sort((a, b) => a - b);

  const handleFinish = useCallback(
    (stopped?: boolean) => {
      if (!userId) {
        return;
      }
      const highestTemp = sortedTemp?.[sortedTemp?.length - 1];
      finishGame(userId, currentGameId, stopped || false, {
        highestTemp,
        cities: weather?.map(item => item.name),
        selectedCity: selectedCity.name,
        selectedCityTemp: selectedCity.temp,
        won: selectedCity.temp === highestTemp,
      });

      fadeIn.value = withTiming(0);
      setRounds(0);
      setOffset(0);
      setError(0);
      setLevel(0);
      setStarted(false);
      setIsHelpUsed(false);
      goBack();
    },
    [currentGameId, fadeIn, goBack, selectedCity, sortedTemp, userId, weather],
  );

  useEffect(() => {
    if (isGameWon && !congratsVisible) {
      handleFinish();
    }
  }, [congratsVisible, goBack, handleFinish, isGameWon]);

  useEffect(() => {
    lottie.value = withDelay(500, withTiming(1));
  }, [lottie]);

  const handleCongrats = useCallback(() => {
    setCongratsVisible(true);
    setIsGameWon(true);
  }, []);

  const onFlip = useCallback(
    (item: IWeather) => {
      if (selectingDisabled) {
        return;
      }
      setSelectingDisabled(true);
      const isLastRound = rounds === params.level;
      const isMistake = sortedTemp?.[sortedTemp.length - 1] !== item.temp;
      setError(prev => (isMistake ? prev + 1 : prev));
      setSelectedCity(item);

      if (isMistake && userId) {
        updateError(userId, currentGameId, error);
      }

      if (position.value) {
        flip.value = withSequence(
          withTiming(1),
          withDelay(
            2000,
            withTiming(0, undefined, isFinished => {
              if (isFinished) {
                position.value = withDelay(
                  200,
                  withTiming(0, undefined, isDone => {
                    if (isDone) {
                      if (isLastRound && !isMistake) {
                        runOnJS(handleCongrats)();
                      } else {
                        fadeIn.value = withDelay(
                          (level / 5) * 150,
                          withTiming(1),
                        );
                      }
                      runOnJS(handleCongrats)();
                      runOnJS(setSelectingDisabled)(false);
                    }
                  }),
                );
              }
            }),
          ),
        );
      }
    },
    [
      selectingDisabled,
      sortedTemp,
      userId,
      position,
      currentGameId,
      error,
      flip,
      rounds,
      params.level,
      fadeIn,
      level,
      handleCongrats,
    ],
  );

  const animStyles = useAnimatedStyle(() => {
    const scale = interpolate(fadeIn.value, [0, 1], [0, 1]);
    return {
      transform: [{scale}],
    };
  });

  const lottieStyles = useAnimatedStyle(() => {
    const scale = interpolate(lottie.value, [0, 1], [0, 1]);
    return {
      transform: [{scale}],
    };
  });

  const handleStart = async () => {
    if (userId) {
      const res = await startGame(userId, level);
      setCurrentGameId(res.id);
      setStarted(true);
      lottie.value = withTiming(0);
      position.value = withTiming(1);
    }
  };

  const handleNext = () => {
    if (!userId) {
      return;
    }
    const highestTemp = sortedTemp?.[sortedTemp?.length - 1];
    setRounds(prev => prev + 1);
    setOffset(prev => prev + level / 5);
    useHelp && setUseHelp(false);
    fadeIn.value = withTiming(0, undefined, isFinished => {
      if (isFinished) {
        position.value = withDelay(500, withTiming(1));
      }
    });
    updateRounds(userId, currentGameId, {
      highestTemp,
      cities: weather?.map(item => item.name),
      selectedCity: selectedCity.name,
      selectedCityTemp: selectedCity.temp,
      won: selectedCity.temp === highestTemp,
    });
  };

  const handleHelp = () => {
    if (!userId) {
      return;
    }
    setUseHelp(true);
    setIsHelpUsed(true);
    updateHelp(userId, currentGameId);
  };

  const toggleModal = () => {
    setVisible(prev => !prev);
  };

  const onConfirm = () => {
    toggleModal();
    handleFinish(true);
  };

  const handleNav = () => {
    if (started) {
      toggleModal();
    } else {
      goBack();
    }
  };

  const handleDone = () => {
    setCongratsVisible(false);
  };

  return (
    <>
      <SafeAreaView style={styles.container}>
        <Header
          error={error}
          rounds={rounds}
          level={level}
          started={started}
          isHelpUsed={isHelpUsed}
          handleHelp={handleHelp}
          handleNav={handleNav}
        />
        <View>
          {weather?.map((item, index) => {
            let disabled = false;
            if (level === 15) {
              disabled = useHelp && sortedTemp?.[0] === item.temp;
            }
            if (level === 20) {
              disabled =
                useHelp &&
                (sortedTemp?.[0] === item.temp ||
                  sortedTemp?.[1] === item.temp);
            }
            return (
              <Card
                key={index}
                index={index}
                item={item}
                flip={flip}
                level={level}
                position={position}
                onFlip={() => onFlip(item)}
                correct={sortedTemp?.[sortedTemp?.length - 1] === item.temp}
                disabled={disabled}
              />
            );
          })}
        </View>
        <View style={styles.cover}>
          <Cover />
        </View>
        {!selectingDisabled && !isGameWon && (
          <NextButton handleNext={handleNext} animStyles={animStyles} />
        )}
        {!started && (
          <StartButton handleStart={handleStart} lottieStyles={lottieStyles} />
        )}
        {error > 1 && (
          <GameOver handleFinish={handleFinish} animStyles={animStyles} />
        )}
        {visible && (
          <ExitModal
            visible={visible}
            onConfirm={onConfirm}
            toggleModal={toggleModal}
          />
        )}
        {congratsVisible && (
          <CongratsModal visible={congratsVisible} handleDone={handleDone} />
        )}
      </SafeAreaView>
    </>
  );
};

export default BoardScreen;
