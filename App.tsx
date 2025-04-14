import { NunitoSans_400Regular, NunitoSans_700Bold, useFonts } from '@expo-google-fonts/nunito-sans';
import { ActivityIndicator } from 'react-native';
import { ThemeProvider } from 'styled-components/native';

import { Routes } from '@routes/index';
import { theme } from "@theme/index";

export default function App() {
  const [fontsLoaded] = useFonts({ 
    NunitoSans_400Regular, 
    NunitoSans_700Bold 
  });

  return (
    <ThemeProvider theme={theme}>
      { fontsLoaded ? <Routes /> : <ActivityIndicator /> }
    </ThemeProvider>
  );
}
