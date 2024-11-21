import React, { useState } from 'react';
import { makeStyles } from '@mui/styles';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    height: '90vh',
    padding: "2px",
    marginTop: '4rem',
  },
  buttonList: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  button: {
    marginBottom: "2px",
    textTransform: 'none',
  },
  activeButton: {
    backgroundColor: 'red',
    color: 'white',
    '&:hover': {
      backgroundColor: 'darkred',
    },
  },
  content: {
    padding: "2px",
    backgroundColor: 'white',
    textAlign: 'justify',
    color: 'grey',
  },
  image: {
    width: '100%',
    height: 'auto',
  },

  exploreButton: {
    marginTop: "2rem",
    backgroundColor: 'red',
    color: 'white',
  }

}));

const services = [
  'Data Analytics',
  'Cloud Application',
  'Product Engineering',
  'Enterprise Software',
  'Digital Experience',
  'Mobile Apps',
  'Software QA Testing',
  'DevOps Service',
];

const descriptions : { [key: string]: string } = {
  'Data Analytics': 'Data Analytics involves examining raw data to draw conclusions about that information. It helps organizations make informed decisions by uncovering patterns and insights. Our data analytics services ensure you get the most out of your data.',
  'Cloud Application': 'Cloud Application development allows businesses to leverage the power of cloud computing. It provides scalability, flexibility, and cost-efficiency. Our cloud solutions are designed to meet your unique business needs.',
  'Product Engineering': 'Product Engineering involves the design and development of products. It includes everything from concept to deployment. Our team ensures that your product is innovative, reliable, and market-ready.',
  'Enterprise Software': 'Enterprise Software is designed to meet the needs of large organizations. It helps streamline processes and improve efficiency. Our enterprise solutions are tailored to your specific requirements.',
  'Digital Experience': 'Digital Experience focuses on creating engaging and user-friendly digital interactions. It includes web design, mobile apps, and more. Our digital experience services ensure your users have a seamless experience.',
  'Mobile Apps': 'Mobile Apps are essential for reaching customers on the go. They provide convenience and accessibility. Our mobile app development services ensure your app is functional, user-friendly, and visually appealing.',
  'Software QA Testing': 'Software QA Testing ensures that your software is free of bugs and performs as expected. It involves various testing methods to identify and fix issues. Our QA services guarantee the quality and reliability of your software.',
  'DevOps Service': 'DevOps Service integrates development and operations to improve collaboration and productivity. It involves continuous integration, delivery, and deployment. Our DevOps services help you achieve faster and more reliable software releases.',
};

const ServiceComponent: React.FC = () => {
  const classes = useStyles();
  const [selectedService, setSelectedService] = useState(services[0]);

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={3} className={classes.buttonList}>
          {services.map((service) => (
            <Button
              key={service}
              variant={selectedService === service ? 'contained' : 'text'}
              className={`${classes.button} ${selectedService === service ? classes.activeButton : ''}`}
              onClick={() => setSelectedService(service)}
            >
              {service}
            </Button>
          ))}
        </Grid>
        <Grid item xs={12} md={5} className={classes.content}>
          <Typography variant="h4" gutterBottom>
            {selectedService}
          </Typography>
          <Typography variant="body1">
            {descriptions[selectedService]}
          </Typography>
          <Button
            variant="contained"
            className={classes.exploreButton}
            endIcon={<ArrowForwardIcon />}
          >
            Explore
          </Button>
        </Grid>
        <Grid item xs={12} md={4}>
          <Image
            src="https://cdn-bbaid.nitrocdn.com/wYFmIWkSNKpdInpiRfVoEqTErZtkFjBo/assets/images/optimized/rev-4de3647/www.rishabhsoft.com/wp-content/uploads/2020/05/analytics_iso_1-optimized-new.jpg"
            alt="Service Image"
            width={500}
            height={500}
            className={classes.image}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default ServiceComponent;