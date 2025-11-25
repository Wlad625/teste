import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  useEffect(()=> {
    document.title = `Clicado ${count} vezes`
  },[count]);

  useEffect(()=>{
    alert("Olá");
    return ()=> {console.log("Tchau!")};
  },[])

 const diminuirCount = () => setCount(count-1);
 
 const aumentarCount = () => setCount(count+1);

  return (
    <>
      <div>
        <h1>{count}</h1>
        <button onClick={aumentarCount}>+</button>
        <button onClick={diminuirCount}>-</button>
      </div>
    </>
  )
}

export default App
