import { useState, useEffect } from 'react'
import { Grid, Box, Card, CardContent, Typography, Paper } from '@mui/material'
import Post from './Post/Post';
import { useNavigate } from 'react-router-dom';
import LoadingPaper from '../LoadingPaper/LoadingPaper';

const Posts = () => {

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();  

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('https://dummyjson.com/posts');
        const data = await response.json();
        setPosts([...data.posts]);
        setLoading(false);
      } catch (error) {
        console.error(error)
        alert(error.message);
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);


  const handlePostClick = (postId) => {
    navigate(`/posts/${postId}`);
  };

  if (loading) return <LoadingPaper />

    
  return ( //Maybe constrain the Post size to wrap after a few lines
    <Box sx={{ minHeight: '400px'}} >
      <Grid container alignItems="stretch" spacing={3} sx={{ display: 'flex', }} >
        {posts.map((post) => (
          <Grid item xs={12} md={6} key={post.id} >            
              <Post post={post} onClick={() => handlePostClick(post.id)} sx={{ height: '100%' }} />           
          </Grid>
        ))}
      </Grid>
    </Box>
  );    
};

export default Posts      