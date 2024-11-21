import React from 'react';
import { makeStyles } from '@mui/styles';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: '#333',
    color: 'white',
    padding: "4px",
    marginTop: "4rem",
  },
  socialMedia: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: "2rem",
  },
  iconButton: {
    color: 'white',
    margin: "1rem",
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Typography variant="h6" gutterBottom>
            About Ogive Technology
          </Typography>
          <Typography variant="body1">
            Ogive Technology is a leading provider of innovative solutions in the tech industry. Our mission is to deliver cutting-edge technology that drives business success and enhances user experience.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6} className={classes.socialMedia}>
          <IconButton className={classes.iconButton} href="https://www.facebook.com" target="_blank">
            <FacebookIcon />
          </IconButton>
          <IconButton className={classes.iconButton} href="https://www.twitter.com" target="_blank">
            <TwitterIcon />
          </IconButton>
          <IconButton className={classes.iconButton} href="https://www.linkedin.com" target="_blank">
            <LinkedInIcon />
          </IconButton>
          <IconButton className={classes.iconButton} href="https://www.instagram.com" target="_blank">
            <InstagramIcon />
          </IconButton>
        </Grid>
      </Grid>
    </footer>
  );
};

export default Footer;