import { Text, View, StyleSheet,FlatList,Pressable } from 'react-native';


const GoalsList=(props)=>{
  const goalOnPress=(id)=>{
    props.deleteGoalHandler(id);
  }
  const getSingleItem=(itemData)=>{
    return <Pressable
    onPress={() => {
      goalOnPress(itemData.item.id);
    }
    }
    >
      <Text style={styles.goalItem}>{itemData.item.goal}</Text>
    </Pressable>
  }
  return (
    <View style={styles.goalsContainer}>
      <FlatList data={props.allGoals} renderItem={getSingleItem} keyExtractor={(item, index) => index} />
    </View>
  )
};

export default GoalsList;
const styles = StyleSheet.create({
  goalItem: {
    backgroundColor: '#5e0acc',
    color: 'white',
    marginVertical: 4,
    borderRadius: 5,
    padding:8
  },
  goalsContainer: {
    flex: 5
  },

});