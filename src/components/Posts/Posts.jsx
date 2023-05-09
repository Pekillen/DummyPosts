import { useState, useEffect } from 'react';
import { Grid, Box, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import Post from './Post/Post';
import LoadingPaper from '../LoadingPaper/LoadingPaper';

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [query, setQuery] = useState('');
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
        console.error(error);        
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const handlePostClick = (postId) => {
    navigate(`/posts/${postId}`);
  };

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const searchFilter = (value) => {
    if (query == '') {
      return true;
    } else if (value.title.toLowerCase().includes(query.toLowerCase())) {
      return true;
    }
  };

  if (loading) return <LoadingPaper />;

  return (
    <Box sx={{ minHeight: '400px' }}>
      <Box component='form' sx={{ display: 'flex', marginBottom: '1rem' }}>
        <TextField
          label='Search by title'
          value={query}
          onChange={handleInputChange}
          sx={{ flex: 1 }}
        />
      </Box>

      <Grid
        container
        alignItems='stretch'
        spacing={3}
        sx={{ display: 'flex', marginBottom: '1.75rem' }}
      >
        {posts.filter(searchFilter).map((post) => (
          <Grid item xs={12} md={6} key={post.id}>
            <Post
              post={post}
              onClick={() => handlePostClick(post.id)}
              sx={{ height: '100%' }}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Posts;
