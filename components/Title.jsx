import React  from 'react';
import PropTypes from 'prop-types';
import connectToContext from '../context';
import StyledText from './StyledText';

const Title = ({ paused }) => (
  <StyledText large>
    {paused ? 'PAUSED' : 'Work Timer'}
  </StyledText>
);

Title.propTypes = {
  paused: PropTypes.bool.isRequired
}

export default connectToContext(Title, ['paused']);
