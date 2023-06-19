import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";
import { useRouter } from "next/router";
import { ILeftMenu } from "@/helpers/leftMenu";

export default function MenuListItem(props: ILeftMenu) {
  const { open, icon, name, slug } = props;
  const router = useRouter();
  return (
    <ListItem
      disablePadding
      sx={{ display: "block" }}
      onClick={() => router.push(slug)}
    >
      <ListItemButton
        sx={{
          minHeight: 10,
          justifyContent: open ? "initial" : "center",
          px: 2.5,
        }}
      >
        <ListItemIcon
          sx={{
            minWidth: 0,
            mr: open ? 2 : "auto",
            justifyContent: "center",
          }}
        >
          {icon ?? <FolderOpenIcon />}
        </ListItemIcon>
        <ListItemText primary={name} sx={{ opacity: open ? 1 : 0 }} />
      </ListItemButton>
    </ListItem>
  );
}
