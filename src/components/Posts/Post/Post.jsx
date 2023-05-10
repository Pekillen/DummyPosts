import { Grid, Typography, ButtonBase, Box, CardContent } from "@mui/material";
import { Favorite } from "@mui/icons-material";

import theme from "../../../styles/Styles";
import {
  StyledCard,
  GreyTypography,
  StyledDivider,
} from "../../../styles/Styles";
// The code could be further modularized and separated, but since it is a small project it isn't a must

const Post = ({ post, onClick }) => {
  return (
    <StyledCard raised>
      <ButtonBase onClick={onClick}>
        <Grid container spacing={1} padding={1.5}>
          <Grid item container sx={{ direction: "row" }} xs={9}>
            <GreyTypography variant="body2">
              Created by: {post.userId}
            </GreyTypography>
            <Favorite
              fontSize="small"
              sx={{
                color: theme.palette.primary.main,
                marginLeft: "20px",
                marginRight: "5px",
              }}
            />
            <GreyTypography variant="body2">
              {post.reactions} {post.reactions === 1 ? "Like" : "Likes"}
            </GreyTypography>
          </Grid>
          <Grid item xs={3}>
            <GreyTypography variant="body2" textAlign="right">
              {" "}
              Post ID: {post.id}
            </GreyTypography>
          </Grid>

          <StyledDivider />

          <Grid item xs={12}>
            <Typography variant="h5" color={theme.palette.primary.main}>
              {post.title}
            </Typography>
          </Grid>

          <Grid item xs={12}>
            <Box>
              <GreyTypography variant="body2">
                Tags: {post.tags.map((tag) => `#${tag} `)}
              </GreyTypography>
            </Box>
          </Grid>

          <Grid item>
            <CardContent>
              <GreyTypography variant="body2">{post.body}</GreyTypography>
            </CardContent>
          </Grid>
        </Grid>
      </ButtonBase>
    </StyledCard>
  );
};

export default Post;
