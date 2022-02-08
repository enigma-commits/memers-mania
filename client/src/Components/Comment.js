import React from "react";
import { Box } from "@mui/system";
import Typography from "@mui/material/Typography";
import { Avatar } from "@mui/material";
export const Comment = (props) => {
  return (
    <Box component="div">
      <Box
        sx={{
          color: "white",
          display: "flex",
          minHeight: "10vh",
          pt: "2%",
          pl: "2%",
          mt: "2%",
          ml: "10%",
          mr: "10%",
          bgcolor: "#1a1a1b",
        }}
      >
        <Box>
          <Box
            sx={{
              mr: "10px",
              ml: "15px",
              pb: "15px",
            }}
          >
            <Box sx={{ display: "flex", flexWrap: "wrap" }}>
              <Box sx={{ pr: "10px" }}>
                <Avatar sx={{ bgcolor: "deepOrange[500]" }}>U</Avatar>
              </Box>
              <Typography variant="h5">User</Typography>
            </Box>
            <Box
              sx={{ mt: "15px", pl: "15px", display: "flex", flexWrap: "wrap" }}
            >
              <Typography variant="p">
                Hello this is my comment
                ajsdalfksdjflkasdjf;lksdjf;alksdjf;askldfjasd;lkfjs;dlkfajsd;fkljasd;flkrwerqwerqwer
                afkjsd;flkajsd;fkjadf;lksdjaf;klsdjf
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
