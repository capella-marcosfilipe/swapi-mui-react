export const fetchFilms = async () => {
  const response = await fetch("https://swapi.dev/api/films");
  if (!response.ok) {
    throw new Error("The force is weak with this API.");
  }
  const data = await response.json();
  return data;
};
