import { Typography } from '@mui/material';
import React from 'react'
import MainButton from '../components/MainButton'
import './Home.css';

function Home() {
  return (
    <>
      <div className='hero-container'>
        <Typography variant='h2' sx={{mb:7}}>
          Generate Your Own CI/CD File
        </Typography>
        <MainButton />
      </div>
    </>
  )
}

export default Home