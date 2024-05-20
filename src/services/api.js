export const fetchFilms = async () => {
  const response = await fetch("https://swapi.dev/api/films");
  if (!response.ok) {
    throw new Error("Failed to fetch films");
  }
  const data = await response.json();
  return data;
};
