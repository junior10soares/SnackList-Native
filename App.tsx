import { Loading } from '@components/Loading';

import { Nunito_700Bold, Nunito_400Regular, useFonts } from '@expo-google-fonts/nunito';

import theme from './src/theme';

import { ThemeProvider } from 'styled-components/native'
import { StatusBar } from 'react-native';
import { Routes } from '@routes/index';

export default function App() {

  const [fontsLoaded] = useFonts({ Nunito_400Regular, Nunito_700Bold });

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle='dark-content'
        backgroundColor='transparent'
        translucent
      />
      {fontsLoaded ? <Routes /> : <Loading />}
    </ThemeProvider>
  );
}