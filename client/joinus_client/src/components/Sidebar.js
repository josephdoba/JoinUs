import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/Inbox';
import HomeTwoToneIcon from '@mui/icons-material/HomeTwoTone';

export default function Homepage() {
  return (
    <Box
      bgcolor=""
      flex={1}
      p={2}
    >
      <List>
        <ListItem disablePadding>
          <ListItemButton component="a" href='#'>
            <ListItemIcon>
              <HomeTwoToneIcon />
            </ListItemIcon>
            <ListItemText primary="Home Page" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton component="a" href='#'>
            <ListItemIcon>
              <HomeTwoToneIcon />
            </ListItemIcon>
            <ListItemText primary="My Events" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton component="a" href='#'>
            <ListItemIcon>
              <HomeTwoToneIcon />
            </ListItemIcon>
            <ListItemText primary="Events History" />
          </ListItemButton>
        </ListItem>

      </List>
    </Box>
  );
}