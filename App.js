import { NavigationContainer } from "@react-navigation/native";
import * as React from 'react';
import { AppRegistry } from 'react-native';
import { StyleSheet, Text, View } from "react-native";
import { theme } from './src/theme/theme';
import { Button, Provider } from 'react-native-paper';
import Tabs from "./src/navigation/Tabs";

const App = () => {
  return (
    <Provider theme={theme}>
      <NavigationContainer>
        <Tabs />

      </NavigationContainer>

    </Provider>

  )
}

export default App

const styles = StyleSheet.create({})
