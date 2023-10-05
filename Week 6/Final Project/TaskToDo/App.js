import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { SafeAreaView, FlatList, Keyboard, StyleSheet, Text, Image, TextInput, TouchableOpacity, View, Alert, ScrollView} from "react-native";
import uuid from "react-native-uuid";
import Task from "./components/Task";

export default function App() { 
  const [tasks, setTasks] = useState([]); // UseState Hook
  const [inputValue, setInputValue] = useState("");

  const addToList = () => { // Add Task To The List
    if (inputValue === "") {
      Alert.alert("Sorry", "Please Write Your Task", [ // Alert If You Don't Write Anything
        {
          text: "Ok",
        },
      ]);
      return;
    }
    const newTask = { // uuid
      id: uuid.v4(),
      task: inputValue,
    };
    setTasks([newTask, ...tasks]);
    setInputValue("");
    Keyboard.dismiss();
  };
  const deleteFromList = (id) => { // Remove Task From The List
    setTasks(tasks.filter((task) => task.id != id));
  };

  return (
    <SafeAreaView >
      <ScrollView>
        <View style={styles.container} >
          <Image style={styles.imgTop} source={require('./assets/scheme2.svg')}/>
          <View style={styles.taskWrapper}>
            <View>
              <Text style={styles.sectionTitle}>Tasks To Do</Text>
            </View>
            <TextInput
              value={inputValue}
              style={styles.input}
              placeholder='Write Your Task'
              onChangeText={(text) => setInputValue(text)}
            />
            <TouchableOpacity onPress={addToList}>
              <View style={styles.btn}>
                <Text style={{ color: "white", textAlign:"center" }}>Add New Task</Text>
                <MaterialIcons // Icon Material
                  style={{ marginLeft: 8, color: "white", borderRadius:5}}
                  name='add-box'
                  size={22}
                  color='black'
                />
              </View>
            </TouchableOpacity>

            <View style={styles.tasks}>
              <FlatList
                keyExtractor={(item) => item.id}
                data={tasks}
                renderItem={({ item }) => (

                <Task task={item} deleteFromList={deleteFromList} /> // Components Task.js

                )}
              />
            </View>
          </View>
          <Image style={styles.imgBottom} source={require('./assets/scheme.svg')}/>
          <StatusBar style='auto' />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    height:587,
    maxWidth:242,
    backgroundColor: "#465FA7",
    display:"flex",
  },
  containerView: {
    height:"100%"
  },
  imgTop: {
    width:70,
    height:70,
    position:"absolute",
    right:10,
    top:-10
  },
  taskWrapper: {
    flex: 1,
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    color:"#ffffff",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 15,
    textAlign:"center",
    fontFamily: 'Arial, Helvetica, sans-serif',
  },
  btn: {
    flexDirection: "row",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    marginTop: 10,
    backgroundColor: "#287BAF",
    color: "#ffffff",
  },
  tasks: {
    flex: 1,
    marginTop: 30,
  },
  input: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    display:"flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  imgBottom: {
    width:250,
    height:250,
    position:"absolute",
    bottom:0,
    zIndex:-1
  },
});
