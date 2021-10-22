import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuOutlined from '@material-ui/icons/MenuOutlined';
import ChevronLeftOutlined from '@material-ui/icons/ChevronLeftOutlined';
import ChevronRightOutlined from '@material-ui/icons/ChevronRightOutlined';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MoveToInbox from '@material-ui/icons/MoveToInbox';
import Mail from '@material-ui/icons/Mail';
import Container from '@mui/material/Container';
import {Grid} from '@material-ui/core';
//import Heading from './Heading';
import Dashboard from './Dashboard';
import AddClient from './AddClient';
import Clientstable from './Clientstable';

import {makeStyles} from '@material-ui/styles';

const useStyles = makeStyles ({
  mainAppContainer: {
    height: '100vh',
    width: '100vw',
    padding: '20px',
  },
    bodyContainer: {
      display: 'flex',
      boxSizing: 'border-box',
      justifyContent: 'center',
      alignItems: 'baseline',
      flexDirection: 'row',
      flexWrap: 'wrap',
      margin: '0',
    },
    previewSection: {},
  });




const drawerWidth = 170;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(9)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

export default function MiniDrawer() {
  const classes = useStyles()
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: '36px',
              ...(open && { display: 'none' }),
            }}
          >
            <MenuOutlined />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Micro-Lending
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightOutlined /> : <ChevronLeftOutlined />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          <ListItem button>
              <ListItemIcon>
                {<MoveToInbox />}
              </ListItemIcon>
              <ListItemText primary='Home' />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                {<MoveToInbox />}
              </ListItemIcon>
              <ListItemText primary='Admin' />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                {<Mail />}
              </ListItemIcon>
              <ListItemText primary='Inbox' />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                {<MoveToInbox />}
              </ListItemIcon>
              <ListItemText primary='Contacts' />
            </ListItem>
        </List>
        <Divider />
        <List>
        <ListItem button>
        <ListItemIcon>
          {<AddClient />}
        </ListItemIcon>
        <ListItemText primary='Add Client' />
      </ListItem><ListItem button>
      <ListItemIcon>
        {<MoveToInbox />}
      </ListItemIcon>
      <ListItemText primary='Payments' />
    </ListItem><ListItem button>
    <ListItemIcon>
      {<MoveToInbox />}
    </ListItemIcon>
    <ListItemText primary='Edit | Delete' />
  </ListItem>
        </List>
      </Drawer>
      
        
      <Box component="main">
        <DrawerHeader />
        
          <div  className={classes.mainAppContainer}>
          <Grid container className={classes.bodyContainer} spacing={1}>
          
            <Grid item xs={12} className={classes.previewSection}>
              <Dashboard />
            </Grid>
            <Grid item xs={12} className={classes.previewSection}>
              <Clientstable />
            </Grid>
          </Grid>
        </div>
      </Box>
    </Box>
  );
}


