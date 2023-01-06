import React from 'react';
import { AppBar, Toolbar, Typography, useMediaQuery, useTheme } from '@mui/material';
import TextSnippetRoundedIcon from '@mui/icons-material/TextSnippetRounded';
import DrawerComponent from './DrawerComponent';
import './Navbar.css';
import { Link } from 'react-router-dom';


function Navbar() {

  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down('md'));
 
  return (
    <>
      <AppBar elevation={0} sx={{ background: '#FE9433', height: '70px'}}>
        <Toolbar>
          
          {isMatch ? (
            <>
              <DrawerComponent />
              <TextSnippetRoundedIcon />
              <Typography>
                CI/CD Gen
              </Typography>
            </>
          ) : (
            <>
                <ul className='nav-menu'>
                  <li>
                    <Link to='/' className='nav-links'>
                      <TextSnippetRoundedIcon fontSize='inherit' sx={{marginRight:1}}/>
                      CI/CD Gen
                    </Link>
                  </li>
                  
                  <li className='nav-item'>
                    <Link to='/about-us' className='nav-links'>
                      About Us
                    </Link>
                  </li>
                </ul>
            </>
          ) }
          
        </Toolbar>

        
      </AppBar>
    </>
  )
}

export default Navbar