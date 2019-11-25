import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import Decrease from './Decrease';
import StyledText from './StyledText';
import connectToContext from '../context';

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
  },
  button: {
    alignItems: 'center',
    width: '50%'
  },
});

const StyledButton = ({title, ...other}) => (
  <TouchableOpacity
    style={styles.button}
    {...other}
  >
    <StyledText>{title}</StyledText>
  </TouchableOpacity>
);

const PrimaryControls = React.memo(({
  paused,
  togglePause,
  reset,
}) => (
  <View style={styles.root}>
    <StyledButton
      style={styles.button}
      onPress={togglePause}
      title={paused ? 'PLAY' : 'PAUSE'}
    />
    <StyledButton
      title='RESET'
      onPress={reset}
    />
    {!paused && (
      <Decrease />
    )}
  </View>
));

PrimaryControls.propTypes = {
  reset: PropTypes.func.isRequired,
  paused: PropTypes.bool.isRequired,
  togglePause: PropTypes.func.isRequired,
}

export default connectToContext(PrimaryControls, [
  'paused',
  'togglePause',
  'reset',
]);
