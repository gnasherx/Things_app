import React, { Component } from "react";
import {
  View,
  Text,
  Modal,
  StyleSheet,
  Dimensions,
  Button
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
// import Icon from "react-native-vector-icons/Ionicons";
import ActionButton from "react-native-action-button";

var screen = Dimensions.get("window");
export default class extends Component {
  static navigationOptions = {
    title: "Things"
  };

  state = {
    modalVisible: false
  };

  openModal() {
    this.setState({ modalVisible: true });
  }

  closeModal() {
    this.setState({ modalVisible: false });
  }

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

        <ActionButton
          buttonColor="#8268FC"
          onPress={() => {
            this.openModal();
          }}
          elevation={10}
        />
        <Modal
          transparent
          visible={this.state.modalVisible}
          animationType={"fade"}
          onRequestClose={() => this.closeModal()}
        >
          <View style={styles.modalContainer}>
            <View style={styles.innerContainer}>
              <View style={styles.modalView}>
                <View style={styles.mainSingleModal}>
                  <View style={styles.modalIcon}>
                    <Icon name="plus" size={20} color="#69D7E7" />
                  </View>
                  <View style={styles.modalText}>
                    <Text style={styles.modalTextTitle}>New To-Do</Text>
                    <Text style={styles.modalSubtext}>
                      Quickly add a todo to your inbox
                    </Text>
                  </View>
                </View>

                <View style={styles.mainSingleModal}>
                  <View style={styles.modalIcon}>
                    <Icon name="edit" size={20} color="#69D7E7" />
                  </View>
                  <View style={styles.modalText}>
                    <Text style={styles.modalTextTitle}>New Section</Text>
                    <Text style={styles.modalSubtext}>
                      Define a goal, then work towords it one to-do at a time
                    </Text>
                  </View>
                </View>

                <View style={styles.mainSingleModal}>
                  <View style={styles.modalIcon}>
                    <Icon name="file-o" size={18} color="#69D7E7" />
                  </View>
                  <View style={styles.modalText}>
                    <Text style={styles.modalTextTitle}>New Project</Text>
                    <Text style={styles.modalSubtext}>
                      Group projects and to-dos based on different
                      responsibilites, such as Family or Work
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </Modal>
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
  },
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: "white"
  },

  // Modal
  modalContainer: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-end",
    backgroundColor: "rgba(0,0,0,0.2)",
    borderRadius: 10
  },
  innerContainer: {
    backgroundColor: "#333333",
    elevation: 6,
    width: screen.width - 42,
    // marginRight: 16,
    marginBottom: 18,
    borderRadius: 8
  },
  modalView: {
    flexDirection: "column",
    justifyContent: "center",
    padding: 16
  },
  mainSingleModal: {
    flexDirection: "row",
    marginBottom: 16
  },
  modalIcon: {
    justifyContent: "flex-start",
    alignItems: "center",
    paddingTop: 5
  },
  modalText: {
    flexDirection: "column",
    marginLeft: 16,
    justifyContent: "space-around"
  },
  modalTextTitle: {
    fontSize: 18,
    color: "#FFF",
    justifyContent: "center",
    alignItems: "center"
  },
  modalSubtext: {
    fontSize: 16,
    paddingRight: 16,
    justifyContent: "center",
    alignItems: "center",
    color: "#8C8C8C"
  }
});
