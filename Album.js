import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Header from './Header';

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '40%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

//const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const sections = [
  { title: 'Incube', url: '#' }, 
  { title: 'Internal Knowledge Repository', url: '#' },
  { title: 'GET SET', url: '#' },
  { title: 'Business Use-Cases', url: '#' },
  { title: 'PIO Culture', url: '#' },
  { title: 'Employee Opinion', url: '#' },
  { title: 'Tech Talks', url: '#' },
];

const cards = [
  {
    title: 'Centralized Logging System',
    aim: 'Generate client tracing activities from various logs',
    stage: 'UAT',
    technology: 'Elastic Search, Filebeat, Kibana',
    business: 'GMIT',
    poc: 'Bhavya, DJ',
    date: 'Aug 14',
    description:
      'Centrailzed logging system build on elasticsearch database & dashboards created using Kibana',
    image: 'https://source.unsplash.com/random',
    imageText: 'Image Text',
  },
  {
    title: 'Collating & Unifying file data',
    aim: 'Standarized & structure data coming from various sources',
    stage: 'prod',
    technology: 'Python, Pandas',
    business: 'RISK',
    poc: 'Nidhi',
    date: 'Aug 20',
    description:
      'Software that helps to structure data from various data mounts',
    image: 'https://source.unsplash.com/random',
    imageText: 'Image Text',
  },
  {
    title: 'Automatic deployment of software',
    aim: 'Need of automatic deployment of software on any enviornment',
    stage: 'prod',
    technology: 'Python, ansible, jenkins',
    business: 'CTS',
    poc: 'Mohit',
    date: 'Aug 20',
    description:
      'Universal platform for deployment of any software using ansible.',
    image: 'https://source.unsplash.com/random',
    imageText: 'Image Text',
  },
  {
    title: 'JWT Authenitication',
    aim: 'Need of authentication module using .Net Core Technology',
    stage: 'dev',
    technology: '.Net Core',
    business: 'CTS',
    poc: 'devang',
    date: 'Aug 20',
    description:
      'Authentication module using .Net technology',
    image: 'https://source.unsplash.com/random',
    imageText: 'Image Text',
  },
  {
    title: 'Migration in React',
    aim: 'Migrate any project technology to React',
    stage: 'prod',
    technology: 'React, java spring',
    business: 'GMIT',
    poc: 'Seena',
    date: 'Aug 20',
    description:
      'Platform for ease inmigrating projects to react technology',
    image: 'https://source.unsplash.com/random',
    imageText: 'Image Text',
  },
  {
    title: 'AG Grid in React',
    aim: 'Need of AG grid module',
    stage: 'prod',
    technology: 'react',
    business: 'IFO',
    poc: 'Karthik',
    date: 'Aug 20',
    description:
      'Platform for ease in building AG grid projects using react technology',
    image: 'https://source.unsplash.com/random',
    imageText: 'Image Text',
  },
]

export default function Album() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
      <>
        <Header title="Powai Innovation Office" sections={sections} />
      </>
      {/* <AppBar position="relative">
        <Toolbar>
          <CameraIcon className={classes.icon} />
          <Typography variant="h6" color="inherit" noWrap>
            Album layout
          </Typography>
        </Toolbar>
      </AppBar> */}
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Internal Knowldge Repository
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              An online database that systematically captures, organizes, and categorizes knowledge-based information. 
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button variant="contained" color="primary">
                    Submit your Innovation now
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
        <Container className={classes.cardGrid} maxWidth="40md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://source.unsplash.com/random"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {card.title}
                    </Typography>
                    <Typography>
                      <b>Problem Statement</b> {card.aim}
                      <br/>
                      <b>Stage:</b> {card.stage}
                      <br/>
                      <b>Technology:</b> {card.technology}
                      <br/>
                      <b>Business:</b> {card.business}
                      <br/>
                      <b>POC:</b> {card.poc}
                      <br/>
                      <b>Date:</b> {card.date}
                      <br/>
                      <b>Description:</b> {card.description}
                      <br/>
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      Read More
                    </Button>
                    <Button size="small" color="primary">
                      Get Project
                    </Button>
                    <Button size="small" color="primary">
                      Share Advancement
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
        Knowledge repositories help organizations connect people with information and expertise globally via online searchable libraries, discussion forums and other elements.
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          Something here to give the organization a purpose!
        </Typography>
        {/* <Copyright /> */}
      </footer>
      {/* End footer */}
      </Container>
    </React.Fragment>
  );
}