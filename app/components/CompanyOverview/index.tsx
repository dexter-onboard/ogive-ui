import React from 'react';
import { makeStyles } from '@mui/styles';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Image from 'next/image';
import { Theme } from '@mui/material/styles';
import { useTheme } from '@mui/material/styles';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    marginTop: '4rem',
  },
  image: {
    width: '100%',
    height: 'auto',
  },
  description: {
    padding: '2px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightgrey',
    textAlign: 'justify',
    color: 'grey',
  },
  paragraph: {
    marginBottom: '1rem',
  },
  ctaButton: {
    backgroundColor: 'red',
    color: 'white',
    marginTop: '1rem',
  },
}));

const CompanyDescription: React.FC = () => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} sx={{color: "grey"}}>
          <Typography variant="h4" gutterBottom>
            Defining Ogive
          </Typography>
          <Typography variant="h6" gutterBottom>
            Innovation. Creativity. Productivity.
          </Typography>
          <Typography variant="body1" className={classes.paragraph}>
          The genesis of the name ‘IOTTIVE’ often piques curiosity. Rooted in our commitment to the Internet of Things (IoT) domain, the name encapsulates our foundational ethos: a blend of Innovation, Creativity, and Productivity. ‘IOTTIVE’ is a fusion of ‘IoT’ and our core principles, symbolizing our strategic approach to delivering unparalleled services and products within the IoT landscape.
          </Typography>
          <Button variant="contained" className={classes.ctaButton}>
            Connect With Us
          </Button>
        </Grid>
        <Grid item xs={12} md={6}>
          <Image
            src="https://img.freepik.com/free-photo/beautiful-female-office-worker-carrying-out-administrative-work-company_197531-4960.jpg?semt=ais_hybrid"
            alt="Ogive Company"
            width={933}
            height={525}
            className={classes.image}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default CompanyDescription;