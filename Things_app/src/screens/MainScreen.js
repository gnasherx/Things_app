import React, { Component } from "react";
import {
  View,
  Text,
  Modal,
  StyleSheet,
  Dimensions,
  Button,
  TouchableWithoutFeedback,
  TextInput,
  Animated,
  ScrollView,
  FlatList,
  CheckBox
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import ActionButton from "react-native-action-button";
import { Api } from "../../constants/api";
import TodoModal from "../components/TodoModal";
import SectionModal from "../components/SectionModal";
// import Swipeable from "../components/Swipeable";
import Today from "./Today";

var screen = Dimensions.get("window");

const api = new Api();

// class consist of render function for single section item
class MySectionListItem extends React.PureComponent {
  render() {
    return (
      <TouchableWithoutFeedback>
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
      </TouchableWithoutFeedback>
    );
  }
}

export default class extends Component {
  constructor(props) {
    super(props);

    // this.openTodoModal = this.openTodoModal.bind(this);
  }
  static navigationOptions = {
    title: "Things"
  };

  state = {
    modalVisible: false,
    modalTodoVisible: false,
    sections: []
  };

  // Fetch all sections and show it in main screen
  async componentDidMount() {
    const sections = await api.fethAllSections();
    this.setState(sections);
    console.log(sections);
  }

  _renderItem = ({ item }) => (
    <MySectionListItem
      id={item._id}
      title={item.title}
      description={item.description}
    />
  );

  _keyExtractor = (item, index) => item._id;

  openModal() {
    this.setState({ modalVisible: true });
  }

  closeModal() {
    this.setState({ modalVisible: false });
  }

  openTodoModal() {
    this.refs.todoModal.openToDoModal();
  }
  openSectionModal() {
    this.refs.sectionModal.openSectionModal();
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.inbox}>
            <Icon name="inbox" size={24} color="#2196F3" />
            <Text style={styles.text}>Inbox</Text>
          </View>

          <TouchableWithoutFeedback
            onPress={() => this.props.navigation.navigate("Today")}
          >
            <View style={styles.todo}>
              <Icon name="star" size={24} color="#FFC53A" />
              <Text style={styles.text}>Today</Text>
            </View>
          </TouchableWithoutFeedback>

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

          <View>
            <View>
              <FlatList
                data={this.state.sections}
                extraData={this.state}
                keyExtractor={this._keyExtractor}
                renderItem={this._renderItem}
              />
            </View>
          </View>
        </ScrollView>

        <Modal
          transparent
          visible={this.state.modalVisible}
          animationType={"fade"}
          onRequestClose={() => this.closeModal()}
        >
          <View style={styles.modalContainer}>
            <View style={styles.innerContainer}>
              <View style={styles.modalView}>
                <TouchableWithoutFeedback
                  onPress={() => {
                    this.openTodoModal();
                    this.closeModal();
                  }}
                >
                  <View style={styles.mainSingleModal}>
                    <View style={styles.modalIcon}>
                      <Icon name="plus" size={20} color="#97CDF9" />
                    </View>
                    <View style={styles.modalText}>
                      <Text style={styles.modalTextTitle}>New To-Do</Text>
                      <Text style={styles.modalSubtext}>
                        Quickly add a todo to your inbox
                      </Text>
                    </View>
                  </View>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback
                  onPress={() => {
                    this.openSectionModal();
                    this.closeModal();
                  }}
                >
                  <View style={styles.mainSingleModal}>
                    <View style={styles.modalIcon}>
                      <Icon name="edit" size={20} color="#97CDF9" />
                    </View>
                    <View style={styles.editModalText}>
                      <Text style={styles.modalTextTitle}>New Section</Text>
                      <Text style={styles.modalSubtext}>
                        Define a goal, then work towords it one to-do at a time
                      </Text>
                    </View>
                  </View>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback>
                  <View style={styles.mainSingleModal}>
                    <View style={styles.modalIcon}>
                      <Icon name="file-o" size={18} color="#97CDF9" />
                    </View>
                    <View style={styles.modalText}>
                      <Text style={styles.modalTextTitle}>New Project</Text>
                      <Text style={styles.modalSubtext}>
                        Group projects and to-dos based on different
                        responsibilites, such as Family or Work
                      </Text>
                    </View>
                  </View>
                </TouchableWithoutFeedback>
              </View>
            </View>
          </View>
        </Modal>

        <TodoModal ref={"todoModal"} />
        <SectionModal ref={"sectionModal"} />

        <ActionButton
          buttonColor="#8268FC"
          onPress={() => {
            this.openModal();
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
    backgroundColor: "rgba(0,0,0,0.2)"
  },
  innerContainer: {
    backgroundColor: "#333333",
    elevation: 6,
    width: screen.width - 42,
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
  editModalText: {
    flexDirection: "column",
    marginLeft: 12,
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
