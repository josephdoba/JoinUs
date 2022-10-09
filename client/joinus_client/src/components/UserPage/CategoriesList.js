import React, { useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";



export default function CategoriesList(props) {
  // console.log("props from CategoriesList:")
  // console.log(props)
  // console.log(props.categories)
  
  const [category, setCategory] = useState("");
  // const { categoriesData } = props;

  const handleChange = (event) => {
    console.log(event)
    setCategory(event.target.value);
  };

  /*
   categoriesData.map is causing a crash when the form renders: 

Uncaught TypeError: Cannot read properties of undefined (reading 'map')
  
   why isn't categoriesData showing up here now?
   */
  const categories = props.categories?.map((category) => {
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
          value={props.category}
          label="Category"
          onChange={(event) => props.onChange(event)}
        >
          {categories}
        </Select>
      </FormControl>
    </Box>
  );
}
