import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  CheckBox
} from "react-native";
export default class SingleTodoListItem extends Component {
  render() {
    return (
      <View>
        {/* <TouchableOpacity> */}
        <ScrollView>
          {/* {todos.map((todo, index) => ( */}
          <View
            style={{
              flexDirection: "column",
              marginBottom: 10
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
                  fontSize: 20,
                  color: "#000",
                  marginBottom: 1,
                  marginLeft: 4
                }}
              >
                {this.props.item.title}
              </Text>
            </View>
            <View>
              <Text
                style={{
                  fontSize: 18,
                  color: "#8C8C8C",
                  marginLeft: 36
                }}
              >
                {this.props.item.description}
              </Text>
            </View>
          </View>
          {/* )) */}
          }
        </ScrollView>
        {/* </TouchableOpacity> */}
      </View>
    );
  }
}

// const style = StyleSheet.create({});

// export default SingleTodoListItem;
