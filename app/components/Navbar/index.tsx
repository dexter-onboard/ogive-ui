import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { makeStyles } from '@mui/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Image from 'next/image';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: "2px",
  },
  title: {
    flexGrow: 1,
  },
  navLinks: {
    display: 'flex',
    justifyContent: 'space-around',
    flexGrow: 1,
  },
  navLink: {
    color: 'grey',
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
      textDecorationColor: 'black',
    },
  },
  talkToUsButton: {
    backgroundColor: 'red',
    color: 'white',
  },
}));

const Navbar = () => {
  const classes = useStyles();
  const isMobile = useMediaQuery('(max-width:600px)');
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const navLinks = (
    <List>
      {['Products', 'Services', 'Industries', 'About', 'Career'].map((text) => (
        <ListItem key={text} component="button">
          <ListItemText primary={text} />
        </ListItem>
      ))}
    </List>
  );

  return (
    <div className={classes.root}>
      <AppBar sx={{backgroundColor: "transparent"}} position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <Image src="https://newsite.ogivetechnology.com/src/assets/ogive%20logo.png" alt="logo" width={100} height={50} />
          </Typography>
          {isMobile ? (
            <>
              <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="menu"
                onClick={handleDrawerToggle}
              >
                <MenuIcon />
              </IconButton>
              <Drawer anchor="left" open={drawerOpen} onClose={handleDrawerToggle}>
                {navLinks}
              </Drawer>
            </>
          ) : (
            <div className={classes.navLinks}>
              {['Products', 'Services', 'Industries', 'About', 'Career'].map((text) => (
                <Button key={text} className={classes.navLink}>
                  {text}
                </Button>
              ))}
              <Button className={classes.talkToUsButton}>Talk to Us</Button>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;