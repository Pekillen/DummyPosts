import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Card,
  CardContent,
  CardHeader,
  Typography,
  Button,
  Divider,
  CardActions,
  Checkbox,
  Box,
  IconButton,
} from "@mui/material";
import { FavoriteBorder, Favorite, Share } from "@mui/icons-material";

import theme from "../../styles/Styles";
import LoadingPaper from "../LoadingPaper/LoadingPaper";
import ErrorPage from "../ErrorPage/ErrorPage";

const PostDetails = () => {
  const { id } = useParams();
  const [post, setPost] = useState({});
  const [isLiked, setIsLiked] = useState(false);
  const [likes, setLikes] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/posts/${id}`);
        const data = await response.json();
        setPost(data);
        setLikes(data.reactions);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
        setIsLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  const handleLikeButton = () => {
    // Once Backend is ready, change this logic to make the like dispatched to database
    setLikes((prev) => (isLiked ? prev - 1 : prev + 1));
    setIsLiked((prev) => !prev);
  };

  const handleShareButton = () => {
    // To be implemented in the future
    alert("This button doesn't work yet! Come back later!!");
  };

  if (isLoading) {
    return <LoadingPaper />;
  }

  if (!post.id) {
    return <ErrorPage />;
  }

  return (
    <Card sx={{ maxWidth: 800, borderRadius: "1rem", margin: "auto" }}>
      <Box display="flex" justifyContent="space-between" paddingBottom="8px">
        <CardHeader
          title={post.title}
          subheader={`Author of the story: ${post.userId}`}
          sx={{ color: theme.palette.primary.main }}
        />
        <CardActions disableSpacing sx={{ paddingRight: "15px" }}>
          <Typography
            variant="body2"
            sx={{ color: "grey", marginRight: "10px" }}
          >
            Post ID: {post.id}
          </Typography>
          <Checkbox
            onClick={handleLikeButton}
            icon={<FavoriteBorder />}
            checkedIcon={
              <Favorite sx={{ color: theme.palette.primary.main }} />
            }
          />
          <Typography variant="body2" color="grey">
            {likes}
          </Typography>
          <IconButton onClick={handleShareButton}>
            <Share
              sx={{ color: theme.palette.primary.main, marginLeft: "8px" }}
            />
          </IconButton>
        </CardActions>
      </Box>
      <Typography
        variant="body2"
        sx={{ color: "grey", paddingY: 0, paddingX: 2 }}
      >
        Tags: {post.tags.map((tag) => `#${tag} `)}
      </Typography>

      <CardContent>
        <Divider
          sx={{
            alignItems: "center",
            bgcolor: theme.palette.primary.main,
            width: "100%",
          }}
        />

        <Typography variant="body1" sx={{ paddingY: 2 }}>
          {post.body}
        </Typography>
      </CardContent>

      <Box display="flex" justifyContent="flex-end">
        <Button
          variant="contained"
          href="/"
          sx={{
            bgcolor: theme.palette.primary.main,
            color: theme.palette.pale.main,
            transition: "0.4s",
            borderBottomLeftRadius: 0,
            borderTopRightRadius: 0,
            "&:hover": {
              color: theme.palette.orange.main,
              bgcolor: theme.palette.dark.main,
            },
          }}
        >
          Back to Posts Page
        </Button>
      </Box>
    </Card>
  );
};

export default PostDetails;
