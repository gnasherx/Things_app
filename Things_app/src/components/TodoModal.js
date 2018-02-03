import React, { Component } from "react";
import { Text, View, Modal, StyleSheet } from "react-native";

export default class TodoModal extends Component {
  state = {
    modalTodoVisible: false
  };

  openToDoModal() {
    this.setState({ modalTodoVisible: true });
  }

  closeToDoModal() {
    this.setState({ modalTodoVisible: false });
  }

  render() {
    return (
      <Modal
        visible={this.state.modalTodoVisible}
        animationType={"fade"}
        onRequestClose={() => this.closeToDoModal()}
      >
        <View style={styles.modalView}>
          <Text>Add new To-Do</Text>
        </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  modalView: {
    backgroundColor: "#000"
  }
});
