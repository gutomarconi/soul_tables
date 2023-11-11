import React, { FC } from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import TableBar from '@mui/icons-material/TableBar';
import { NavLink } from 'react-router-dom';
import { useTheme } from 'styled-components';

const drawerWidth = 160;

const MenuList = [
  {
    label: 'Mesas',
    icon: <TableBar  sx={{ color: 'white' }}  />,
    route: '/pending-orders',
  },
]
export interface ISiteHeaderProps {
}

export const SITE_HEADER_CONTAINER_ID = 'site-header-container';

export const SideBar: FC<ISiteHeaderProps> = () => {
  const theme = useTheme();
  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
          backgroundColor: theme.colors.brand.primary
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <List>
        {MenuList.map(({ label, icon, route}) => (
          <NavLink key={label} to={route} style={{ textDecoration: 'none', color: 'white' }}>
            <ListItem key={label} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {icon}
                </ListItemIcon>
                <ListItemText primary={label} />
              </ListItemButton>
            </ListItem>
          </NavLink>
        ))}
      </List>
    </Drawer>
  );
};
