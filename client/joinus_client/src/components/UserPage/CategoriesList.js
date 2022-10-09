import React, { useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import useAppData from "../../hooks/useAppData";

export default function CategoriesList(props) {
  const [category, setCategory] = useState("");

  const handleChange = (event) => {
    console.log(event)
    setCategory(event.target.value);
  };

  const { categoriesData } = props;

  const categories = categoriesData.map((category) => {
    return (
      <MenuItem value={category.id} key={category.id}>
        {category.name}
      </MenuItem>
    );
  });
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Category</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          name="label_eventCategory"
          value={category}
          label="Category"
          onChange={handleChange}
        >
          {categories}
        </Select>
      </FormControl>
    </Box>
  );
}
