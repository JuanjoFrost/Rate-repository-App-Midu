/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import Main from './src/components/Main'; /**Así importo un componente */
import type {PropsWithChildren} from 'react';
import { NativeRouter } from 'react-router-native';
import {
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

type SectionProps = PropsWithChildren<{
  title: string;
}>;


function App(): JSX.Element {
  return (
      <Main/>
  
  );
}

export default App;
