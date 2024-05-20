/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import Grid from "@mui/material/Grid";

import { useState } from "react";

import clones from "../assets/clones.jpg";
import fantasma from "../assets/fantasma.jpg";
import imperio from "../assets/imperio.jpg";
import novaEsperanca from "../assets/nova_esperanca.jpg";
import retornoJedi from "../assets/retorno_jedi.jpg";
import vingancaSith from "../assets/vinganca_sith.jpg";

const ExpandMore = styled((props) => {
  // eslint-disable-next-line no-unused-vars
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

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

  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Grid item xs={4}>
      <Card>
        <CardMedia component="img" image={pickPoster(episodeId)} alt={title} />
        <CardContent>
          <Typography variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="subtitle1" component="h3">
            Episode {episodeId}
          </Typography>
          <Typography variant="subtitle2" component="span">
            {releaseDate}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more">
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography variant="body1" component="p">
              {openingCrawl}
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    </Grid>
  );
};

export default FilmCard;
