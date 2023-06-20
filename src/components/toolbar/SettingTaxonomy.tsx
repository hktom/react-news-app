import { fetchData } from "@/helpers/fetchData";
import { startCategories } from "@/helpers/startCategories";
import { apolloMutation, apolloQuery } from "@/utils/apollo";
import { useAppDispatch } from "@/utils/hooks";
import { ITaxonomy } from "@/utils/interface";
import { Box, Button, CircularProgress, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import slug from "slug";

interface IProps {
  id: string;
  title: string;
  description?: string;
}

function SettingTaxonomy(props: IProps) {
  const [data, setData] = useState<ITaxonomy[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const deleteTaxonomy = async (id: string) => {
    setLoading(true);
    try {
      let query = `mutation {
        deleteTaxonomy(id:"${id}"){
          id
        }
      }`;

      const res = await apolloMutation(query);
      if (res?.data?.deleteTaxonomy?.id) {
        setData([...data.filter((item: ITaxonomy) => item.id !== id)]);
      }
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  const getData = async () => {
    setLoading(true);
    try {
      let query: string = `{
        getUserTaxonomies(key:"${props.id}"){
          id
          name
          type
        }
      }`;

      const res = await apolloQuery(query);
      if (res?.data?.getUserTaxonomies) {
        setData(res?.data?.getUserTaxonomies);
      }
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Box sx={{ position: "relative", pb: 5 }}>
      {loading && (
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            backgroundColor: "rgba(255,255,255,0.5)",
            zIndex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "100%",
          }}
        >
          <CircularProgress size={25} />
        </Box>
      )}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Typography
          variant="h6"
          sx={{ fontWeight: 700, mb: 2, textAlign: "center" }}
        >
          {props.title}
        </Typography>

        <Typography
          variant="body1"
          component="p"
          sx={{ textAlign: "center", px: 2, mb: 3 }}
        >
          {props.description}
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {data.map((item, index) => (
            <Button
              key={index}
              variant="outlined"
              onClick={() => {
                deleteTaxonomy(item.id!);
              }}
              sx={{
                mx: 1,
                my: 1,
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                px: 2,
                py: 1,
              }}
              size="medium"
              endIcon={<DeleteIcon />}
            >
              {item.name}
            </Button>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

export default SettingTaxonomy;
