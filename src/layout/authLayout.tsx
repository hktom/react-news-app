import { Box, Typography } from "@mui/material";

interface IProps {
  title: string;
  description: string;
  image: string;
  children: React.ReactNode;
}

function AuthLayout(props: IProps) {
  return (
    <div>
      <Box sx={{ minHeight: "100vh", display: "flex" }}>
        <Box
          sx={{
            width: { md: "50%", xs: "100%" },
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box sx={{ maxWidth: { md: "28rem", xs: "90%" }, margin: "auto" }}>
            <Typography variant="h2" sx={{ textAlign: "center", my: 3 }}>
              {props.title}
            </Typography>

            <Typography variant="body1" sx={{ textAlign: "center", my: 3 }}>
              {props.description}
            </Typography>

            {props.children}
          </Box>
        </Box>
        <Box
          sx={{
            width: "50%",
            height: "97vh",
            backgroundImage: `url(/${props.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: { md: "block", xs: "none" },
          }}
        ></Box>
      </Box>
    </div>
  );
}

export default AuthLayout;
