import React from 'react';
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

function Demo() {
  const classes = useStyles();

  return (
    <div className="App">
      
      <Container maxWidth="lg" className={classes.blogsContainer}>
        <Typography variant="h4" className={classes.blogTitle}>
          Articles
        </Typography>
        <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={4}>
            <Card className='classes.card'>
           
            <CardActionArea>
               <CardMedia className='classes.media'
                  component="img"
                  alt=""
                  height="140"
                   image="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    Food
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    Food, substance consisting essentially of protein, carbohydrate, fat, and other nutrients used in the body of an organism to sustain growth and vital processes and to furnish energy. The absorption  is fundamental to nutrition and is facilitated by digestion.
                    </Typography>
                </CardContent>
                </CardActionArea>
                <CardActions className={classes.cardActions}>
                <Box className={classes.blogger}>
                 
                  <Box ml={2}>
                    <Typography variant="subtitle2" component="p">
                      Srithan
                    </Typography>
                    <Typography variant="subtitle2" color="textSecondary" component="p">
                      January 15,2022
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
                   image="https://www.wallpapertip.com/wmimgs/13-130844_mind-education-education.jpg"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    Education
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    Education is both the act of teaching knowledge to others and the act of receiving knowledge from someone else. Education also refers to the knowledge received through schooling or instruction and to the institution of teaching as a whole.
                    </Typography>
                </CardContent>
                </CardActionArea>
                <CardActions className={classes.cardActions}>
                <Box className={classes.blogger}>
                  {/* <Avatar src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" /> */}
                  <Box ml={2}>
                    <Typography variant="subtitle2" component="p">
                      Sushmitha
                    </Typography>
                    <Typography variant="subtitle2" color="textSecondary" component="p">
                      May 14, 2020
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
                   image="https://images.unsplash.com/photo-1569949381669-ecf31ae8e613?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dG91cnxlbnwwfHwwfHw%3D&w=1000&q=80"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    Tour
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    A journey for business, pleasure, or education often involving a series of stops and ending at the starting point also : something resembling such a tour a tour of the history of philosophy. b : a series of professional tournaments (as in golf or tennis) c : a brief turn : round.
                    </Typography>
                </CardContent>
                </CardActionArea>
                <CardActions className={classes.cardActions}>
                <Box className={classes.blogger}>
                  <Box ml={2}>
                    <Typography variant="subtitle2" component="p">
                      Manikanta
                    </Typography>
                    <Typography variant="subtitle2" color="textSecondary" component="p">
                      December 31, 2020
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
        </Grid>
      </Container>
    </div>
  );
}

export default Demo;