import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, IconButton } from "@mui/material";
import ArrowDownwardOutlinedIcon from "@mui/icons-material/ArrowDownwardOutlined";
import ArrowUpwardOutlinedIcon from "@mui/icons-material/ArrowUpwardOutlined";
import ModeCommentOutlinedIcon from "@mui/icons-material/ModeCommentOutlined";
import { CardActions } from "@mui/material";
import "./App.css";
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
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions sx={{ backgroundColor: "#121212" }}>
        <IconButton className={"icon"}>
          <ArrowUpwardOutlinedIcon />
        </IconButton>
        <IconButton sx={{ ml: "2%" }} className={"icon"}>
          <ArrowDownwardOutlinedIcon />
        </IconButton>
        <IconButton sx={{ ml: "5%" }} className={"icon"}>
          <ModeCommentOutlinedIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
