import React,{ useState,useEffect } from 'react'
import SyncLoader from "react-spinners/SyncLoader";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [loading , setLoading] = useState(true);
  useEffect(()=>{
    // setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 8000);
  },[])

  return (
    <div>
      { loading ?
      <SyncLoader
        color="aquamarine"
        loading={loading}
        size={30 }
        aria-label="Loading Spinner"
        data-testid="loader"
      />
      :
      <p>Home page</p>
      }
    </div>
  )
}

export default App
