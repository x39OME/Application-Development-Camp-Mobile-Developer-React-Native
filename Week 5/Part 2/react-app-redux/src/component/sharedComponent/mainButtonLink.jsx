import React from 'react'

export default function MainButtonLink(props) {
  return (
    <a className='btn btn-danger' href={props.link}>{props.name}</a>
  )
}
