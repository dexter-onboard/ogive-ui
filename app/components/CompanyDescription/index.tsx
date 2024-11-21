import React from 'react';
import { makeStyles } from '@mui/styles';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Image from 'next/image';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: "2px",
  },
  image: {
    width: '100%',
    height: 'auto',
  },
  description: {
    padding: "2px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    color: "grey"
  },
  paragraph: {
    marginBottom: '1rem',
  },

  alltext: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    color: "grey"
  }

}));

const CompanyDescription = () => {
  const classes = useStyles();

  return (
    <div className={classes.root} style={{marginTop: "4rem"}}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Image
            src="https://caltechsites-prod.s3.amazonaws.com/scienceexchange/images/can_we_trust_AI.2e16d0ba.fill-933x525-c100.jpg"
            alt="Ogive Company"
            width={933}
            height={525}
            className={classes.image}
          />
        </Grid>
        <Grid item xs={12} md={6} className={classes.description}>
        <Typography variant="h6" gutterBottom>
            Ogive Technology
          </Typography>
          <Typography variant="body1" className={classes.paragraph}>
            Ogive Technology is a leading provider of innovative solutions in the tech industry.
          </Typography>
          <Typography variant="body1">
            Our mission is to deliver cutting-edge technology that drives business success and enhances user experience.
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default CompanyDescription;