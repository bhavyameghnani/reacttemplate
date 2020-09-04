import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import Header from './Header';
import MainFeaturedPost from './MainFeaturedPost';
import FeaturedPost from './FeaturedPost';
//import Main from './Main';
import Sidebar from './Sidebar';
//import InnovationCard from './InnovationCard';
// import Footer from './Footer';
// import post1 from './blog-post.1.md';
// import post2 from './blog-post.2.md';
// import post3 from './blog-post.3.md';

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
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

const mainFeaturedPost = {
  title: 'Women & Millennials Innovation Labs',
  description:
    "Platform for unlocking hidden talents & encouraging community to strive for Innovations across Powai.",
  image: 'https://source.unsplash.com/random',
  imgText: 'main image description',
  linkText: 'Continue reading…',
};

const featuredPosts = [
  {
    title: 'DEL: Build for Digital Powai',
    date: 'Aug 14',
    description:
      'Embracing emerging technologies & low-code tool for business centric Innovations.',
    image: 'https://source.unsplash.com/random',
    imageText: 'Image Text',
  },
  {
    title: 'Internal Champions Group',
    date: 'Aug 20',
    description:
      'Platform for grouping people with similar interest who are good at particular technolgies or business domain.',
    image: 'https://source.unsplash.com/random',
    imageText: 'Image Text',
  },
  {
    title: 'Building Automation Culture',
    date: 'Aug 22',
    description:
      'Programs & Innitiatives for building automation workforce.',
    image: 'https://source.unsplash.com/random',
    imageText: 'Image Text',
  },
  {
    title: 'Hackathons & Innovation Challenges',
    date: 'Aug 26',
    description:
      'Design sprint-like event where computer programmers, graphic designers, interface designers, project managers etc collaborate intensively on software projects.',
    image: 'https://source.unsplash.com/random',
    imageText: 'Image Text',
  },
];

//const posts = [post1, post2, post3];

const sidebar = {
  title: 'About PIO',
  description:
    'The PIO is a specialized group of expert innovators who remain hidden from the public eye. Its member are highly trained & its field operatives very rigorously in the ways of stealth, deception, persuasion and the art of "invisibility',
  archives: [
    { title: 'March 2020', url: '#' },
    { title: 'February 2020', url: '#' },
    { title: 'January 2020', url: '#' },
    { title: 'November 1999', url: '#' },
    { title: 'October 1999', url: '#' },
    { title: 'September 1999', url: '#' },
    { title: 'August 1999', url: '#' },
    { title: 'July 1999', url: '#' },
    { title: 'June 1999', url: '#' },
    { title: 'May 1999', url: '#' },
    { title: 'April 1999', url: '#' },
  ],
  social: [
    { name: 'GitHub', icon: GitHubIcon },
    { name: 'Twitter', icon: TwitterIcon },
    { name: 'Facebook', icon: FacebookIcon },
  ],
};

export default function Blog() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="Powai Innovation Office" sections={sections} />
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Grid container spacing={4}>
            {featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid>
          <Grid container spacing={5} className={classes.mainGrid}>
            {/* <Main title="From the firehose" posts={posts} /> */}
            <Sidebar
              title={sidebar.title}
              description={sidebar.description}
              archives={sidebar.archives}
            //   social={sidebar.social}
            />
          </Grid>
        </main>
      </Container>
      {/* <Footer title="Footer" description="Something here to give the footer a purpose!" /> */}
    </React.Fragment>
  );
}