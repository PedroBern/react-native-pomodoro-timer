import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, TextInput, Text, Keyboard } from 'react-native';
import StyledText from './StyledText';
import connectToContext from '../context';
import { toHHMMSS } from '../utils';

const styles = StyleSheet.create({
  fill: {
    width: '100%'
  },
  row: {
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    width: 100,
  },
  textInput: {
    padding: 4,
    margin: 4,
    minWidth: 48,
    borderWidth: 1,
    borderColor: 'grey',
    fontSize: 24,
    textAlign: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  unit: {
    paddingLeft: 2,
    paddingRight: 8,
    fontSize: 18,
    color: 'grey'
  }
});

const StyledTextInput = props => (
  <TextInput
    style={styles.textInput}
    keyboardType='numeric'
    {...props}
  />
)

const Row = ({
  title,
  onChange,
  value
}) => {

  const [time, setTime] = useState(toHHMMSS(value, true));

  const handleChange = (key, value)  => {
    const newValue = { ...time };
    newValue[key] = Number(value);
    setTime({...newValue});
  }

  useEffect(() => {
    const totalSeconds = time.seconds + time.minutes * 60 + time.hours * 3600;
    onChange(totalSeconds);
  }, [time]);

  return (
    <View style={[styles.row, styles.fill]}>
      <StyledText style={styles.label}>
        {title}
      </StyledText>
      <View style={styles.inputContainer}>
        {['hours', 'minutes', 'seconds'].map((unit, index) => (
          <React.Fragment key={unit}>
            <StyledTextInput
              selectTextOnFocus
              onChangeText={value => handleChange(unit, value)}
              value={`${time[unit]}`}
            />
            <Text style={styles.unit}>{unit[0]}</Text>
          </React.Fragment>
        ))}
      </View>
    </View>
  )
}

const SecondaryControls = React.memo(({
  changeInitialTime,
  changeBreak,
  initialTime,
  breakTime,
}) => {

  return (
    <View style={styles.fill}>
      <Row
        title='Work'
        onChange={changeInitialTime}
        value={initialTime}
      />
      <Row
        title='Rest'
        onChange={changeBreak}
        value={breakTime}
      />
    </View>
  )
});

SecondaryControls.propTypes = {

}

export default connectToContext(SecondaryControls, [
  'changeInitialTime',
  'changeBreak',
  'initialTime',
  'breakTime'
]);
