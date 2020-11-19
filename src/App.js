import React from 'react'
import './App.css';
import {Home} from './Component/Home'

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import {GlobalContext, GlobalContextProvider} from './Component/context/GlobalState'
function App() {
    
      
  return (
    

     <div>
       <GlobalContextProvider>

       <Home/>
       </GlobalContextProvider>
     </div>
    
  );
}

export default App;
