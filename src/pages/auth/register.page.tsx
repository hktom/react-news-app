import AuthLayout from "@/layout/authLayout";
import { authAction } from "@/redux/authReducer";
import { apolloMutation, apolloQuery } from "@/utils/apollo";
import { useAppDispatch, useAppSelector } from "@/utils/hooks";
import { ITextField } from "@/utils/interface";
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

type FormData = any;

const fields: ITextField[] = [
  {
    id: "name",
    label: "Name",
    required: true,
    type: "text",
  },
  {
    id: "email",
    label: "Email",
    required: true,
    type: "text",
  },
  {
    id: "password",
    label: "Password",
    required: true,
    type: "password",
  },
  {
    id: "confirm_password",
    label: "Confirm Password",
    required: true,
    type: "password",
  },
];

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

    const res = await apolloMutation(`mutation{
      signUp(name:"${data.name}", email:"${data.email}", password:"${data.password}", confirm_password:"${data.confirm_password}"){
        error
        token
        status
      }
    }`);

    dispatch(
      authAction.auth({
        loading: false,
        error: res.data?.signUp?.error,
        token: res.data?.signUp?.token,
        status: res.data?.signUp?.status,
      })
    );

    if (res.data?.signUp?.token) {
      Cookies.set("token", res.data?.signUp?.token);
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
    <AuthLayout
      title="Sign Up to Talula"
      description="to get access to all the features"
      image="signup.jpeg"
    >
      <>
        {displayAlert()}

        <Box component="form" onSubmit={onSubmit} sx={{ my: 3 }}>
          {fields.map((item, index) => (
            <TextField
              key={index}
              {...item}
              sx={{ width: "100%", mb: 2 }}
              disabled={state.auth?.loading}
              {...register(item.id, { required: item.required })}
              required
            />
          ))}

          <Button
            variant="contained"
            type="submit"
            sx={{ width: "100%", py: 2 }}
            disabled={state.auth?.loading}
          >
            Signup
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
      </>
    </AuthLayout>
  );
}

export default Register;
