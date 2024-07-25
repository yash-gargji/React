import { useState ,useCallback,useEffect,useRef } from 'react'
import './App.css'

function App() {
   const [length, setLength] = useState(8)
   const [numberAllowed, setnumberAllowed] = useState(false)
   const [charAllowed, setcharAllowed] = useState(false)
   const [password,setPassword] = useState("")

   const passwordRef = useRef(null)


   const passwordGenerator = useCallback(() =>{
       let pass = ""
       let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
       if(numberAllowed){
          str += "0123456789"
       }
       if(charAllowed){
          str += "~!@#$%^&*(){}?><:"
       }

       for (let i = 0; i <=length; i++) {
           let char = Math.floor(Math.random() * str.length)
           pass += str.charAt(char)
       }
       setPassword(pass);
    },[length,numberAllowed,charAllowed,setPassword])

    useEffect(()=>{
       passwordGenerator()
    },[length,numberAllowed,charAllowed,passwordGenerator])

    const copyPasswordtoClipboard = useCallback(() =>{
           passwordRef.current?.select();
         //  passwordRef.current?.setSelectionRange(0,3);
         // for selecting only 3 chars means dislplaying first three chars as blue
           window.navigator.clipboard.writeText(password)
    },[password])

  return (
      <>
     <div className='w-full mx-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-400 bg-gray-700'> 
      <h1 className='text-white text-centre my-3'> Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4 py-3'>
        <input 
        type="text" 
        value={password}
         className='outline-none w-full py-1 px-3'
         placeholder='password'
         readOnly 
         ref = {passwordRef}
         />
         <button 
           onClick={copyPasswordtoClipboard}
          className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>Copy</button>
       </div>
       <div className='flex text-sm gap-x-2'>
         <div className='flex items-center gap-x-1'>
            <input 
            type="range"
            min = {8}
            max = {100}
            value = {length}
            className='cursor-pointer' 
             onChange={(e) =>{ 
                setLength(e.target.value)
             }}  />
            <label> Length: {length}</label>
         </div>
         <div className='flex items-center gap-x-1'>
            <input 
            type="checkbox"
             defaultChecked = {numberAllowed}
             id = "numberInput"
             onChange={() =>{ 
                setnumberAllowed((prev) => !prev)
             }} 
             />
            <label> Numbers</label>
         </div>
         <div className='flex items-center gap-x-1'>
            <input 
            type="checkbox"
             defaultChecked = {charAllowed}
             id = "numberInput"
             onChange={() =>{ 
                setcharAllowed((prev) => !prev)
             }} 
             />
            <label>Special Chars</label>
         </div>
       </div>
     </div>
      </>
  )
}

export default App
