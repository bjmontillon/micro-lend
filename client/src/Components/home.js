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
import { Grid } from '@mui/material';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
//COMPONENTS
import Header from './header'
import AddClient from './add_client'
import Footer from './Footer/footer'
import Dashboard from './dashboard';
import ClientListing from './client_listing';
import { CgMenuRound, CgAddR  } from "react-icons/cg";

const drawerWidth = 200;

const useStyles = makeStyles ({
  mainAppContainer: {
    height: '100vh',
    width: '100vw',
  },
  bodyContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'baseline',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  previewSection: {},
  componentContainer: {
    height: '100vh',
    paddingTop: '12vh',
  },
  appBar: {
    backgroundColor: 'white'
  }

  });
  
  
const Home = (props) => {
  const dispatch = useDispatch()
  
  useEffect (() => {
    dispatch(fetchAsyncClients())
  }, [dispatch]);

  const classes = useStyles()
       
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const upperIcons = [ ]
  const lowerIcons = [ <CgAddR />]

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        {[].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {upperIcons[index]}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {[<AddClient />].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {lowerIcons[index]}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        className={classes.appBar}
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            
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
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <div  className={classes.mainAppContainer}>
        <div className={classes.componentContainer} >
            <Grid item xs={12} className={classes.previewSection}>
              <Dashboard />
            </Grid>
            <Grid item xs={12} className={classes.previewSection}>
              <ClientListing />
            </Grid>
              <div>
                <Footer />
              </div>
          </div>
        </div>
    </Box>
  );
}

export default withRouter(Home);

