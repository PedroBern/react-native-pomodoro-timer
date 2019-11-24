import React from 'react';
import reducer from './reducer';
import initialValue from './initialValue';

export const AppContext = React.createContext()

export function ContextProvider(props) {
  const [state, dispatch] = React.useReducer(reducer, {
    ...initialValue,
    togglePause: () => dispatch({ type: 'togglePause' }),
    reset: () => dispatch({ type: 'reset' }),
    decrease: () => dispatch({ type: 'decrease' }),
    changeInitialTime: value => dispatch({ type: 'changeInitialTime', value }),
    changeBreak: value => dispatch({ type: 'changeBreak', value })
  })

  return (
    <AppContext.Provider value={state}>
      {props.children}
    </AppContext.Provider>
  );
}
