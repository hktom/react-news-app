import { Box, Button, CircularProgress, Typography } from "@mui/material";
import SimpleSelect from "../search/SimpleSelect";
import { apolloMutation } from "@/utils/apollo";
import { ITaxonomy } from "@/utils/interface";
import { useState } from "react";
import { useAppSelector } from "@/utils/hooks";
import { IReducer } from "@/utils/rootReducer";

function SettingFeed() {
  const [loading, setLoading] = useState<boolean>(false);
  const [feedBy, setFeedBy] = useState<string>("");
  const state = useAppSelector((state: IReducer) => state.setting);

  const changeSetting = async () => {
    setLoading(true);
    // dark_mode:1,
    try {
      let query = `mutation{
        settingUpsert(input:{
          feed_by:"${feedBy}",
        }){
          id
          feed_by
        }
      }`;

      await apolloMutation(query);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };
  return (
    <Box sx={{ pb: 5 }}>
      <Typography
        variant="h6"
        sx={{ fontWeight: 700, mb: 2, textAlign: "center" }}
      >
        Filter your feed by
      </Typography>

      <Box>
        <SimpleSelect
          title="Sources"
          options={[]}
          onChange={(value) => {
            console.log(value);
          }}
        />
        {/* <SimpleSelect title="Theme" options={[]} onChange={(value) => {}} /> */}
      </Box>

      <Button
        variant="contained"
        disableElevation
        sx={{ px: 4, mt: 1, py: 1, width: "100%", color: "#fff" }}
        disabled={loading}
        onClick={() => changeSetting()}
      >
        Save{" "}
        {loading && (
          <CircularProgress size={20} color="inherit" sx={{ mx: 2 }} />
        )}
      </Button>
    </Box>
  );
}

export default SettingFeed;
