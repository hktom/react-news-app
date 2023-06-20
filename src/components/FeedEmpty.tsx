import { fetchData } from "@/helpers/fetchData";
import { startCategories } from "@/helpers/startCategories";
import { apolloMutation } from "@/utils/apollo";
import { useAppDispatch } from "@/utils/hooks";
import { Box, Button, CircularProgress, Typography } from "@mui/material";
import { useState } from "react";
import slug from "slug";

function FeedEmpty() {
  const [categories, setCategories] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  const toggleCategory = (category: string) => {
    if (categories.includes(category)) {
      setCategories(categories.filter((c) => c !== category));
    } else {
      setCategories([...categories, category]);
    }
  };

  const buttonVariant = (category: string): "contained" | "outlined" => {
    return categories.includes(category) ? "contained" : "outlined";
  };

  const saveCategories = async () => {
    setLoading(true);
    let query = `mutation {
        settingUpsert(input:{feed_by:"category"}){
            id
          }
        `;
    categories.forEach((category: any) => {
      let key = category.replaceAll(/[^a-zA-Z ]/g, "").replaceAll(" ", "");

      query += `
        ${key}:taxonomyUpsert(input:{
            name:"${category}",
            slug:"${slug(category)}",
            type:"category"
          }){
            name
            slug
            type
          }`;
    });
    query += `}`;

    const res = await apolloMutation(query);
    if (res?.data?.settingUpsert?.id) {
      fetchData(dispatch);
    }

    setLoading(false);
  };
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        minHeight: "50rem",
        my: 10,
      }}
    >
      <Typography
        variant="h4"
        sx={{ fontWeight: 700, mb: 2, textAlign: "center" }}
      >
        Your feed is currently empty
      </Typography>

      <Typography
        variant="body1"
        component="p"
        sx={{ textAlign: "center", px: 2, mb: 3 }}
      >
        Your feed is currently empty. To get started, please select some
        categories that interest you. This will help us curate content that is
        tailored to your preferences and display it in your feed.
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {startCategories.map((category, index) => (
          <Button
            key={index}
            variant={buttonVariant(category)}
            onClick={() => toggleCategory(category)}
            sx={{ mx: 1, my: 1 }}
            size="small"
          >
            {category}
          </Button>
        ))}
      </Box>

      <Button
        variant="contained"
        disableElevation
        sx={{ px: 4, mt: 5, py: 1, width: "70%", color: "#fff" }}
        disabled={categories.length === 0 || loading}
        onClick={() => saveCategories()}
      >
        Save{" "}
        {loading && (
          <CircularProgress size={20} color="inherit" sx={{ mx: 2 }} />
        )}
      </Button>
    </Box>
  );
}

export default FeedEmpty;
