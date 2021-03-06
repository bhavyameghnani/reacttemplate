import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Grid, Container } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
//import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 3500,
  },
  media: {
    height: 0,
    paddingTop: '20%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  }
}));

const innovationcards = [
  {
    title: 'OCR Module in Accounts Payable',
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
]

export default function InnovationCard1() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <Container className={classes.cardGrid} maxWidth="60md">
      <main>
      <Grid container spacing={6}>
      {innovationcards.map((card) => (
      <Grid item key={card} xs={12} sm={6} md={4}>
      <Card className={classes.root}>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
              R
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={card.title}
          subheader={card.technology}
        />
        <CardMedia
          className={classes.media}
          image="https://source.unsplash.com/random"
          title="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {card.description}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>
              {card.date}<br/>
              {card.business}<br/>
              {card.aim}<br/>
              {card.poc}<br/>
            </Typography>
            <Typography paragraph>Method:</Typography>
            <Typography paragraph>
              Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
              minutes.
            </Typography>
            <Typography paragraph>
              Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
              heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
              browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken
              and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and
              pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add
              saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
            </Typography>
            <Typography paragraph>
              Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook
              without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to
              medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook
              again without stirring, until mussels have opened and rice is just tender, 5 to 7
              minutes more. (Discard any mussels that don’t open.)
            </Typography>
            <Typography>
              Set aside off of the heat to let rest for 10 minutes, and then serve.
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
      </Grid>
      ))}
     
      </Grid>
      </main>
      </Container>
      </React.Fragment>
  );
}