import React, {useState} from 'react';
import {Pressable, View} from 'react-native';
import auth from '@react-native-firebase/auth';
import {useNavigation} from '@react-navigation/native';
import {Button, Text, TextInput} from '@components';
import {AuthStackNavigationProps} from 'navigation/types';
import useStyles from './styles';
import {AuthError, INTERNAL_ERROR, INVALID_EMAIL} from './types';
import {Colors, ErrorMessages} from '@constants';

const Signin = () => {
  const styles = useStyles();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const {navigate} = useNavigation<AuthStackNavigationProps<'SignupScreen'>>();

  const handleSignUp = () => {
    navigate('SignupScreen');
  };

  const handleSignIn = async () => {
    if (!email || !password) {
      setError(ErrorMessages.EMPTY_FIELDS_MESSAGE);
      return;
    }
    try {
      await auth().signInWithEmailAndPassword(email, password);
    } catch (e: unknown) {
      const err = e as AuthError;
      if (err.code === INVALID_EMAIL) {
        setError(ErrorMessages.INVALID_EMAIL_MESSAGE);
      }
      if (err.code === INTERNAL_ERROR) {
        setError(ErrorMessages.INTERNAL_ERROR_MESSAGE);
      }
    }
  };

  return (
    <View style={styles.container}>
      <TextInput value={email} onChangeText={setEmail} placeholder="Email" />
      <TextInput
        value={password}
        onChangeText={setPassword}
        placeholder="Password"
        secureTextEntry
      />
      {error && <Text style={styles.error}>*{error}</Text>}
      <Button label="Sign In" onPress={handleSignIn} />
      <Pressable onPress={handleSignUp} style={styles.signup}>
        <Text>
          Don't have account ?
          <Text children=" Sign Up" color={Colors.PRIMARY} />
        </Text>
      </Pressable>
    </View>
  );
};

export default Signin;
