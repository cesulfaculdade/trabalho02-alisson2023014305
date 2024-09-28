import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Home } from './src/screens';

import { ThemeProvider, useTheme } from 'styled-components/native';
import theme from './src/theme';





export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        backgroundColor="transparent"
        translucent
      />

    <Home/>
    </ThemeProvider>
  );
}
