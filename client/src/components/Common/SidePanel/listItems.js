import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';

import BarChartIcon from '@material-ui/icons/BarChart';
import {
  Link
} from "react-router-dom";

export const mainListItems = (
  <div>


    <ListItem button
    component={Link} to="/dashboard"
    selected
    >
    
      <ListItemText primary="Dashboard" />
    
    </ListItem>
  

    <ListItem>
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="SP report" />
    </ListItem>

  </div>
);

export const secondaryListItems = (
  <div>
    <ListSubheader inset>Other services</ListSubheader>
    <ListItem button>
      <ListItemText primary="Other Charts" />
    </ListItem>
    <ListItem button>
      <ListItemText primary="Portfolio (Rs.)" />
    </ListItem>

  </div>
);
