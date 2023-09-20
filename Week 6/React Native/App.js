
import { Alert, Button, Image, ImageBackground, Platform, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';

import style from "./style";
import { useCallback, useState } from 'react';
import backgroundClip from './node_modules/inline-style-prefixer/es/plugins/backgroundClip';
import UsersScreen from './screens/userScreen/usersScreen';
import { Provider } from 'react-redux';
import store from './store/store';
import Counter from './screens/counter/counter';
import LangContextProvider from './context/langContextProvider';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SingleUserPage from './screens/singleUserPage/singleUserPage';




const Stack = createNativeStackNavigator();

export default function App() {
  const ale=()=>{
    // Alert.alert("press alert","you know press on alert button",[{text:"cancel",onPress:()=>{console.log("hello")}},{text:"go"}])
    console.log("alert ")
  }
  
  
 return(
<LangContextProvider>
<Provider store={store}>
   <SafeAreaView style={style.bodyStyle} >
    {/* <UsersScreen  /> */}
    <NavigationContainer>
      <Stack.Navigator initialRouteName='users'>
        <Stack.Screen name="counter" component={Counter} />
        <Stack.Screen name="users" component={UsersScreen} />
        <Stack.Screen name="singleUser" component={SingleUserPage} />
      



      </Stack.Navigator>
    </NavigationContainer>
  </SafeAreaView>
 </Provider>
</LangContextProvider>
 );

}


// const style= 