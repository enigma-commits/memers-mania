import { Box } from "@mui/system";
import { IconButton, Typography, Divider, Grid } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import UserPost from "./UserPost";
export function Profile({ image }) {
  return (
    <Box
      variant="div"
      sx={{
        ml: "25%",
        mr: "25%",
        mt: "1%",
        pt: "1%",
        pb: "5%",
        backgroundColor: "#242424",
      }}
    >
      <Box
        component="header"
        sx={{ display: "flex", mt: "5%", ml: "10%", mr: "0%", mb: "4%" }}
      >
        <Box component="div" sx={{ flexGrow: "1", flexBasis: "0%", mr: "15%" }}>
          <img
            src={image}
            alt="profile"
            width="150px"
            height="150px"
            style={{ borderRadius: "75px" }}
          />
        </Box>
        <Box component="section" sx={{ pl: "0%", flexGrow: "2" }}>
          <Typography variant="h4" sx={{ color: "#e6ebe7" }}>
            This is akhilesh singh bhadauria
          </Typography>
        </Box>
        <Box>
          <IconButton>
            <LogoutIcon fontSize="large" sx={{ color: "#e6ebe7" }} />
          </IconButton>
        </Box>
      </Box>
      <Divider sx={{ backgroundColor: "#e6ebe7" }} />
      <Box>
        <Grid container columnGap={3} rowGap={2} sx={{ mt: "3%", ml: "15%" }}>
          <Grid item xs={4}>
            <UserPost />
          </Grid>
          <Grid item xs={4}>
            <UserPost />
          </Grid>
          <Grid item xs={4}>
            <UserPost />
          </Grid>
          <Grid item xs={4}>
            <UserPost />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
