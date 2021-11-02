import * as React from 'react';
//MATERIAL-UI
import { Grid } from '@mui/material';
import {makeStyles} from '@mui/styles';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
//REACT-ICONS
import { CgMail, CgInbox  } from "react-icons/cg";
//COMPONENTS
import AddClient from './add_client'
import Dashboard from './dashboard';
import Clientstable from './client_listing';



const useStyles = makeStyles ({
  addClientSection: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: '15vh',
    padding: '0 50px'
  },
    bodyContainer: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'baseline',
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
    previewSection: {},
})

function ResponsiveDrawer(props) {

  const classes = useStyles()

  const { window, mobileOpen, onClose, drawerWidth } = props;

  const upperIcons = [ <CgInbox />, <CgMail  />, <CgInbox />, <CgMail  />]
  const lowerIcons = [ <CgInbox />, <CgMail  />, <CgInbox />,]

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
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
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
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
          onClose={onClose}
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
        <Box
          component="main"
          sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
        >
        <Grid item xs={12} className={classes.addClientSection}>
          <AddClient />
        </Grid>
        <Grid item xs={12} className={classes.previewSection}>
          <Dashboard />
        </Grid>
        <Grid item xs={12} className={classes.previewSection}>
          <Clientstable />
        </Grid>
        </Box>
    </Box>
  );
}

 


export default ResponsiveDrawer;
