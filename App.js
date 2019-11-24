import React from 'react';
import { ContextProvider } from './context';
import {
  DisplayTime,
  PrimaryControls,
  Title,
  RootView,
  SecondaryControls
} from './components';

export default function App() {
  return (
    <ContextProvider>
      <RootView>
        <Title />
        <DisplayTime />
        <SecondaryControls />
        <PrimaryControls />
      </RootView>
    </ContextProvider>
  );
};
