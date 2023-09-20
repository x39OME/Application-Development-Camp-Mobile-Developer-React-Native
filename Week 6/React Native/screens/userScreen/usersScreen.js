import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, Image, FlatList } from 'react-native';
import SingleUserBox from '../../components/singleUserBox';
import userAxios from '../../network/axiosConfig';


const UsersScreen = ({navigation}) => {
   const [users,setUsers] = useState([
        
      
])
 
useEffect(()=>{
    userAxios.get("users").then((res)=>{
       setUsers(res.data)
    }).catch((error)=>{console.log(error)})
},[])
    return (
        <View style={styles.usersContainer}>

            <FlatList style={{width:"100%"}}
            data={users}
            renderItem={({item})=><SingleUserBox  item={item}  nav={navigation}/>}
            ListHeaderComponent={<Text style={styles.headerText}>User</Text>}
            ItemSeparatorComponent={<View style={{width:"100%",height:2,backgroundColor:"black"}}></View>}
            ListEmptyComponent={<Text style={styles.headerText}> your list is empty</Text>}
            // numColumns={3}
            ></FlatList>
            {/* <Text style={styles.headerText}>User</Text>
           {users.map((user,index)=><SingleUserBox  key={index} name={user.name} />)} */}

        </View>
    );
}

const styles = StyleSheet.create({
    usersContainer:{justifyContent:"flex-start" ,alignItems:"flex-start",padding:12,flex:1,width:"100%"},
    headerText:{fontSize:28,fontWeight:"bold",textAlign:"center",width:"100%"},
   
})

export default UsersScreen;
