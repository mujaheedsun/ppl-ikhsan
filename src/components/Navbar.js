import React, { useState, useEffect } from 'react';
import { AppBar, Button, Tab, Tabs, Toolbar, Typography, useMediaQuery, useTheme } from '@mui/material';
import TextSnippetRoundedIcon from '@mui/icons-material/TextSnippetRounded';
import DrawerComponent from './DrawerComponent';
import './Navbar.css';
import { Link } from 'react-router-dom';


const PAGES = ['Feature', 'Support']

function Navbar() {

  const [value, setValue] = useState();
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
                    <Link to='/feature' className='nav-links'>
                      Feature
                    </Link>
                  </li>
                  <li className='nav-item'>
                    <Link to='/support' className='nav-links'>
                      Support
                    </Link>
                  </li>
                </ul>

              <Button sx={{ marginLeft: 'auto', marginRight: '10px' }} variant='contained'> Sign In </Button>
              <Button variant='outlined'> Sign Up </Button>
            </>
          ) }
          
        </Toolbar>

        
      </AppBar>
    </>
  )
}

export default Navbar