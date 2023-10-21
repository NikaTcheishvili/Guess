import React, {forwardRef} from 'react';
import {Text as RNText} from 'react-native';
import {TextProps} from './types';
import useStyles from './styles';

const Text = forwardRef<RNText, TextProps>(
  (
    {
      size,
      style,
      label,
      headline,
      children,
      uppercase,
      center,
      lineHeight,
      color,
      dark,
      flex,
      bold,
      marginTop,
      ...props
    },
    ref,
  ) => {
    const styles = useStyles();

    return (
      <RNText
        ref={ref}
        style={[
          styles.container,
          flex && styles.flex,
          label && styles.label,
          headline && styles.headline,
          uppercase && styles.uppercase,
          center && styles.center,
          color ? {color} : null,
          lineHeight ? {lineHeight} : null,
          size ? {fontSize: size} : null,
          dark && styles.dark,
          bold && styles.bold,
          marginTop ? {marginTop} : null,
          style,
        ]}
        children={children}
        {...props}
      />
    );
  },
);

export default Text;
