import React from 'react';
import { AppContext } from './ContextProvider';

function select(arr) {
  const context = React.useContext(AppContext);
  const selectedValues = {};
  arr.forEach(key => (
    selectedValues[key] = context[key]
  ));

  return { ...selectedValues };
}

function connectToContext(WrappedComponent, contextKeys) {
  return function(props){
    const selectors = select(contextKeys);
    return <WrappedComponent {...selectors} {...props}/>
  }
}

export default connectToContext;
