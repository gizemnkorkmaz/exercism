export const gigasecond = (input) => {
  const gigaMillieseconds = Math.pow(10, 12);

  const date = new Date(input.getTime());

  const dateInMillieseconds = date.getTime() + gigaMillieseconds;

  return new Date(dateInMillieseconds);
};
