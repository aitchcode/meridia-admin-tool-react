import { Grid } from "@mui/material";
import colors from "core/constants/color";
import { BasicStationSettings } from "features/admin-tool/components/BasicStationSettings";
import { MyVote } from "features/admin-tool/components/MyVote";

const AdminTool = () => (
  <div>
    <Grid container>
      <Grid item xs={3.75} sx={styles.gridWithBorder}>
        <BasicStationSettings />
      </Grid>
      <Grid item xs={4.5} sx={styles.gridWithBorder}>
        <MyVote />
      </Grid>
      <Grid item xs={3.75} sx={styles.grid}>
        xs=3.75
      </Grid>
    </Grid>
  </div>
);

const styles = {
  gridWithBorder: {
    height: "80vh",
    borderRight: `0.078rem solid ${colors.lightGrey}`,
    p: 2,
  },
  grid: {
    height: "80vh",
    p: 2,
  },
};

export default AdminTool;
