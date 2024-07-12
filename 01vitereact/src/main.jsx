import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function ele(){
   return (
    <div>
      <a href="https://google.com">visit Google</a>
    </div>
   )
}

const anotherUser = "chai aur react"

// const reactElement = {
//   type: 'a',
//   props: {
//       href: 'https://google.com',
//       target: '_blank'
//   },
//   children: 'Click me to visit google'
// }

// const manElement = (
//   <a href="https://google.com">visit Google</a>
// );

const reactElement = React.createElement(
    'a',
    {
      href: "https://google.com",
      target: '_blank'
    },
    'click me to visit google',
    anotherUser
)



ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,

  // ele()
  //  This will run as a normal react code but not recommended due to code writing patterns
  
  // manElement
  // This will also run 
  <App/>,

  reactElement 
  // This will also as it is created by react 
)

// in This the renser will create a object of the properties' of the given element 
// but if we pass directly the object then it will not render properly beacuse it creates a object on its own and have some properties which we dont know


