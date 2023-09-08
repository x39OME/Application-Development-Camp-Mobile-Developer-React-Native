import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeLang } from '../../store/action';

export default function HomePage() {
    const lang= useSelector((state)=>state.lang);
    const dispatch =useDispatch();
    const handleLangChange=()=>{
    dispatch(changeLang(lang==="en"?"ar":"en"))
}
  return (
    <div>
        <h1>Website Language Is : {lang}</h1>
        <button className='btn btn-dark btn-lg mt-4' onClick={()=>{handleLangChange()}}>Change Language</button>
    </div>
  )
}