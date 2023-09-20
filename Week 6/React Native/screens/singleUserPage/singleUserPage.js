import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const SingleUserPage = ({ route, navigation }) => {
    const { item } = route.params;
    console.log(item)
    return (
        <View style={styles.singleUserPage}>
            <Text style={styles.idStyle}>
                {item.id}
            </Text>
            <Text style={styles.nameStyle}>
                {item.name}
            </Text>
            <Text style={styles.emailStyle}>
                {item.email}
            </Text>
            <Text style={()=>[styles.emailStyle,{textDecorationLine:"none"}]}>
                {item.phone}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    singleUserPage:{width:"100%",alignItems:"center",margin:15, gap:25},
    idStyle:{color:"blue",fontWeight:"bold"},
    nameStyle:{fontWeight:"bold",fontSize:32, textDecorationLine:"underline",margin:5},
    emailStyle:{fontWeight:"bold",fontSize:24, textDecorationLine:"underline",margin:5,color:"gray"}

})

export default SingleUserPage;
