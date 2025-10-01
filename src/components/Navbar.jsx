// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Box, Popper, Paper, Grid, MenuItem, IconButton, List, ListItemButton, ListItemText, Collapse, Divider } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { BorderBottom, ExpandLess, ExpandMore } from '@mui/icons-material';
import { motion } from 'framer-motion';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


function MegaMenuButton({ label, sections }) {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleEnter = () => setOpen(true);
  const handleLeave = () => setOpen(false);

  return (
    <div onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
      <Button ref={anchorRef} color="inherit">{label}</Button>
      <Popper open={open} anchorEl={anchorRef.current} placement="bottom-start" disablePortal>
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: open ? 1 : 0, y: open ? 0 : -10 }}
          transition={{ duration: 0.3 }}
        >
          <Paper elevation={3} sx={{ p: 2, minWidth: 300, bgcolor: '#1e1e1e', color: 'white' }}>
            <Grid container spacing={2}>
              {sections.map((section, idx) => (
                <React.Fragment key={section.title}>
                  <Grid item xs={6}>
                    <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1, color: '#ff9100ff' }}>{section.title}</Typography>
                    {section.items.map((item) => (
                      <MenuItem key={item.label} component={Link} to={item.path} sx={{ color: 'white', '&:hover': { bgcolor: '#345635d7', color: 'white' } }}>{item.label}</MenuItem>
                    ))}
                  </Grid>
                  {idx < sections.length - 1 && <Divider orientation="vertical" flexItem sx={{ bgcolor: 'gray' }} />}
                </React.Fragment>
              ))}
            </Grid>
          </Paper>
        </motion.div>
      </Popper>
    </div>
  );
}

export default function Navbar() {
  const [mobileAnchorEl, setMobileAnchorEl] = React.useState(null);
  const [openProjects, setOpenProjects] = React.useState(false);
  const [openEvents, setOpenEvents] = React.useState(false);
  const [openDonate, setOpenDonate] = React.useState(false);

  const handleMobileMenuToggle = (event) => {
    if (mobileAnchorEl) {
      setMobileAnchorEl(null);
    } else {
      setMobileAnchorEl(event.currentTarget);
    }
  };

  const handleMobileMenuClose = () => setMobileAnchorEl(null);

  const toggleProjects = () => setOpenProjects(!openProjects);
  const toggleEvents = () => setOpenEvents(!openEvents);
  const toggleDonate = () => setOpenDonate(!openDonate);

  const projectsSections = [
    { title: 'Education Programs', items: [{ label: 'Scholarships', path: '/projects' }, { label: 'School Supplies', path: '/projects' }] },
    { title: 'Health & Support', items: [{ label: 'Health Camps', path: '/projects' }, { label: 'Counseling', path: '/projects' }] },
  ];

  const eventsSections = [
    { title: 'School Events', items: [{ label: 'Annual Day', path: '/events' }, { label: 'Sports Day', path: '/events' }] },
    { title: 'Volunteer Drives', items: [{ label: 'Teaching Volunteers', path: '/events' }, { label: 'Community Outreach', path: '/events' }] },
  ];

  const donateSections = [
    { title: 'Donation Options', items: [{ label: 'One-Time', path: '/donate' }, { label: 'Recurring', path: '/donate' }] },
  ];
  const navButtonStyle = {
  color: 'inherit',
  '&:hover': {
    color: '#42bd73ff', // hover color
    // textDecoration: 'underline',
  borderBottom: '1px solid #42bd73ff',
  },
};


  return (
    <AppBar position="static" sx={{ bgcolor: '#1e1e1e' }}>
      <Box sx={{ flexGrow: 1 }}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>School NGO</Link>
          </Typography>

          {/* Desktop Menu */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}>
            <Button color="inherit" component={Link} to="/" sx={navButtonStyle}>Home</Button>
            <Button color="inherit" component={Link} to="/about" sx={navButtonStyle}>About</Button>
            <MegaMenuButton label="Projects" sections={projectsSections} />
            <MegaMenuButton label="Events" sections={eventsSections} />
            <MegaMenuButton label="Donate" sections={donateSections} />
            <Button color="inherit" component={Link} to="/contact" sx={navButtonStyle}>Contact</Button>
            <Button color="inherit" component={Link} to="/login" startIcon={<AccountCircleIcon />} sx={navButtonStyle}>
            Login
          </Button>

          </Box>

          {/* Mobile Menu */}
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton size="large" edge="start" color="inherit" onClick={handleMobileMenuToggle}>
              <MenuIcon />
            </IconButton>
            {mobileAnchorEl && (
              <Paper sx={{ position: 'absolute', top: '56px', right: 0, width: 250, bgcolor: '#1e1e1e', color: 'white', zIndex: 1300 }} onBlur={handleMobileMenuClose} tabIndex={0}>
                <List>
                  <ListItemButton component={Link} to="/about" onClick={handleMobileMenuClose}><ListItemText primary="About" /></ListItemButton>

                  <ListItemButton onClick={toggleProjects}>
                    <ListItemText primary="Projects" />
                    {openProjects ? <ExpandLess /> : <ExpandMore />}
                  </ListItemButton>
                  <Collapse in={openProjects} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                      {projectsSections.map(section => (
                        section.items.map(item => (
                          <ListItemButton key={item.label} sx={{ pl: 4 }} component={Link} to={item.path} onClick={handleMobileMenuClose}>
                            <ListItemText primary={item.label} />
                          </ListItemButton>
                        ))
                      ))}
                    </List>
                  </Collapse>

                  <ListItemButton onClick={toggleEvents}>
                    <ListItemText primary="Events" />
                    {openEvents ? <ExpandLess /> : <ExpandMore />}
                  </ListItemButton>
                  <Collapse in={openEvents} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                      {eventsSections.map(section => (
                        section.items.map(item => (
                          <ListItemButton key={item.label} sx={{ pl: 4 }} component={Link} to={item.path} onClick={handleMobileMenuClose}>
                            <ListItemText primary={item.label} />
                          </ListItemButton>
                        ))
                      ))}
                    </List>
                  </Collapse>

                  <ListItemButton onClick={toggleDonate}>
                    <ListItemText primary="Donate" />
                    {openDonate ? <ExpandLess /> : <ExpandMore />}
                  </ListItemButton>
                  <Collapse in={openDonate} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                      {donateSections.map(section => (
                        section.items.map(item => (
                          <ListItemButton key={item.label} sx={{ pl: 4 }} component={Link} to={item.path} onClick={handleMobileMenuClose}>
                            <ListItemText primary={item.label} />
                          </ListItemButton>
                        ))
                      ))}
                    </List>
                  </Collapse>

                  <ListItemButton component={Link} to="/contact" onClick={handleMobileMenuClose}><ListItemText primary="Contact" /></ListItemButton>
                  <ListItemButton component={Link} to="/login" onClick={handleMobileMenuClose}>
                  <AccountCircleIcon sx={{ mr: 1 }} />
                    <ListItemText primary="Login" />
                  </ListItemButton>

                </List>
              </Paper>
            )}
          </Box>
        </Toolbar>
      </Box>
    </AppBar>
  );
}