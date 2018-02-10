import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ScrollView,
  CheckBox
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import ActionButton from "react-native-action-button";
// import MyListItem from "../components/MyListItem";

import { Api } from "../../constants/api";

const api = new Api();

class MyListItem extends React.PureComponent {
  // _onPress = () => {
  //   this.props.onPressItem(this.props.id);
  // };

  render() {
    // const textColor = this.props.selected ? "red" : "black";
    return (
      <TouchableOpacity>
        <View
          style={{
            flexDirection: "column",
            marginTop: 16
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center"
            }}
          >
            <CheckBox
            // value={this.state.checked}
            // onValueChange={() =>
            //   this.setState({ checked: !this.state.checked })
            // }
            />
            <Text
              style={{
                fontSize: 18,
                color: "#000",
                marginLeft: 4
              }}
            >
              {this.props.title}
            </Text>
          </View>
          <View>
            <Text
              style={{
                fontSize: 16,
                color: "#8C8C8C",
                marginLeft: 36
              }}
            >
              {this.props.description}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

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

  _keyExtractor = (item, index) => item._id;

  _renderItem = ({ item }) => (
    <MyListItem
      id={item._id}
      title={item.title}
      description={item.description}
    />
  );

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.todos}
          extraData={this.state}
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItem}
        />

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
    paddingHorizontal: 12
  }
});
