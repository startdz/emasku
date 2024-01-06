import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Logo from '@/assets/Logo Emasku side.png';
import { Link } from 'react-router-dom';
import { NavbarMenu } from '@/constants/Resource';
import { Grid } from '@mui/material';
import { makeStyles } from '@mui/material';

// const useStyles = makeStyles((theme) => ({
//   appBar: {
//     boxShadow: 'none',
//   },
// }));

export default function DenseAppBar() {
  // const classes = useStyles();
  return (
    <React.Fragment>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position='fixed'
          color='inherit'
          style={{ boxShadow: 'none' }}
          className='py-2'>
          <Toolbar
            variant='dense'
            style={{
              display: 'flex',
              justifyContent: 'space-between',
            }}>
            <Box component='div'>
              <img
                src={`${Logo}?w=20&h=20&fit=crop&auto=format`}
                srcSet={`${Logo}?w=20&h=20&fit=crop&auto=format&dpr=2 2x`}
                className='w-56 h-12'
                alt='Emasku'
                loading='lazy'
              />
            </Box>
            <Grid style={{ width: '66%' }}>
              <ul style={{ display: 'flex', justifyContent: 'space-between' }}>
                {NavbarMenu.map((menu, index) => {
                  return (
                    <li key={index}>
                      <Link to={menu.path} className='font-bold text-slate-600'>
                        {menu.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </Grid>
          </Toolbar>
        </AppBar>
      </Box>
    </React.Fragment>
  );
}
