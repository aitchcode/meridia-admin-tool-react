import { Box, Typography, Button, Grid } from "@mui/material";

export const MyVote = () => (
  <Box display="flex" flexDirection="column">
    <Typography>My Vote</Typography>
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <Button fullWidth color="secondary" variant="contained" sx={styles.btn}>
          Start Test
        </Button>
      </Grid>
      <Grid item xs={6}>
        <Button fullWidth color="secondary" variant="contained" sx={styles.btn}>
          End Test
        </Button>
      </Grid>
    </Grid>
  </Box>
);

const styles = {
  btn: {
    textTransform: "none",
  },
};
