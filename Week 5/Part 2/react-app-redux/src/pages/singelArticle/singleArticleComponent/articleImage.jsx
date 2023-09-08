import React from 'react'

export default function ArticleImage(props) {
  return (
    <>{props.image&&<img src={props.image} alt={props.title} className='w-100' />}</>
  )
}
