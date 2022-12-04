import React, { useState } from 'react'


export default function Randompage() {
    const[data,setData]= useState('hello world');
const getdata = () => {
    setData('not define')
}
   
  return (
    <div className='App'>
      <h1>count: {data} </h1>
      <button onclick={getdata}>via use</button>
    </div>
  )
}
