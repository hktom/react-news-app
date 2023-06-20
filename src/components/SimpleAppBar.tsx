import { Box, IconButton } from "@mui/material";
import AppsIcon from "@mui/icons-material/Apps";
import { useAppDispatch } from "@/utils/hooks";

function SimpleAppBar() {
  const dispatch = useAppDispatch();
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
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
      }}
    >
      <Box
        sx={{
          maxWidth: "75rem",
          mx: "auto",
          width: "100%",
        }}
      >
        <IconButton
          onClick={() => {
            dispatch({ type: "dialog/toggle", payload: true });
            dispatch({ type: "dialog/changePage", payload: 6 });
          }}
          sx={{ display: { md: "none", xs: "block" } }}
        >
          <AppsIcon sx={{ fontSize: "2rem" }} />
        </IconButton>
      </Box>
    </Box>
  );
}

export default SimpleAppBar;
