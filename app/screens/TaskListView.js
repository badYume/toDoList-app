import react from "react";

import TaskBanner from '../components/TaskBanner';

import { 
    View,
    Text,
    StyleSheet,
} from "react-native";

const TaskListView = function()
{
    return(
        <View style={TaskListViewStyle.bannerContainer}>
            < TaskBanner/>
        </View>
    )
}

const TaskListViewStyle = StyleSheet.create({
    bannerContainer:{
        backgroundColor:'white',
        width:"100%",
        height: '8%',
        //TODO: style the banner color and responsiveness 
    }
});

export default TaskListView;