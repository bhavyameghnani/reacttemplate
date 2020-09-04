import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Router, Route, Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import {withRouter} from 'react-router';
import customHistory from '../App';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  padding : {
    paddingRight : 30,
    cursor : "pointer",
  },
}));

function ButtonAppBar() {
  const classes = useStyles();
  let customHistory = useHistory();
  function handleClick() {
    customHistory.push('/user');
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            News
          </Typography>
          {/* <Button color="inherit">Login</Button>
          <Typography variant = "headline" style={{flexGrow:1}} color="inherit" >Title</Typography> */}
          <Typography variant = "subheading" className = {classes.padding} color="inherit" onClick={handleClick} > Album
            {/* <Link to="/user">
              Album
            </Link> */}
            </Typography>
          <Typography variant = "subheading" className = {classes.padding} color="inherit" >OPTION 2</Typography>
          <Typography variant = "subheading" className = {classes.padding} color="inherit" >OPTION 3</Typography>
        </Toolbar>
       
      </AppBar>
    </div>
  );
}

export default withRouter(ButtonAppBar);