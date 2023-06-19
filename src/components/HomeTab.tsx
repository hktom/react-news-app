import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useAppDispatch, useAppSelector } from "@/utils/hooks";
import { IReducer } from "@/utils/rootReducer";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

interface IProps {
  page1: React.ReactNode;
  page2: React.ReactNode;
}

export default function HomeTab(props: IProps) {
  const state = useAppSelector((state: IReducer) => state.menu);
  const dispatch = useAppDispatch();

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    dispatch({ type: "menu/changeHomeTab", payload: newValue });
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={state.home_tab}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Me" {...a11yProps(0)} />
          <Tab label="Explore" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel value={state.home_tab} index={0}>
        {props.page1}
      </TabPanel>
      <TabPanel value={state.home_tab} index={1}>
        {props.page2}
      </TabPanel>
    </Box>
  );
}
