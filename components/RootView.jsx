import React  from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, KeyboardAvoidingView } from 'react-native';
import connectToContext from '../context';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingTop: 16,
  },
  work: {
    backgroundColor: '#69f0ae'
  },
  break: {
    backgroundColor: '#ff5252'
  }
});

const RootView = React.memo(({
  children,
  work,
  ...other
}) => (
  <KeyboardAvoidingView
    style={[styles.root, styles[work ? 'work' : 'break']]}
    {...other}
    behavior="padding"
  >
    {children}
  </KeyboardAvoidingView>
));

RootView.propTypes = {
  work: PropTypes.bool.isRequired,
}

export default connectToContext(RootView, ['work']);
