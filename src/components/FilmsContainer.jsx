import { useEffect, useState } from "react";
import { fetchFilms } from "../services/api";
import FilmCard from "./FilmCard";
import { Container, Grid, Typography } from "@mui/material";
import "../App.css";

const FilmsContainer = () => {
  const [films, setFilms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getFilms = async () => {
      try {
        const films = await fetchFilms();
        setFilms(films.results);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    getFilms();
  });

  if (loading) {
    return (
      <p>I feel a great disturbance in the Force... Something is loading!</p>
    );
  }
  if (error) {
    return (
      <>
        <p>
          &quot;The Dark Side clouds everything. Impossible to see the API
          is.&quot; - Yoda (probably)
        </p>
        <p>Error: {error.message}</p>
      </>
    );
  }

  return (
    <div className="app">
      <Container>
        <Typography variant="h3" color="white">
          Star Wars films
        </Typography>
        <Grid container spacing={5}>
          {films.map((film) => (
            <FilmCard
              key={film}
              title={film.title}
              episodeId={film.episode_id}
              openingCrawl={film.opening_crawl}
              releaseDate={film.release_date}
            />
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default FilmsContainer;
