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
      <CardActionArea sx={{ backgroundColor: "#1a1a1b" }}>
        <CardMedia
          component="img"
          image={image}
          height="400"
          alt="green iguana"
        />
        <CardContent>
          <Typography variant="body2" color="#d7dadc">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions
        sx={{
          backgroundColor: "#1a1a1b",
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <Box>
          <IconButton>
            <ArrowUpwardOutlinedIcon
              fontSize="large"
              sx={{ color: "#7f8182" }}
            />
          </IconButton>
          <IconButton>
            <ArrowDownwardOutlinedIcon
              fontSize="large"
              sx={{ color: "#7f8182" }}
            />
          </IconButton>
        </Box>
        <Box>
          <IconButton>
            <ModeCommentOutlinedIcon
              fontSize="large"
              sx={{ color: "#7f8182" }}
            />
          </IconButton>
        </Box>
      </CardActions>
    </Card>
  );
}
