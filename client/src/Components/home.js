import React, { useEffect } from 'react';
import { withRouter } from 'react-router';
//REDUX
import { useDispatch } from 'react-redux';
import { fetchAsyncClients } from '../Slice/client-slice'
//MATERIAL-UI
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import {makeStyles} from '@mui/styles';
import { CgMenuRound } from "react-icons/cg";
//COMPONENTS
import ResponsiveDrawer from './drawer';
import Header from './header'
const drawerWidth = 240;

const useStyles = makeStyles ({
  mainAppContainer: {
    height: '100vh',
    width: '100vw',
  },
 
  });

const Home = (props) => {

  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const dispatch = useDispatch()
  useEffect (() => {
    dispatch(fetchAsyncClients())
  }, [dispatch]);
  const classes = useStyles()

  return (
    <>
    <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <CgMenuRound />
          </IconButton>
          <Header />
        </Toolbar>
      </AppBar>
     
      <div  className={classes.mainAppContainer}>
       
          <ResponsiveDrawer mobileOpen={mobileOpen} onClose={handleDrawerToggle} drawerWidth={drawerWidth} />  

  </div>
  </>
  );
}

export default withRouter(Home);

