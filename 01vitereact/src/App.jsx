import Chai from './chai'

function App() {
    const username = "chai aur code"
  return (
    <>
      <Chai />
      <h1>chai aur react {username}</h1>
    </>
    // this is known as fragment 
    // the syntax in the {} will be treated as varaible
    // In this {} only final thing must be given
  );
}

export default App
