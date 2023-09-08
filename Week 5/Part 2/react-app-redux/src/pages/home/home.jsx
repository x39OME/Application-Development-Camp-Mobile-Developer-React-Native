import React, { useContext } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeLang } from '../../store/actions/langActions.js';
import { langContext } from '../../context/langContext.js';

export default function HomePage() {
  //  const lang= useSelector((state)=>state.lang.lang);
  //  const dispatch =useDispatch();
  const {lang,setLang}=useContext(langContext)

const handleLangChange=()=>{
    // dispatch(changeLang(lang==="en"?"ar":"en"))
    setLang(lang==="en"?"ar":"en")
}
  return (
    <div>

        <h1>website language is : {lang}</h1>

        <button className='btn btn-info btn-lg ' onClick={()=>{handleLangChange()}}>Change Lang</button>
    </div>
  )
}
