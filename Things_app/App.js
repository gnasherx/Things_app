import React, { Component } from "react";
import { Text, View } from "react-native";
import { StackNavigator } from "react-navigation";
import MainScreen from "./src/screens/MainScreen";
import Today from "./src/screens/Today";

const App = StackNavigator({
  MainScreen: { screen: MainScreen },
  Today: { screen: Today }
});

export default App;
