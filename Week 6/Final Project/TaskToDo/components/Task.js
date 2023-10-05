import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import CheckBox from '@react-native-community/checkbox';

const Task = ({ task: { id, task }, deleteFromList }) => {
  return (
    <View style={styles.task}>
      <View style={styles.taskLeft}>
        <View style={styles.square}></View>
        <Text style={styles.taskText}>{task}</Text>
      </View> 
      <MaterialIcons style={{display:'flex', alignItems:'center'}} onPress={() => deleteFromList(id)} name='delete' size={21} color='#00A1B9'/>
    </View>
  );
};

export default Task;
const styles = StyleSheet.create({
  task: {
    display:"flex",
    flexDirection: "row",
    aligntasks: "center",
    justifyContent: "space-between",
    flexWrap:"wrap",
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
  },
  taskLeft: {
    display:"flex",
    flexDirection: "row",
    aligntasks: "center",
    flexWrap: "wrap",
    alignItems:"center"
  },
  square: {
    width: 15,
    height: 15,
    backgroundColor: "#55bcf6",
    opacity: .6,
    borderRadius: 5,
    marginRight: 15,
  },
  taskText: {
    maxWidth:120
  },
});
