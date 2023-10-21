import React, {useState} from 'react';
import {Pressable, View} from 'react-native';
import auth from '@react-native-firebase/auth';
import {useNavigation} from '@react-navigation/native';
import {Button, Text, TextInput} from '@components';
import {Colors, ErrorMessages} from '@constants';
import {AuthError, ALREADY_USED, INVALID_EMAIL} from './types';
import useStyles from './styles';

const Signup = () => {
  const styles = useStyles();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const {goBack} = useNavigation();

  const handleSignUp = async () => {
    try {
      await auth().createUserWithEmailAndPassword(email, password);
      await auth().currentUser?.updateProfile({displayName: name});
    } catch (e: unknown) {
      const err = e as AuthError;
      if (err.code === ALREADY_USED) {
        setError(ErrorMessages.ALREADY_USED_MESSAGE);
      }
      if (err.code === INVALID_EMAIL) {
        setError(ErrorMessages.INVALID_EMAIL_MESSAGE);
      }
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        value={name}
        onChangeText={setName}
        placeholder="Enter your name"
        style={styles.nameField}
      />
      <TextInput value={email} onChangeText={setEmail} placeholder="Email" />
      <TextInput
        value={password}
        onChangeText={setPassword}
        placeholder="Password"
        secureTextEntry
      />
      {error && <Text style={styles.error}>*{error}</Text>}
      <Button label="Sign Up" onPress={handleSignUp} />
      <Pressable onPress={goBack} style={styles.signin}>
        <Text>
          Already have account ?
          <Text children=" Sign In" color={Colors.PRIMARY} />
        </Text>
      </Pressable>
    </View>
  );
};

export default Signup;
