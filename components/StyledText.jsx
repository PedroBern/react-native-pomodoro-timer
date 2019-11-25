import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
  root: {
    padding: 16,
  },
  large: {
    fontSize: 48
  },
  small: {
    fontSize: 24
  },
});

const StyledText = ({ children, large, style, ...other }) => {

  const computedStyles = [
    styles.root,
    styles[large ? 'large' : 'small'],
  ];

  if (Array.isArray(style)) {
    computedStyles.push([...style])
  }
  else {
    computedStyles.push(style)
  }

  return (
    <Text
      style={computedStyles}
      {...other}
    >
      {children}
    </Text>
  );
};

StyledText.defaulProps = {
  large: false,
};

StyledText.propTypes = {
  large: PropTypes.bool
};

export default StyledText;
