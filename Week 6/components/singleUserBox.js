import React from 'react';
import {View, StyleSheet,Text ,Image} from 'react-native';

const SingleUserBox = (props) => {
const routeToSinglePage=()=>{
    props.nav.navigate('singleUser',{item:props.item})
}
    return (
        <View style={styles.singleUser}>
        <Image source={require("../assets/favicon.png")} style={styles.userImage} />
        <Text style={styles.userName} onPress={()=>{routeToSinglePage()}}>{props.item.name}</Text>
                    </View>
    );
}

const styles = StyleSheet.create({
    singleUser:{flexDirection:"row",width:"100%",paddingVertical:5,marginVertical:5, alignItems:"center"},
    userImage:{width:60,height:60,borderRadius:30 ,borderWidth:1},
    userName:{fontWeight:"bold",fontSize:18 ,marginLeft:15}
})

export default SingleUserBox;
