<<<<<<< HEAD

import { useCallback, useEffect, useRef, useState } from 'react'
import './App.css'
import './index.css'

function App() {
 const [length,setLength]=useState(8)
 const [num,setNum]=useState(false)
 const [char,setChar]=useState(false)
 const[pass,setPass]=useState("")

 const passwordref =useRef(null)

 const passwordGenerator=useCallback(()=>{
  let passs=""
  let str ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
  if(num) str+="0123456789"
  if(char) str+="!@#$%^&*()~{}"
  for (let i= 1; i<=length;i++) {
    let char = Math.floor(Math.random() * str.length+1)
    passs +=str.charAt(char)
    
  }
  setPass(passs)
 },[length,num,char,setPass])

 const copyPassword=useCallback(()=>{
  passwordref.current?.select()
  passwordref.current?.setSelectionRange(0,11)
  window.navigator.clipboard.writeText(pass)
 },[pass])

 useEffect(()=>{passwordGenerator()},[length,num,char,passwordGenerator])

  return (
   <>
    <div className='w-full shadow-md px-4 my-8 text-orange-500 rounded-lg bg-gray-700 '>
      <h2 className='text-white text-center'>Password Generator</h2>
      <div className='flex shadow rounded-lg overflow-hidden mb-4 '>
      <input 
      type='text'
      value={pass}
      className='outline-none w-full py-1 px-3 bg-white'
      placeholder='Password'
      readOnly
      ref={passwordref}
       />
      <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0' onClick={copyPassword}>Copy</button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex item-center gap-x-1'>
          <input 
            type='range'
            min={8}
            max={100}
            value={length}
            className='curser-pointer'
            onChange={(e)=>{setLength(e.target.value)}}
          />
          <label >Length:{length}</label>
         
        </div>
        <div className='flex item-center gap-x-1'>
          <input 
            type='checkbox'
            defaultChecked={num}
            id='numberInput'
            onChange={()=>{setNum((prev)=>!prev)}}
          />
          <label >Number</label>
         
        </div>
        <div className='flex item-center gap-x-1'>
          <input 
           type='checkbox'
            defaultChecked={char}
            id='charInput'
            onChange={()=>{setChar((prev)=>!prev)}}
          />
          <label >Character</label>
         
        </div>
      </div>
    </div>

   </>
=======
import { useState } from "react"


function App() {
const [colour,setColour] =useState('olive')

  return (
    
     <div className="w-screen h-screen duration-200"
      style={{backgroundColor: colour}}>
      <h1 className="flex justify-center ">This is background changing website</h1>
     
     <div  className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
      <div className="flex flex-wrap justify-center gap-3 shadow-xl bg-white px-3 py-2 rounded-2xl">
      <button onClick={()=>setColour('red')} className="outline-none px-4 rounded-full text-white shadow-md" 
      style={{backgroundColor:'red'}}>Red</button>
      <button onClick={()=>setColour('green')}className="outline-none px-4 rounded-full text-white shadow-md" 
      style={{backgroundColor:'green'}}>Green</button>
      <button onClick={()=>setColour('yellow')} className="outline-none px-4 rounded-full text-white shadow-md" 
      style={{backgroundColor:'yellow'}}>Yellow</button>
      <button onClick={()=>setColour('pink')} className="outline-none px-4 rounded-full text-white shadow-md" 
      style={{backgroundColor:'pink'}}>Pink</button>
      <button onClick={()=>setColour('blue')} className="outline-none px-4 rounded-full text-white shadow-md" 
      style={{backgroundColor:'blue'}}>Blue</button>
      <button onClick={()=>setColour('black')} className="outline-none px-4 rounded-full text-white shadow-md" 
      style={{backgroundColor:'black'}}>Black</button>
      <button onClick={()=>setColour('white')}className="outline-none px-4 rounded-full text-black shadow-md" 
      style={{backgroundColor:'white'}}>White</button>
      <button onClick={()=>setColour('violet')} className="outline-none px-4 rounded-full text-white shadow-md" 
      style={{backgroundColor:'violet'}}>Violet</button>
       <button onClick={()=>setColour('grey')} className="outline-none px-4 rounded-full text-white shadow-md" 
      style={{backgroundColor:'grey'}}>Grey</button>
      </div>
       </div>
    </div>
>>>>>>> 64acec9 (Background Change)
  )
}

export default App
