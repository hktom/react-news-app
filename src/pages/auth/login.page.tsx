import { authAction } from "@/redux/authReducer";
import { apolloMutation, apolloQuery } from "@/utils/apollo";
import { useAppDispatch, useAppSelector } from "@/utils/hooks";
import { IReducer } from "@/utils/rootReducer";
import {
  Alert,
  Box,
  Button,
  CircularProgress,
  TextField,
  Typography,
} from "@mui/material";
import Cookies from "js-cookie";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";

type FormData = {
  email: string;
  password: string;
};

function Login() {
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const state = useAppSelector((state: IReducer) => state.auth);
  const dispatch = useAppDispatch();

  const onSubmit = handleSubmit(async (data) => {
    dispatch(
      authAction.auth({
        loading: true,
      })
    );
    const res = await apolloMutation(`
    mutation{
        signIn(email:"${data.email}", password:"${data.password}}"){
          error
          token
          status
        }
      }
    `);

    dispatch(
      authAction.auth({
        loading: false,
        error:
          res.data?.signIn?.error ??
          "Sorry, we couldn't find an account with that email and password. Please try again.",
        token: res.data?.signIn?.token,
        status: res.data?.signIn?.status,
      })
    );

    if (res.data?.signIn?.token) {
      Cookies.set("token", res.data?.signIn?.token);
      window.location.href = "/me";
    }
  });

  const displayAlert = () => {
    if (state.auth?.error) {
      return <Alert severity="error">{state.auth.error}</Alert>;
    }

    if (state.auth?.token) {
      return <Alert severity="success">Login Successful</Alert>;
    }
  };

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
          <Box sx={{ width: "54%", margin: "auto" }}>
            <Typography variant="h2" sx={{ textAlign: "center", my: 3 }}>
              Welcome to Talula
            </Typography>

            <Typography variant="body1" sx={{ textAlign: "center", my: 3 }}>
              Our platform collects articles from newspapers, blogs, and other
              news websites, and organizes them into categories to make it easy
              for you to find the stories that interest you most.
            </Typography>

            {displayAlert()}

            <Box component="form" onSubmit={onSubmit} sx={{ my: 3 }}>
              <TextField
                id="email"
                label="email"
                type="email"
                sx={{ width: "100%" }}
                disabled={state.auth?.loading}
                {...register("email")}
                required
              />
              <TextField
                id="password"
                label="Password"
                type="password"
                sx={{ width: "100%", my: 2 }}
                disabled={state.auth?.loading}
                {...register("password")}
                required
              />
              <Button
                variant="contained"
                type="submit"
                sx={{ width: "100%", py: 2 }}
                disabled={state.auth?.loading}
              >
                Login{" "}
                {state.auth?.loading && (
                  <CircularProgress sx={{ color: "#fff", mx: 2 }} size={25} />
                )}
              </Button>

              <Link href="/auth/register" style={{ textDecoration: "none" }}>
                <Typography variant="body2" sx={{ textAlign: "center", my: 3 }}>
                  {"Don't have an account? Register here"}
                </Typography>
              </Link>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            width: "50%",
            height: "97vh",
            backgroundImage: "url(/login.jpeg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: { md: "block", xs: "none" },
          }}
        ></Box>
      </Box>
    </div>
  );
}

export default Login;
