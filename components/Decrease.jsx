import React  from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text } from 'react-native';
import connectToContext from '../context';

const styles = StyleSheet.create({
  time: {
    fontSize: 48,
  }
});

const Decrease = React.memo(({
  decrease
}) => {

  React.useEffect(() => {
    const interval = setInterval(decrease, 1000);
    return () => clearInterval(interval);
  }, [])

  return null;
})

Decrease.propTypes = {
  decrease: PropTypes.func.isRequired
}

export default connectToContext(Decrease, ['decrease']);
