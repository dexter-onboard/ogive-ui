import React from 'react';
import { makeStyles } from '@mui/styles';
import Grid from '@mui/material/Grid';
import Image from 'next/image';
import { keyframes } from '@mui/system';

const useStyles = makeStyles((theme) => ({
  root: {
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    width: '100%',
    backgroundColor: '#f0f0f0',
    padding: "2rem",
  },
  logoTray: {
    display: 'inline-block',
    animation: '$moveLeft 20s linear infinite',
  },
  logo: {
    display: 'inline-block',
    margin: "2rem",
  },
  '@keyframes moveLeft': {
    '0%': {
      transform: 'translateX(100%)',
    },
    '100%': {
      transform: 'translateX(-100%)',
    },
  },
}));

const logos = [
  'https://via.placeholder.com/100x50?text=Logo1',
  'https://via.placeholder.com/100x50?text=Logo2',
  'https://via.placeholder.com/100x50?text=Logo3',
  'https://via.placeholder.com/100x50?text=Logo4',
  'https://via.placeholder.com/100x50?text=Logo5',
  'https://via.placeholder.com/100x50?text=Logo6',
  'https://via.placeholder.com/100x50?text=Logo7',
  'https://via.placeholder.com/100x50?text=Logo8',
  'https://via.placeholder.com/100x50?text=Logo9',
  'https://via.placeholder.com/100x50?text=Logo10',
];

const LogoTray = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.logoTray}>
        {logos.map((logo, index) => (
          <div key={index} className={classes.logo}>
            <Image src={logo} alt={`Logo ${index + 1}`} width={100} height={50} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoTray;