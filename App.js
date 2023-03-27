import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import GoalInput from './components/GoalInput';
import GoalsList from './components/GoalsList';

export default function App() {
  const deleteGoalHandler=(id)=>{
    setAllGoals(allGoals=>{
      return allGoals.filter((goal)=>goal.id!==id);
    })
  }
  const [count, setCount] = useState(0);
  const [allGoals, setAllGoals] = useState([]);
  const addGoalHandler = (currentGoal) => {
    setAllGoals(allGoals => [...allGoals, {goal:currentGoal,id:count}]);
    setCount(count + 1);
  };

  const[modalIsOpen,setModalIsOpen]=useState(false);
  const openModal=()=>{
    setModalIsOpen(true);
  }
  const modalClose=()=>{
    setModalIsOpen(false);
  }
  return (
    <View style={styles.container}>
      <Button title='Add New Goals' color="#5e0acc" onPress={openModal}/>
      <GoalInput visible={modalIsOpen} addGoalHandler={addGoalHandler} closeModal={modalClose}/>
      <GoalsList allGoals={allGoals} deleteGoalHandler={deleteGoalHandler}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16
  },
});
