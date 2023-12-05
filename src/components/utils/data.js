const Saerch = (data, term) => {
  if (term.length === 0) {
    return data;
  }
  return data.filter((item) =>
    item.name.toLowerCase().includes(term.toLowerCase())
  );
};
const filterhandle = (arr, filter) => {
  switch (filter) {
    case "papular":
      return arr.filter((c) => c.like);
    case "mostviewers":
      return arr.filter((c) => c.viewers > 700);
    default:
      return arr;
  }
};
export { Saerch, filterhandle };
