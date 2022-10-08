import { Button } from "@mui/material";

// if there is a selected category, a button to clear the chips appear
const ClearCategories = ({ selectedCategory, setSelectedCategory }) => {
  if (selectedCategory.length >= 1) {
    return (
      <Button
        variant="text"
        size="small"
        onClick={() => setSelectedCategory([])}
      >
        Clear
      </Button>
    );
  }
};

export default ClearCategories;
