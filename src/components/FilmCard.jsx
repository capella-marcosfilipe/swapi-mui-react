/* eslint-disable react/prop-types */
import { Box, Grid, Paper, Typography } from "@mui/material";
import clones from "../assets/clones.jpg";
import fantasma from "../assets/fantasma.jpg";
import imperio from "../assets/imperio.jpg";
import novaEsperanca from "../assets/nova_esperanca.jpg";
import retornoJedi from "../assets/retorno_jedi.jpg";
import vingancaSith from "../assets/vinganca_sith.jpg";

const FilmCard = ({ title, episodeId, openingCrawl, releaseDate }) => {
  const pickPoster = (episodeId) => {
    switch (episodeId) {
      case 1:
        return fantasma;
      case 2:
        return clones;
      case 3:
        return vingancaSith;
      case 4:
        return novaEsperanca;
      case 5:
        return imperio;
      case 6:
        return retornoJedi;
    }
  };

  return (
    <Grid item xs={4}>
      <Paper elevation={20}>
        <img className="poster" src={pickPoster(episodeId)} alt={episodeId} />
        <Box padding={1}>
          <Typography variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="subtitle1" component="h3">
            Episode {episodeId}
          </Typography>
          <Typography variant="subtitle2" component="span">
            {releaseDate}
          </Typography>
          <Typography variant="body1" component="p">
            {openingCrawl}
          </Typography>
        </Box>
      </Paper>
    </Grid>
  );
};

export default FilmCard;
