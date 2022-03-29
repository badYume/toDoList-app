import { StatusBar } from 'expo-status-bar';

import TaskListView from './app/screens/TaskListView';


import {
   StyleSheet, 
   Text, 
   View 

} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

    <View style={styles.TaskListViewStyle}>
    <TaskListView/>
    </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    flexDirection:'column-reverse',
    height:'97%',
  },

  TaskListViewStyle:{
    width:'100%',
    height:'97%',
    borderColor:'purple',
    borderWidth:2,
  },

});
