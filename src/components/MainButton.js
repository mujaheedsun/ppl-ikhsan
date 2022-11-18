import { Button, Typography } from '@mui/material';
import React from 'react';

function MainButton() {
  return (
    <>
      <Button
      href='/generator'
      sx={{borderRadius: 50, height: 200, width:200}}
      variant='contained'
      color='secondary'>
      <Typography sx={{color:'black', fontSize:32}}>
        START
      </Typography>
      </Button>
    </>
  )
}

export default MainButton