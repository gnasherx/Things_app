import React, { Component } from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import ActionButton from "react-native-action-button";
import SingleTodoListItem from "../components/SingleTodoListItem";
import { Api } from "../../constants/api";

const api = new Api();

export default class Today extends Component {
  constructor() {
    super();
  }

  static defaultProps = {
    api
  };

  static navigationOptions = {
    title: "Today"
  };

  state = {
    todos: []
  };

  async componentDidMount() {
    const todos = await api.fethAllTodos();
    this.setState(todos);
  }

  render() {
    return (
      <View style={styles.container}>
        <SingleTodoListItem todos={this.state.todos} />
        <ActionButton
          buttonColor="#8268FC"
          onPress={() => {
            alert("ccc");
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#FFF",
    padding: 16
  }
});
