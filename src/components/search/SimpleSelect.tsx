import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { ITaxonomy } from "@/utils/interface";

interface IProps {
  title: string;
  options: ITaxonomy[];
  onChange: (value: string) => void;
  defaultValue?: string;
}

export default function SimpleSelect(props: IProps) {
  const [value, setValue] = React.useState(props.defaultValue || "");

  const handleChange = (event: SelectChangeEvent) => {
    setValue(event.target.value as string);
    props.onChange(event.target.value as string);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <FormControl fullWidth>
        <InputLabel
          id="demo-simple-select-label"
          sx={{ backgroundColor: "#fff" }}
        >
          {props.title}
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={value}
          label={props.title}
          onChange={handleChange}
        >
          {props.options.map((item, index) => (
            <MenuItem key={index} value={item.id}>
              {item.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
