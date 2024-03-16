import {
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from '@mui/material';
import NextLink from 'next/link';
import { MENU } from '@/components/dashboard-layout/sidebar/menu.data';
import React from 'react';
import { usePathname } from 'next/navigation';

export function Sidebar() {
  const pathName = usePathname();

  return (
    <div>
      <Toolbar />
      <List>
        {MENU.map((item) => (
          <React.Fragment key={item.name}>
            <Divider />
            <ListItem disablePadding>
              <ListItemButton
                href={item.link}
                component={NextLink}
                selected={pathName.startsWith(item.link)}
              >
                <ListItemIcon>
                  <item.icon />
                </ListItemIcon>
                <ListItemText primary={item.name} />
              </ListItemButton>
            </ListItem>
            <Divider />
          </React.Fragment>
        ))}
      </List>
    </div>
  );
}
