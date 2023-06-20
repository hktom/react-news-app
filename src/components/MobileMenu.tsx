import { Box } from "@mui/material";
import MenuList from "./MenuList";

function MobileMenu() {
  return (
    <Box>
      <MenuList open={true} />
    </Box>
  );
}

export default MobileMenu;
