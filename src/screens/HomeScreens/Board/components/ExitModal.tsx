import React, {FC} from 'react';
import {Modal, Pressable, View} from 'react-native';
import {Text} from '@components';
import {ExitModalProps} from '../types';
import useStyles from '../styles';

const ExitModal: FC<ExitModalProps> = ({visible, toggleModal, onConfirm}) => {
  const {modal, modalButtons} = useStyles();
  return (
    <Modal visible={visible} transparent animationType="fade">
      <View style={modal}>
        <Text dark children="Are you sure you want to leave ?" />
        <View style={modalButtons}>
          <Pressable onPress={toggleModal}>
            <Text dark children="Cancel" />
          </Pressable>
          <Pressable onPress={onConfirm}>
            <Text dark children="Yes" />
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};

export default ExitModal;
