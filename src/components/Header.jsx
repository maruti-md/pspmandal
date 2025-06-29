// src/components/Header.jsx
import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Menu,
  MenuItem,
  Button,
  Box,
  useTheme,
  useMediaQuery,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Container
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Brightness4, Brightness7 } from '@mui/icons-material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link as RouterLink } from 'react-router-dom';

const menuItems = [
  { label: 'Home', link: '/' },
  {
    label: 'About',
    submenu: [
      { label: 'Our Team', link: '/about/team' },
      { label: 'Our School', link: '/about/school' },
    ],
  },
  {
    label: 'Sectors',
    submenu: [
      { label: 'Sector 1', link: '/sectors/1' },
      { label: 'Sector 2', link: '/sectors/2' },
      { label: 'Sector 3', link: '/sectors/3' },
    ],
  },
  { label: 'Gallery', link: '/gallery' },
  { label: 'Activity', link: '/activity' },
  {
    label: 'Alumni Network',
    submenu: [
      { label: 'Alumni 1', link: '/alumni/1' },
      { label: 'Alumni 2', link: '/alumni/2' },
      { label: 'Alumni 3', link: '/alumni/3' },
    ],
  },
  {
    label: 'Health',
    submenu: [
      { label: 'Wellness', link: '/health/wellness' },
      { label: 'Medical', link: '/health/medical' },
    ],
  },
  { label: 'Contact Us', link: '/contact' },
  {
    icon: <AccountCircleIcon sx={{ mr: 0.5 }} />,
    submenu: [
      { label: 'Signup', link: '/signup' },
      { label: 'Login', link: '/login' },
    ],
  },
];

export default function Header({ toggleColorMode }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [currentMenu, setCurrentMenu] = React.useState(null);
  const [hovering, setHovering] = React.useState(false);


 const handleMenuOpen = (event, label) => {
  setAnchorEl(event.currentTarget);
  setCurrentMenu(label);
};


 let closeTimer;

const handleMenuClose = () => {
  setAnchorEl(null);
  setCurrentMenu(null);
};



  return (
    <AppBar position="sticky" color="primary">
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            School Name
          </Typography>

          {isMobile ? (
            <>
              <IconButton edge="end" color="inherit" onClick={() => setDrawerOpen(true)}>
                <MenuIcon />
              </IconButton>
             <Drawer
  anchor="right"
  open={drawerOpen}
  onClose={() => setDrawerOpen(false)}
  PaperProps={{
    sx: {
        color: theme.palette.primary.contrastText,
    },
  }}
>


                <List sx={{ width: 250, bgcolor: theme.palette.primary.main, color: theme.palette.primary.contrastText }}>
  {menuItems.map((item, idx) => (
    <React.Fragment key={idx}>
      <ListItem disablePadding>
        <ListItem
          button
          component={item.link ? RouterLink : 'div'}
          to={item.link || '#'}
        >
          <ListItemText
            primary={
              item.icon ? (
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  {item.icon}
                  <span style={{ marginLeft: 8 }}>{item.label}</span>
                </Box>
              ) : (
                item.label
              )
            }
            primaryTypographyProps={{ color: 'inherit' }}
          />
        </ListItem>
      </ListItem>

      {item.submenu?.map((sub, subIdx) => (
        <ListItem key={`${idx}-${subIdx}`} disablePadding sx={{ pl: 4 }}>
          <ListItem
            button
            component={RouterLink}
            to={sub.link}
          >
            <ListItemText
              primary={sub.label}
              primaryTypographyProps={{ color: 'inherit' }}
            />
          </ListItem>
        </ListItem>
      ))}
    </React.Fragment>
  ))}
</List>

              </Drawer>
            </>
          ) : (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              {menuItems.map((item) => (
                <div key={item.label}>
                  {item.submenu ? (
                    <>
                     <Button
  color="inherit"
  onClick={(e) => handleMenuOpen(e, item.label)}
  startIcon={item.icon || null}
>
  {item.label}
</Button>

                      <Menu
  anchorEl={anchorEl}
  open={currentMenu === item.label}
  onClose={handleMenuClose}
  MenuListProps={{
    onMouseLeave: handleMenuClose,
  }}
>
  {item.submenu.map((sub) => (
    <MenuItem
      key={sub.label}
      component={RouterLink}
      to={sub.link}
      onClick={handleMenuClose}
    >
      {sub.label}
    </MenuItem>
  ))}
</Menu>

                    </>
                  ) : (
                    <Button color="inherit" component={RouterLink} to={item.link}>
                      {item.label}
                    </Button>
                  )}
                </div>
              ))}
              <IconButton color="inherit" onClick={toggleColorMode}>
                {theme.palette.mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
              </IconButton>
            </Box>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
