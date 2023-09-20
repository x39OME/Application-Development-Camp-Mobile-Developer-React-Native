import React, { createContext, useState } from 'react';
import {View, StyleSheet} from 'react-native';



export const LangContext=createContext()

const LangContextProvider = ({children}) => {
    const [lang,setLang]=useState("en")
    return (
        <LangContext.Provider value={{lang,setLang}}>
{children}

        </LangContext.Provider>
    );
}

const styles = StyleSheet.create({})

export default LangContextProvider;
