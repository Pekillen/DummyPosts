import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Card,
  CardContent,
  CardHeader,
  Typography,
  Grid,
  Paper,
  Button,
  Divider,
  CardActions,
  IconButton,
  Checkbox,
  Box,
} from "@mui/material";
import { FavoriteBorder, Favorite, Share } from "@mui/icons-material";

import LoadingPaper from "../LoadingPaper/LoadingPaper";

const PostDetails = () => {
  const { id } = useParams();
  const [post, setPost] = useState({});
  const [isChecked, setIsChecked] = useState(false);
  const [likes, setLikes] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/posts/${id}`);
        const data = await response.json();
        setPost(data);
        setLikes(data.reactions);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchPost();

    return () => {
      console.log("Clean up function ran");
    };
  }, [id]);

  const handleClick = () => {
    if (!isChecked) {
      setLikes((prev) => prev + 1);
      setIsChecked((prev) => !prev);
    } else {
      setLikes((prev) => prev - 1);
      setIsChecked((prev) => !prev);
    }
  };

  if (loading) return <LoadingPaper />;

  if (!post.id)
    return (
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="top"
        style={{ minHeight: "100vh" }}
      >
        <Paper
          elevation={12}
          sx={{
            padding: "20px",
            borderRadius: "15px",
            width: "60vw",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Typography>Whoops! It seems this page does not exist...</Typography>
        </Paper>
        <Button variant="contained" href="/">
          Posts Page
        </Button>
      </Grid>
    );

  return (
    <Card sx={{ maxWidth: 800, borderRadius: "1rem", margin: "auto" }}>
      <Box display="flex" justifyContent="space-between" paddingBottom="8px">
        <CardHeader
          title={post.title}
          subheader={`Author of the story: ${post.userId}`}
          sx={{ color: "#133a44" }}
        />
        <CardActions disableSpacing sx={{ paddingRight: "15px" }}>
          <Typography
            variant="body2"
            sx={{ color: "grey", marginRight: "10px" }}
          >
            Post ID: {post.id}
          </Typography>
          <Checkbox
            onClick={handleClick}
            icon={<FavoriteBorder />}
            checkedIcon={<Favorite sx={{ color: "#133a44" }} />}
          />
          <Typography variant="body2" color="grey">
            {likes}
          </Typography>
          <Share sx={{ color: "#133a44", marginLeft: "8px" }} />
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
          sx={{ alignItems: "center", bgcolor: "#133a44", width: "100%" }}
        />

        <Typography variant="body1" sx={{ paddingY: 2 }}>
          {post.body}
        </Typography>
      </CardContent>

      {/* DAWJA NA PRAWo */}
      <Box display="flex" justifyContent="flex-end">
        <Button
          variant="contained"
          href="/"
          sx={{
            bgcolor: "#133a44",
            color: "white",
            transition: "0.4s",
            borderBottomLeftRadius: 0,
            borderTopRightRadius: 0,
          }}
        >
          Back to Posts Page
        </Button>
      </Box>
    </Card>
  );
};

export default PostDetails;
