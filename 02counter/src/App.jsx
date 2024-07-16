import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(15);
  // in react the variables which we want to use will be created by this
  // these are known as hooks and there are various hooks from 
  // each hok have different work to do and they will trigger 
  // let counter = 5;
   
   const addValue = function(){
         if(counter < 20)  
            counter = counter + 1;
         setCounter(counter);
         console.log(counter);
   }
   const removeValue = function(){
          if(counter > 0){
             counter = counter - 1;
          }
          console.log(counter);
         setCounter(counter)
   }  
  return (
    <>
     <h1>chai aur react</h1>
     <h2>Counter value: {counter}</h2>

     <button onClick={addValue}>Add value</button>
     <br />
     <button onClick= {removeValue}>Remove value</button>
    </>
  )
}

export default App
