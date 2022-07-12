import React from 'react'
import { Box, Divider, Typography } from "@mui/material";
import  DiamondIcon from '@mui/icons-material/Diamond';
import {pink} from '@mui/material/colors';

export default function Footer() {
  return (
    <Box
      sx={{
        width: '100%',
        background: '#bdbdbd',
        marginTop: '40px',
        padding: '40px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        color: 'white'
      }}
    >
      <DiamondIcon sx={{ color: pink[300], fontSize: 40, p: 0, marginRight: 1, display: { md: 'flex' } }}/>
      
      
      <Divider style={{ width: '50%', margin: '20px auto', borderColor: 'white' }} />

      <Typography> © 2022 
        <a className='link' style={{ margin: '10px', color: 'white' }} href='https://github.com/laurabe18/React' target='_blank' rel='noreferrer'>
         Laura Romero
        </a>
      </Typography>
    </Box>
  )
}
