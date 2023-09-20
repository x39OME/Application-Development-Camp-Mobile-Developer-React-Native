import React, { useContext } from 'react';
import {View, StyleSheet, Text ,TouchableOpacity} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { changeCounter } from '../../store/actions';
import { LangContext } from '../../context/langContextProvider';

const Counter = ({navigation}) => {
   var {lang,setLang}= useContext(LangContext)
 var counter =   useSelector((state)=>state.counter)
 const dispatch=useDispatch()
 const plus=()=>{
    dispatch(changeCounter(++counter))

 }
 const minus=()=>{
    dispatch(changeCounter(--counter))

 }
 const changeLang=(la)=>{
    navigation.navigate('users')
 }
    return (
        <View style={{direction:lang==="en"?"ltr":"rtl"}}>
<TouchableOpacity onPress={()=>{plus()}} activeOpacity={0.1} style={{width:"50%",backgroundColor:"blue",padding:20,borderRadius:10,marginLeft:20}}>
      <Text style={{color:"white",textAlign:"center"}}> +</Text>
    </TouchableOpacity>
            <Text>Counter is {`${counter}`} {lang}</Text>
            <TouchableOpacity onPress={()=>{minus()}} activeOpacity={0.1} style={{width:"50%",backgroundColor:"blue",padding:20,borderRadius:10,marginLeft:20}}>
      <Text style={{color:"white",textAlign:"center"}}> - </Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={()=>{changeLang({lang})}} activeOpacity={0.1} style={{width:"50%",backgroundColor:"blue",padding:20,borderRadius:10,marginLeft:20}}>
      <Text style={{color:"white",textAlign:"center"}}> - </Text>
    </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({})

export default Counter;
