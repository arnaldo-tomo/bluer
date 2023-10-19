import React, { useState } from 'react';
import { AppRegistry } from 'react-native';
import { PaperProvider, ThemeProvider } from 'react-native-paper';
import { name as appName } from './app.json';
import { StackRoute } from './routes/stackRoute';
import { NavigationContainer } from '@react-navigation/native';


export default function Main() {

  const [palette, setPalette] = useState({
    primary: "red",
    background: "blue",
  });
  return (

    <PaperProvider >
      <ThemeProvider palette={palette}>
        <NavigationContainer>
          <StackRoute />
        </NavigationContainer>
      </ThemeProvider>
    </PaperProvider>
  );
}

AppRegistry.registerComponent(appName, () => Main);