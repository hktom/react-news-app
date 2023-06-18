import { Box, CircularProgress, Typography } from "@mui/material";

function SimpleLoading() {
  return (
    <Box sx={{ display: "flex" }}>
      <CircularProgress size={25} sx={{ mr: 2 }} />{" "}
      <Typography component="span" sx={{ fontSize: "0.9rem" }}>
        Loading...
      </Typography>
    </Box>
  );
}

export default SimpleLoading;
