import React, {FC} from 'react';
import {Modal, View} from 'react-native';
import LottieView from 'lottie-react-native';
import {CongratsModalProps} from '../types';
import useStyles from '../styles';
import {Button} from '@components';

const CongratsModal: FC<CongratsModalProps> = ({visible, handleDone}) => {
  const {congratsModal, congratsAnimstyle, doneButtonContainer} = useStyles();
  return (
    <Modal visible={visible} animationType="fade">
      <View style={congratsModal}>
        <LottieView
          loop
          autoPlay
          style={congratsAnimstyle}
          source={require('@assets/lottie/congrats.json')}
        />
        <View style={doneButtonContainer}>
          <Button darkLabel label="Done" onPress={handleDone} />
        </View>
      </View>
    </Modal>
  );
};

export default CongratsModal;
