import { MainMenu, TaxonomiesMenu } from "@/helpers/leftMenu";
import { List, Box, Typography } from "@mui/material";
import MenuListItem from "./MenuListItem";

interface IProps {
  open: boolean;
}

function MenuList(props: IProps) {
  return (
    <>
      <List>
        {MainMenu.map((item, index) => (
          <MenuListItem key={index} {...item} open={props.open} />
        ))}
      </List>

      <List>
        <Box sx={{ opacity: props.open ? 1 : 0 }}>
          <Typography
            variant="body1"
            component="div"
            sx={{ px: 2.5, mt: 2, mb: 1 }}
          >
            Feeds by
          </Typography>
        </Box>
        {TaxonomiesMenu.map((item, index) => (
          <MenuListItem key={index} {...item} open={props.open} />
        ))}
      </List>
    </>
  );
}

export default MenuList;
