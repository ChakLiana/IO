import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ClearIcon from '@material-ui/icons/Clear'
import EditIcon from '@material-ui/icons/Edit';
import moment from 'moment';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';

import { useDispatch } from 'react-redux';

import { likePost, deletePost } from '../../../Redux/actions/posts';
import useStyles from './styles';

const Post = ({ post, setCurrentId }) => {
  
  const dispatch = useDispatch();
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardMedia className={classes.media} image={post.selectedFile || 'https://cdn2.vectorstock.com/i/thumb-large/55/86/anonymous-icon-incognito-sign-privacy-vector-34705586.jpg'} title={post.title} />
      <div className={classes.overlay}>
        <Typography variant="h6"> <PersonOutlineIcon fontSize="small" />{post.creator}</Typography>
        <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
      </div>
      <div className={classes.overlay2}>
        <Button style={{ color: 'white' }} size="small" onClick={() => setCurrentId(post._id)}><EditIcon fontSize="medium"  /></Button>
      </div>
      <div className={classes.details}>
        <Typography variant="body2" color="textSecondary" component="h2">{post.tags.map((tag) => `#${tag} `)}</Typography>
      </div>
      <Typography className={classes.title} gutterBottom variant="h5" component="h2">{post.title}</Typography>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">{post.message}</Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Button size="small" color="primary" onClick={() => dispatch(likePost(post._id))}><FavoriteIcon fontSize="small" /> {post.likesCount} </Button>
        <Button size="small" color="primary" onClick={() => dispatch(deletePost(post._id))}><ClearIcon fontSize="small" /> </Button>
      </CardActions>
    </Card>
  );
};

export default Post;
