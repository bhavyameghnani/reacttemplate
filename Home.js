import React, { Component } from 'react';
import '../App.css';
import InnovationCard1 from './InnovationCard1';
import Button from '@material-ui/core/Button';
import Header from './Header';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';

export default function Home() {

  const useStyles = makeStyles((theme) => ({
    footer: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(6),
    },
    heroContent: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(8, 0, 6),
    },
  }));



  const sections = [
    { title: 'Incube', url: '#' }, 
    { title: 'Internal Knowledge Repository', url: '#' },
    { title: 'GET SET', url: '#' },
    { title: 'Business Use-Cases', url: '#' },
    { title: 'PIO Culture', url: '#' },
    { title: 'Employee Opinion', url: '#' },
    { title: 'Tech Talks', url: '#' },
  ]; 

  const classes = useStyles();
    return (
      <React.Fragment>
        <CssBaseline />
          <Container maxWidth="lg">
            <Header title="Powai Innovation Office" sections={sections} />

              <div className={classes.heroContent}>
            <Container maxWidth="sm">
              <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                Crowdsourcing Repository
              </Typography>
              <Typography variant="h5" align="center" color="textSecondary" paragraph>
                An online database that systematically captures, organizes, and categorizes knowledge-based information. 
              </Typography>
              <div className={classes.heroButtons}>
                <Grid container spacing={2} justify="center">
                  <Grid item>
                    <Button variant="contained" color="primary">
                      Submit your Demand Innovation now
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button variant="outlined" color="primary">
                      Ask PIO to arrange session
                    </Button>
                  </Grid>
                </Grid>
              </div>

          </Container>
        </div>
            <main>
              <br/>
              <InnovationCard1/>
            </main>
            <footer className={classes.footer}>
              <Typography variant="h6" align="center" gutterBottom>
              Knowledge repositories help organizations connect people with information and expertise globally via online searchable libraries, discussion forums and other elements.
              </Typography>
              <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
                Something here to give the organization a purpose!
              </Typography>
              {/* <Copyright /> */}
            </footer>
          </Container>
      </React.Fragment>
    );
  }