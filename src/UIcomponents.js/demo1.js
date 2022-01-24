import React from 'react';
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Box from '@material-ui/core/Box';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import  IconButton  from '@material-ui/core/IconButton';
import { CardActionArea } from '@material-ui/core';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';


const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: "#fff"
  },
  
  blogsContainer: {
    paddingTop: theme.spacing(3)
  },
  blogTitle: {
    fontWeight: 800,
    paddingBottom: theme.spacing(3)
  },
  card: {
    maxWidth: "100%",
  },
  media: {
    height: 240
  },
  cardActions: {
    display: "flex",
    margin: "0 10px",
    justifyContent: "space-between"
  },
  author: {
    display: "flex"
  }
 
  
}));

function Demo1() {
  const classes = useStyles();

  return (
    <div className="App">
      
      <Container maxWidth="lg" className={classes.blogsContainer}>
        <Typography variant="h4" className={classes.blogTitle}>
        </Typography>
        <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={4}>
            <Card className='classes.card'>
           
            <CardActionArea>
               <CardMedia className='classes.media'
                  component="img"
                  alt=""
                  height="140"
                   image="https://images.unsplash.com/photo-1593720219276-0b1eacd0aef4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cmVhY3QlMjBqc3xlbnwwfHwwfHw%3D&w=1000&q=80"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    React JS
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    React is a declarative, efficient, and flexible JavaScript library for building user interfaces. It lets you compose complex UIs from small and isolated pieces of code called “components”. React has a few different kinds of components, but we'll start with React.Component subclasses: class ShoppingList extends React.
                    </Typography>
                </CardContent>
                </CardActionArea>
                <CardActions className={classes.cardActions}>
                <Box className={classes.blogger}>
                 
                  <Box ml={2}>
                    <Typography variant="subtitle2" component="p">
                      Vijay Devara
                    </Typography>
                    <Typography variant="subtitle2" color="textSecondary" component="p">
                      January 19,2022
                    </Typography>
                  </Box>
                </Box>
                <Box>
               
                
                <IconButton aria-label="delete" >
                <EditIcon />
                </IconButton>
                <IconButton aria-label="delete"  >
                <DeleteIcon />
                </IconButton>
                </Box>
              </CardActions>
                </Card>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
            <Card className='classes.card'>
                
                <CardActionArea>
               <CardMedia className='classes.media'
                  component="img"
                  alt=""
                  height="140"
                   image="https://cdn.wallpapersafari.com/93/89/d2CLmo.jpg"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    Sport
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    Cricket is a bat-and-ball game played between two teams of eleven players each on a field at the centre of which is a 22-yard (20-metre) pitch with a wicket at each end, each comprising two bails balanced on three stumps.Cricket is a bat-and-ball game , each comprising two bails balanced on three stumps.
                    </Typography>
                </CardContent>
                </CardActionArea>
                <CardActions className={classes.cardActions}>
                <Box className={classes.blogger}>
                  {/* <Avatar src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" /> */}
                  <Box ml={2}>
                    <Typography variant="subtitle2" component="p">
                      Yuvraj Singh
                    </Typography>
                    <Typography variant="subtitle2" color="textSecondary" component="p">
                      December 18, 2021
                    </Typography>
                  </Box>
                </Box>
                <Box>
               
                
                <IconButton aria-label="delete" >
                <EditIcon />
                <Link  to="/getPosts">Edit</Link>
                </IconButton>
                <IconButton aria-label="delete"  >
                <DeleteIcon />
                </IconButton>
                </Box>
              </CardActions>
                </Card>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
            <Card className='classes.card'>
           
               <CardActionArea>
               <CardMedia className='classes.media'
                  component="img"
                  alt=""
                  height="140"
                   image="https://i.pinimg.com/originals/9d/bb/7b/9dbb7b1fee6b77fcfd20cb2b9023701f.jpg"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    Tour
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    Nature, in the broadest sense, is the natural, physical, material world or universe. "Nature" can refer to the phenomena of the physical world, and also to life in general. ... Within the various uses of the word today, "nature" often refers to geology and wildlife.Nature, in the broadest sense.
                    </Typography>
                </CardContent>
                </CardActionArea>
                <CardActions className={classes.cardActions}>
                <Box className={classes.blogger}>
                  <Box ml={2}>
                    <Typography variant="subtitle2" component="p">
                      Yuvasree
                    </Typography>
                    <Typography variant="subtitle2" color="textSecondary" component="p">
                     January 20, 2022
                    </Typography>
                  </Box>
                </Box>
                <Box>
               
               
                <IconButton aria-label="delete" >
                <EditIcon />
                </IconButton>
                <Link  to="/getComments">Edit</Link>
                <IconButton aria-label="delete"  >
                <DeleteIcon />
                </IconButton>
                </Box>
              </CardActions>
                </Card>
            </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Demo1;