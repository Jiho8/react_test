import React, {useState} from 'react'

function List(props) {
  return (
    <div>
        <p className='img'>img</p>
        <p>{props.name}</p>
        <span>{props.price}</span>
    </div>
  )
}

export default List