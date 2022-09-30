export function findCategoryByID(categoryNum, categoryData) {
  return categoryData.find((category) => category.id === categoryNum);
}
