import { Box, Grid, Paper, Typography } from "@mui/material";

const AlbumCard = () => {
  return (
    <Grid item xs={3}>
      <Paper elevation={20}>
        <img
          src="https://upload.wikimedia.org/wikipedia/en/6/6e/Taylor_Swift_%E2%80%93_The_Tortured_Poets_Department_%28album_cover%29.png"
          alt="TTPD"
          className="albumcover"
        />
      </Paper>
      <Box padding={1}>
        <Typography variant="h6" component="h2">
          The Tortured Poets Department
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          Taylor Swift
        </Typography>
        <Typography variant="body2" color="text.secondary">
          2024
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
        }}>
        <Typography variant="body2" component="p">
          5 hours
        </Typography>
      </Box>
    </Grid>
  );
};

export default AlbumCard;
