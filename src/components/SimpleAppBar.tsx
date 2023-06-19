import { Box } from "@mui/material";

function SimpleAppBar() {
  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        lef: 0,
        height: 60,
        width: "100%",
        zIndex: 1,
        p: 3,
        backgroundColor: "#fff",
        borderBottom: "1px solid #e0e0e0",
      }}
    >
      <Box sx={{ maxWidth: "75rem", mx: "auto" }}>s</Box>
    </Box>
  );
}

export default SimpleAppBar;
