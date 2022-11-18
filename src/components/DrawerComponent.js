import { Drawer, IconButton, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import React from 'react'
import { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';

const PAGES = ['Feature', 'Support', 'Sign In', 'Sign Up']

function DrawerComponent() {
  const [openDrawer, setOpenDrawer] = useState(false)
  return (
    <>
      <Drawer open={openDrawer}
      onClose={() => setOpenDrawer(false)}
      >
        <List>
          {
            PAGES.map((page, index) => (
              <ListItemButton key={index}>
                <ListItemIcon>
                  <ListItemText>{page}</ListItemText>
                </ListItemIcon>
              </ListItemButton>
            ))
          }


          
        </List>
      </Drawer>
      <IconButton sx={{color:'black'}} onClick={() => setOpenDrawer(!openDrawer)}>
        <MenuIcon/>
      </IconButton>
    </>
  )
}

export default DrawerComponent