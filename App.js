import React from 'react';
import { ContextProvider } from './context';
import {
  RootView,
  Title,
  DisplayTime,
  SecondaryControls,
  PrimaryControls
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
