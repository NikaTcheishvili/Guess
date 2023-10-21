import React, {FC} from 'react';
import {TextInput as RNTextInput} from 'react-native';
import {TextInputProps} from './types';
import useStyles from './styles';

const TextInput: FC<TextInputProps> = ({
  value,
  onChangeText,
  placeholder,
  secureTextEntry,
  style,
}) => {
  const styles = useStyles();
  return (
    <RNTextInput
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
      secureTextEntry={secureTextEntry}
      autoCapitalize="none"
      autoCorrect={false}
      autoComplete="off"
      style={[styles.input, style]}
      placeholderTextColor={styles.placeholder.color}
    />
  );
};

export default TextInput;
