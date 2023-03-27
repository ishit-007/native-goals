import { StyleSheet,View,TextInput,Button,Modal,Image } from "react-native";
import { useState } from "react";

const GoalInput=(props)=>{
  const [currentGoal, setCurrentGoal] = useState('');
  const currentGoalHandler = (enteredText) => {
    setCurrentGoal(enteredText);
  };
  const submitHandler=()=>{
    props.addGoalHandler(currentGoal);
    props.closeModal();
    setCurrentGoal('');
  }
  return (<Modal visible={props.visible} animationType="slide">
    <View View style={styles.inputContainer}>
      <Image source={require('../assets/goal3.jpg')} style={{height:100,width:100}}/>
      <TextInput value={currentGoal} placeholder='Your course goalss' style={styles.textInput} onChangeText={currentGoalHandler}></TextInput>
      <View style={styles.buttonsContainer}>
        <Button title='Add Goal' style={{ padding: 0 }} onPress={submitHandler}/>
        <Button title="Cancel" onPress={props.closeModal}/>
      </View>
      
    </View>
  </Modal>)
  ;
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap:10,
    backgroundColor:"rgba(246,246,246,255)"
  },
  textInput: {
    borderWidth: 1,
    borderColor: 'black',
    width: '70%',
    borderColor: '#cccccc',
    marginRight: 8,
    padding: 8
  },
  buttonsContainer:{
    flexDirection:'row',
    gap:10
  }
});