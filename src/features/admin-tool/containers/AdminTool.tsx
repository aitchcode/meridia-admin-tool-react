import { Divider, Grid } from "@mui/material";
import colors from "core/constants/color";
import { BasicStationSettings } from "features/admin-tool/components/BasicStationSettings";
import { MyVote } from "features/admin-tool/components/MyVote";
import { BaseConnection } from "features/admin-tool/components/BaseConnection";

const AdminTool = () => (
  <div>
    <Grid container>
      <Grid item xs={12} md={6} lg={7} sx={styles.myVoteGrid}>
        <MyVote />
      </Grid>
      <Grid item xs={12} sx={styles.divider}>
        <Divider />
      </Grid>
      <Grid item xs={12} md={6} lg={5} sx={styles.settingsGrid}>
        <BasicStationSettings />
        <BaseConnection />
      </Grid>
    </Grid>
  </div>
);

const styles = {
  myVoteGrid: {
    py: { xs: 0, md: 2 },
    px: { xs: 0, md: 3 },
    my: 2,
  },
  settingsGrid: {
    borderLeft: { xs: "none", md: `0.078rem solid ${colors.lightGrey}` },
    py: { xs: 0, md: 2 },
    px: { xs: 0, md: 3 },
    my: 2,
  },
  divider: {
    display: { xs: "block", md: "none" },
    backgroundColor: `${colors.lightGrey}`,
    my: 2,
  },
};

export default AdminTool;
