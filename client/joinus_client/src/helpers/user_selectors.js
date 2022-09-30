export function findUserByID(id, usersData) {
  return usersData.find((user) => user.id === id);
}
