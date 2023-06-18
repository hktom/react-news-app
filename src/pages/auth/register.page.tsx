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
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";

type FormData = {
  name: string;
  email: string;
  password: string;
  confirm_password: string;
};

function Register() {
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
        signUp(name:"${data.name}", email:"${data.email}", password:"${data.password}, confirm_password:"${data.confirm_password}"){
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
          res.data?.signUp?.error &&
          "Sorry, be sure to fill all the fields. Please try again.",
        token: res.data?.signUp?.token,
        status: res.data?.signUp?.status,
      })
    );
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
              Sign Up to Talula
            </Typography>

            <Typography variant="body1" sx={{ textAlign: "center", my: 3 }}>
              to get access to all the features
            </Typography>

            {displayAlert()}

            <Box component="form" onSubmit={onSubmit} sx={{ my: 3 }}>
              <TextField
                id="name"
                label="name"
                type="text"
                sx={{ width: "100%", mb: 2 }}
                disabled={state.auth?.loading}
                {...register("email")}
                required
              />
              <TextField
                id="email"
                label="email"
                type="email"
                sx={{ width: "100%", mb: 2 }}
                disabled={state.auth?.loading}
                {...register("email")}
                required
              />
              <TextField
                id="password"
                label="Password"
                type="password"
                sx={{ width: "100%", mb: 2 }}
                disabled={state.auth?.loading}
                {...register("password")}
                required
              />
              <TextField
                id="confirm_password"
                label="confirm Password"
                type="password"
                sx={{ width: "100%", mb: 2 }}
                disabled={state.auth?.loading}
                {...register("confirm_password")}
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

              <Link href="/auth/login" style={{ textDecoration: "none" }}>
                <Typography variant="body2" sx={{ textAlign: "center", my: 3 }}>
                  {"Already have an account? Login"}
                </Typography>
              </Link>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            width: "50%",
            height: "97vh",
            backgroundImage: "url(/signup.jpeg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: { md: "block", xs: "none" },
          }}
        ></Box>
      </Box>
    </div>
  );
}

export default Register;
