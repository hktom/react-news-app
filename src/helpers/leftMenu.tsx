import HomeIcon from "@mui/icons-material/Home";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

export interface ILeftMenu {
  slug: string;
  name: string;
  icon: React.ReactNode;
  open?: boolean;
  is_active?: boolean;
}

export const iconStyle: any = {
  fontSize: "1.2rem",
};

export const MainMenu: ILeftMenu[] = [
  {
    slug: "/me",
    name: "Today",
    icon: <HomeIcon sx={iconStyle} />,
  },
  {
    slug: "/me/read-later",
    name: "Read Later",
    icon: <AccessTimeIcon sx={iconStyle} />,
  },
  {
    slug: "/me/favorites",
    name: "Favorites",
    icon: <BookmarkBorderIcon sx={iconStyle} />,
  },
];

export const TaxonomiesMenu: ILeftMenu[] = [
  {
    slug: "/me/categories",
    name: "Categories",
    icon: <CheckCircleOutlineIcon sx={iconStyle} />,
  },
  {
    slug: "/me/sources",
    name: "Sources",
    icon: <CheckCircleOutlineIcon sx={iconStyle} />,
  },
  {
    slug: "/me/authors",
    name: "Authors",
    icon: <CheckCircleOutlineIcon sx={iconStyle} />,
  },
];
