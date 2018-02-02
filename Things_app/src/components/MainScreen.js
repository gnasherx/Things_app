import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
// import Icon from "react-native-vector-icons";

export default class extends Component {
  static navigationOptions = {
    title: "Things"
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inbox}>
          <Icon name="inbox" size={24} color="#2196F3" />
          <Text style={styles.text}>Inbox</Text>
        </View>

        <View style={styles.todo}>
          <Icon name="star" size={24} color="#FFC53A" />
          <Text style={styles.text}>Today</Text>
        </View>

        <View style={styles.todo}>
          <Icon name="clock-o" size={24} color="#8268FC" />
          <Text style={styles.text}>Upcoming</Text>
        </View>

        <View style={styles.todo}>
          <Icon name="calendar" size={20} color="#EB3569" />
          <Text style={styles.text}>Anytime</Text>
        </View>

        <View style={styles.todo}>
          <Icon name="book" size={20} color="#3BD2A2" />
          <Text style={styles.text}>Logbook</Text>
        </View>
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
  },
  inbox: {
    flexDirection: "row",
    paddingTop: 16,
    paddingBottom: 16,
    alignItems: "center"
  },
  todo: {
    flexDirection: "row",
    paddingTop: 8,
    paddingBottom: 8,
    alignItems: "center"
  },
  text: {
    fontSize: 20,
    color: "#333333",
    paddingLeft: 16
  }
});
