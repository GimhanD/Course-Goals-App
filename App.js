import { useState } from "react";
import {StyleSheet, Text, TextInput, View, Button} from 'react-native';

export default function App() {
  const [enteredGoalText,setEnteredGoalText] =useState('')
  const [courseGoals, setCourseGoals]=useState([])

  function goalInputHandler (enteredText){
    setEnteredGoalText(enteredText)
  }
  function addGoalHandler () {
    setCourseGoals ( (currentCourseGoals) => [...currentCourseGoals, enteredGoalText,]);
  }
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
            style={styles.textInputContainer}
            placeholder='your course goals!'
            onChangeText={goalInputHandler}
        />
        <Button
            title="add goal"
            onPress={addGoalHandler}
        />
      </View>
      <View style={styles.goalsContainer}>
        {courseGoals.map((goal) => <Text key={goal}>{goal}</Text>)}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer:{
    flex: 1,
    paddingTop:50,
    paddingHorizontal: 16
  },
  inputContainer:{
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 24,
    borderBottomColor: "blue",
    borderBottomWidth:1
  },
  textInputContainer:{
    borderColor: "blue",
    borderWidth: 1,
    width: '70%',
    marginRight: 8,
    padding: 8
  },
  goalsContainer:{
    flex: 5
  }
});
