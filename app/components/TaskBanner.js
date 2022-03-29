import react from "react";

import { 
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Pressable,

} from "react-native";


const TaskBanner = function()
{
    return(
    <View style={bannerStyles.bg}>
    <Pressable style={bannerStyles.invisible_btn}>
    </Pressable>
        <Text style={bannerStyles.txt}>TO DO LIST </Text>
        <TouchableOpacity style={bannerStyles.creat_btn}>
            <Text style={bannerStyles.creat_btn_txt}>+</Text>
        </TouchableOpacity>
    </View>
    )
}

const bannerStyles = StyleSheet.create({

    bg:{
       textAlign: 'center',
       height:'100%',
    //    justifyContent:'center',
       alignItems:'center',
       flexDirection:'row',
       justifyContent:'space-between'
    },
    txt:{
        fontSize: 30,
        // backgroundColor:'blue',
    },
    creat_btn:{
        // backgroundColor:'yellow',
        width:'15%',
        height:'100%',
        flexDirection:'column-reverse',
        alignItems:'center',
        // justifyContent:'center',
        // borderColor:'blue',
        // borderWidth:2
    },
    invisible_btn:{
        // backgroundColor:'yellow',
        width:'15%',
        height:'100%',
        flexDirection:'column-reverse',
        alignItems:'center',
        // justifyContent:'center',
        // borderColor:'blue',
        // borderWidth:2
    },
    creat_btn_txt:{
        fontSize:30,
        width: '100%',
        height:'90%',
        textAlign:'center',
        
    }

})

export default TaskBanner;