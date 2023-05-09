import {
  Card,
  Grid,
  Typography,
  ButtonBase,
  Box,
  CardContent,
  Divider,
} from '@mui/material';
import { Favorite } from '@mui/icons-material';

import theme from '../../../styles/Styles';

const Post = ({ post, onClick }) => {
  return (
    <Card
      sx={{
        display: 'flex',
        flexDirection: 'column',
        borderRadius: '1rem',
        height: '100%',
        position: 'relative',
        ':hover': { bgcolor: theme.palette.secondary.main, transition: '0.3s' },
      }}
      raised
    >
      <ButtonBase onClick={onClick}>
        <Grid container spacing={1} padding={1.5}>
          <Grid item container sx={{ direction: 'row' }} xs={9}>
            <Typography variant='body2' color={theme.palette.grey.main}>
              Created by: {post.userId}
            </Typography>
            <Favorite
              fontSize='small'
              sx={{
                color: theme.palette.primary.main,
                marginLeft: '20px',
                marginRight: '5px',
              }}
            />
            <Typography variant='body2' color={theme.palette.grey.main}>
              {post.reactions} {post.reactions === 1 ? 'Like' : 'Likes'}
            </Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography
              variant='body2'
              color={theme.palette.grey.main}
              textAlign='right'
            >
              {' '}
              Post ID: {post.id}
            </Typography>
          </Grid>

          <Divider
            sx={{
              alignItems: 'center',
              bgcolor: theme.palette.primary.main,
              width: '100%',
              marginTop: '5px',
            }}
          />

          <Grid item xs={12}>
            <Typography variant='h5' color={theme.palette.primary.main}>
              {post.title}
            </Typography>
          </Grid>

          <Grid item xs={12}>
            <Box>
              <Typography variant='body2' color='textSecondary'>
                Tags: {post.tags.map((tag) => `#${tag} `)}
              </Typography>
            </Box>
          </Grid>

          <Grid item>
            <CardContent>
              <Typography variant='body2' color='textSecondary'>
                {post.body}
              </Typography>
            </CardContent>
          </Grid>
        </Grid>
      </ButtonBase>
    </Card>
  );
};

export default Post;
