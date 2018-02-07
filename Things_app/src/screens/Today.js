import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";

export default class Today extends Component {
  constructor() {
    super();
  }
  static navigationOptions = {
    title: "Today"
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={{ justifyContent: "center", alignItems: "center" }}>
          Today
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#FFF",
    paddingLeft: 16,
    paddingRight: 16
  }
});
