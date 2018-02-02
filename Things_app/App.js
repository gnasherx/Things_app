import React, { Component } from "react";
import { Text, View } from "react-native";
import { StackNavigator } from "react-navigation";
import MainScreen from "./src/components/MainScreen";

const App = StackNavigator({
  MainScreen: { screen: MainScreen }
});

export default App;