import React from 'react'
import Clientdeatils from './Components/clientDetails'
import { BrowserRouter as Router, Route, withRouter } from 'react-router-dom'


import MiniDrawer from './Components/MiniDrawer'
//import Container from '@mui/material/Container';
import {makeStyles} from '@material-ui/styles';


const useStyles = makeStyles ({
  appContainer: {
    width: '100vw',
    height: '100vh'
  }
})  
function App() {
  const classes = useStyles()
    
    
    return ( 
      <div className={classes.appContainer}>
        <MiniDrawer />
        <Clientdeatils />
      </div>
     );
}

export default withRouter(App);