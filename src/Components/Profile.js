import { Box } from "@mui/system";
import { Typography } from "@mui/material";
export function Profile({ image }) {
  return (
    <Box variant="div">
      <Box component="header" sx={{ display: "flex", ml: "10%", mr: "10%" }}>
        <Box component="div" sx={{ flexGrow: "1", flexBasis: "0", mr: "15%" }}>
          <img
            src={image}
            alt="profile"
            width="100%"
            height="auto"
            style={{ borderRadius: "60px" }}
          />
        </Box>
        <Box component="section" sx={{ pl: "0%", flexGrow: "2" }}>
          <Typography variant="h4">This is akhilesh singh bhadauria</Typography>
        </Box>
      </Box>
    </Box>
  );
}
