import React from 'react';

const Form = () => {
    const [email,setEmail]=useState("m")
    const [password,setPassword]=useState("m")
    const emailChange= useCallback((e)=>{
      setEmail(e.target.value)
    },[])
    const passwodChange=useCallback((e)=>{
      setPassword(e.target.value)
    },[])
    return (
      <SafeAreaView style={style.bodyStyle} >
  
  <Text style={style.textStyle}> sytleffd Video </Text>
  <View style={style.d1}></View>
  <View style={style.d2}></View>
  <TextInput style={{borderWidth:1}} placeholder='email' keyboardType="phone-pad" value={email} onChange={(e)=>{emailChange(e)}}></TextInput>
  <TextInput style={{borderWidth:1}} placeholder='password'  value={password} secureTextEntry onChange={(e)=>{passwodChange(e)}}></TextInput>
   </SafeAreaView>
    );
}

export default Form;
