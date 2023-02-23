import {
AppBar,
Box,
Toolbar,
Typography
} from '@mui/material'

import NavigationList from 'components/layout/header/components/NavigationLinks/index'

const Navbar = () => {

  return (
    <Box sx={{height:'10vh'}} >
      <AppBar sx={{position:"relative", top:'0', backgroundColor: '#424242', color: 'white' }}>
        <Toolbar sx={{ display: 'flex' }}>
          <Typography variant="h6" sx={{ marginRight: '5vw'}}>
            E
          </Typography>
          <Typography variant="h6" sx={{ marginRight: '5vw', display: { xs: 'block' } }}>
          </Typography>
          <NavigationList />
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;