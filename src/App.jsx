import { useEffect } from "react";
import MyRoutes from "routes/Routes";
import {store} from 'redux-thunk/store'

const App = () => {
  useEffect(()=>{
    try{
      const newState = localStorage.getItem('state');
    }catch{

    }
  },[])
  return(
    <>
      <MyRoutes />
    </>
  )
}

export default App;