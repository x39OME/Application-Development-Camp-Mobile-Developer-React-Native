import React from 'react'

export default function ArticleAuth(props) {
  return (
 <h3 className='text-center text-danger mt-4'>
       {props.auth!=null? props.auth:"no-auther"}
 </h3>
  )
}
