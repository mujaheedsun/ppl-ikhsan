import { Button, Fab, Typography } from '@mui/material';
import React from 'react';
import EditIcon from '@mui/icons-material/Edit';

function MainButton() {
  return (
    <>
      <Fab
      href='/generator'
      sx={{borderRadius: 50, height: 200, width:200}}
      variant='contained'
      color='secondary'>
      <Typography sx={{color:'black', fontSize:32}}>
        START
      </Typography>
      </Fab>
    </>
  )
}

export default MainButton