import { Box, Typography, Button, Grid, Paper, Divider } from "@mui/material";
import { styles as extStyles } from "features/admin-tool/components/BasicStationSettings";
import { ConnectedBaseTable } from "features/admin-tool/components/ConnectedBaseTable";
import { identity } from "lodash";

const N = 500;

export const MyVote = () => {
  const arr = Array.from(Array(N).keys());

  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Typography variant="h5" mb={2}>
        My Vote
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <ConnectedBaseTable />
        </Grid>
        <Grid item xs={12}>
          <Divider sx={{ my: 2 }} />
        </Grid>
        <Grid
          container
          item
          xs={12}
          spacing={1}
          height="26.4rem"
          overflow="auto"
          my={2}
          p={1}
        >
          {arr.map((index) => (
            <Grid item xs={1.2} key={identity(`remote-${index + 1}`)}>
              <Paper square sx={styles.paper}>
                <Typography variant="body2">{index + 1}</Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
        <Grid item xs={2} sx={styles.grid}></Grid>
        <Grid item xs={6} lg={4}>
          <Button
            fullWidth
            color="secondary"
            variant="contained"
            sx={extStyles.btn}
          >
            Start Test
          </Button>
        </Grid>
        <Grid item xs={6} lg={4}>
          <Button
            fullWidth
            color="secondary"
            variant="contained"
            sx={extStyles.btn}
          >
            End Test
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export const MyVoteSubComp = ({
  boldText,
  normalText,
}: {
  boldText: string;
  normalText: string;
}) => (
  <Grid item xs={6}>
    <Box display="flex">
      <Typography fontWeight="bold" variant="body2">
        {boldText}&emsp;
      </Typography>
      <Typography variant="body2">{normalText}</Typography>
    </Box>
  </Grid>
);

export const styles = {
  paper: {
    height: "2rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  grid: {
    display: { xs: "none", lg: "block" },
  },
};
