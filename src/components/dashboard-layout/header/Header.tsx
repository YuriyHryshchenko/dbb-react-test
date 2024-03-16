import { AppBar, IconButton, Link, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import NextLink from 'next/link';
import { ROUTES_CONFIG } from '@/config/page-url.config';

type HeaderPropsType = {
  drawerWidth: number;
  handleDrawerToggle: () => void;
};
export function Header({ drawerWidth, handleDrawerToggle }: HeaderPropsType) {
  return (
    <AppBar
      position='fixed'
      sx={{
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        ml: { sm: `${drawerWidth}px` },
      }}
    >
      <Toolbar>
        <IconButton
          color='inherit'
          aria-label='open drawer'
          edge='start'
          onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { sm: 'none' } }}
        >
          <MenuIcon />
        </IconButton>
        <Link
          href={ROUTES_CONFIG.HOME}
          component={NextLink}
          underline={'hover'}
        >
          <Typography variant='h6' noWrap>
            DBB React Test
          </Typography>
        </Link>
      </Toolbar>
    </AppBar>
  );
}
