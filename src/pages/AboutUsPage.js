import { Typography, Grid, Box } from '@mui/material'
import React from 'react'

function AboutUsPage() {
  return (
    <>
      <div className='about-us-container'>
        <Box
          sx = {{width:'80%'}}
        >
          <Grid
            container
            direction="column"
            justifyContent="flex-start"
            alignItems="center" 
          >
            <Grid item>
              <Typography variant='h2' sx={{ mt:10 }}>
                About Us
              </Typography>
            </Grid>

            <Grid item>
              <Typography variant='h6' sx={{ mb: 10 }}>
                (or it's just Me)
              </Typography>
            </Grid>

            <Grid item >
              <Typography variant='h6' sx={{ mb : 7 }}>
                This CI CD Generator was intended to give you a template of .yml file
                for your project hosted online, especially in Gitlab and Github. This file later 
                can be edited and adjusted based on your needs.

                It is simple. Yet really helpful :)
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </div>
    </>
    
  )
}

export default AboutUsPage