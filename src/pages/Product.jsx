import React from 'react'
import List from '../component/List'

function Product() {
  return (
    <>
        <h2>React State & Props</h2>
        <div className='flex'>
            <List name="ADIDAS STAN SMITH" price="$160"/>
            <List name="ADIDAS STAN SMITH2" price="$180"/>
        </div>
    </>

  )
}

export default Product