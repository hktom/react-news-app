// import { authAction } from "@/redux/authReducer";
import { fetchData } from "@/helpers/fetchData";
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
import { useState } from "react";

const fields: ITextField[] = [
  {
    id: "name",
    label: "Name",
    required: true,
    type: "text",
    defaultValue: "name",
  },
  {
    id: "email",
    label: "Email",
    required: true,
    disabled: true,
    defaultValue: "email",
    type: "text",
  },
];

function SettingUser() {
  const dispatch = useAppDispatch();
  const state = useAppSelector((state: IReducer) => state.user);
  const [loading, setLoading] = useState<boolean>(false);
  const [name, SetName] = useState(state.user?.name);

  const onSubmit = async () => {
    setLoading(true);
    try {
      await apolloMutation(`mutation{
        updateUser(id:"${state.user?.id}", name:"${name}"){
              id
              name
              email
            }
          }`);

      await fetchData(dispatch);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box>
      <Typography variant="body1" sx={{ textAlign: "center", my: 3 }}>
        {state.user?.name}
      </Typography>

      <Box
        component="form"
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit();
        }}
        sx={{ my: 3 }}
      >
        {fields.map((item, index) => (
          <TextField
            key={index}
            {...item}
            sx={{ width: "100%", mb: 2 }}
            disabled={loading || item.disabled}
            defaultValue={
              item.defaultValue == "name" ? state.user?.name : state.user?.email
            }
            onChange={(e) => {
              if (item.id == "name") {
                SetName(e.target.value);
              }
            }}
            required
          />
        ))}

        <Button
          variant="contained"
          type="submit"
          sx={{ width: "100%", py: 2 }}
          disabled={loading}
        >
          Updates
          {loading && (
            <CircularProgress sx={{ color: "#fff", mx: 2 }} size={25} />
          )}
        </Button>
      </Box>
    </Box>
  );
}

export default SettingUser;
