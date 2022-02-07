import * as React from "react";
import Card from "@mui/material/Card";
import { Box } from "@mui/system";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, IconButton } from "@mui/material";
import ArrowDownwardOutlinedIcon from "@mui/icons-material/ArrowDownwardOutlined";
import ArrowUpwardOutlinedIcon from "@mui/icons-material/ArrowUpwardOutlined";
import ModeCommentOutlinedIcon from "@mui/icons-material/ModeCommentOutlined";
import { CardActions } from "@mui/material";
import "./App.css";
import image from "./tempimages/1116286.jpg";
export default function Post() {
  return (
    <Card
      sx={{
        maxWidth: "50%",
        ml: "25%",
        mt: "2%",
        border: "15px",
        borderColor: "red",
      }}
    >
      <CardActionArea sx={{ backgroundColor: "#d7d3ce" }}>
        <CardMedia
          component="img"
          image={image}
          height="400"
          alt="green iguana"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions
        sx={{
          backgroundColor: "#d7d3ce",
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <Box>
          <IconButton>
            <ArrowUpwardOutlinedIcon fontSize="large" />
          </IconButton>
          <IconButton>
            <ArrowDownwardOutlinedIcon fontSize="large" />
          </IconButton>
        </Box>
        <Box>
          <IconButton>
            <ModeCommentOutlinedIcon fontSize="large" />
          </IconButton>
        </Box>
      </CardActions>
    </Card>
  );
}
