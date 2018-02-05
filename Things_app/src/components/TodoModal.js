import React, { Component } from "react";
import {
  Text,
  View,
  Modal,
  StyleSheet,
  TextInput,
  Keyboard,
  Dimensions,
  TouchableHighlight,
  Button,
  TouchableOpacity,
  ScrollView
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

var screen = Dimensions.get("window");

export default class TodoModal extends Component {
  state = {
    modalTodoVisible: false,
    modalVisible: false
  };

  openToDoModal() {
    this.setState({ modalTodoVisible: true });
  }

  closeToDoModal() {
    this.setState({ modalTodoVisible: false });
  }

  saveTodo() {
    alert("Saved");
  }

  render() {
    return (
      <Modal
        transparent
        visible={this.state.modalTodoVisible}
        animationType={"fade"}
        onShow={() => {
          this.textInput.focus();
        }}
        onRequestClose={() => this.closeToDoModal()}
      >
        <View style={styles.modalContainer}>
          <View style={styles.innerContainer}>
            <View style={styles.modalView}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "flex-end"
                }}
              >
                <Icon
                  name="close"
                  size={24}
                  color="#CCCCCC"
                  onPress={() => this.closeToDoModal()}
                />
              </View>

              <View style={{ flexDirection: "row" }}>
                <View style={styles.first}>
                  <Icon
                    name="cube"
                    size={24}
                    color="#CCCCCC"
                    style={{ marginTop: 4 }}
                  />
                </View>
                <View
                  style={{
                    flexDirection: "column",
                    marginLeft: 10,
                    flex: 1
                  }}
                >
                  <TextInput
                    underlineColorAndroid="transparent"
                    placeholder="New To-Do"
                    style={{
                      fontSize: 20,
                      padding: 0
                    }}
                    multiline={true}
                    ref={input => {
                      this.textInput = input;
                    }}
                  />
                  <TextInput
                    placeholder="Notes"
                    multiline={true}
                    style={{
                      fontSize: 18,
                      paddingTop: 6,
                      color: "#404040"
                    }}
                    underlineColorAndroid="transparent"
                  />
                </View>
              </View>
            </View>

            <View
              style={{
                flexDirection: "row",
                backgroundColor: "#E0E0E0",
                alignItems: "center",
                justifyContent: "space-between",
                paddingHorizontal: 16,
                paddingTop: 8,
                paddingBottom: 8,
                borderBottomLeftRadius: 12,
                borderBottomRightRadius: 12
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center"
                }}
              >
                <Icon
                  name="inbox"
                  size={24}
                  color="#7F7F7F"
                  style={{ justifyContent: "center", alignItems: "center" }}
                />
                <Text style={{ fontSize: 20, color: "#7F7F7F", marginLeft: 6 }}>
                  Inbox
                </Text>
              </View>
              {/* <Button
                onPress={this.saveTodo}
                title="Save"
                color="#CEA0AE"
                accessibilityLabel="Save Your ToDo"
                style={{ padding: 0, borderRadius: 8 }}
              /> */}
              <TouchableOpacity style={styles.button} onPress={this.saveTodo}>
                <Text style={{ color: "#FFF", fontSize: 20 }}> Save</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "rgba(0,0,0,0.3)"
  },
  innerContainer: {
    backgroundColor: "#FFF",
    elevation: 4,
    width: screen.width,
    flexDirection: "column",
    justifyContent: "space-between",
    marginTop: 18,
    borderRadius: 12,
    minHeight: 250
  },
  modalView: {
    flexDirection: "column",
    padding: 16
    // elevation: 2,
    // backgroundColor: "#EDEDED"
  },
  newTodo: {
    alignItems: "center",
    flexDirection: "row"
  },
  first: {
    flexDirection: "column"
  },
  button: {
    alignItems: "center",
    backgroundColor: "#CEA0AE",
    paddingTop: 6,
    paddingBottom: 6,
    paddingHorizontal: 8,
    borderRadius: 6,
    elevation: 2
  }
});
