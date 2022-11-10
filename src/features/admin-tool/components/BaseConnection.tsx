import {
  Box,
  Select,
  Typography,
  Grid,
  Button,
  Divider,
  FormControl,
  InputLabel,
  MenuItem,
} from "@mui/material";
import colors from "core/constants/color";
import { MatchModes } from "core/constants/enum";
import { identity } from "lodash";
import { styles as extStyles } from "features/admin-tool/components/BasicStationSettings";

export const BaseConnection = () => (
  <Box display="flex" flexDirection="column" alignItems="center">
    <Typography mt={1} mb={2} variant="h6" sx={extStyles.underlinedText}>
      Base Connection
    </Typography>
    <Grid container spacing={2}>
      <BaseConnectionSubComp boldText="Status" normalText="Disconnected" />
      <BaseConnectionSubComp boldText="Firmware" normalText="0.0.0" />
      <Grid item xs={6}>
        <Button fullWidth variant="contained" sx={styles.connectBtn}>
          Connect
        </Button>
      </Grid>
      <Grid item xs={6}>
        <Button fullWidth variant="contained" sx={styles.disconnectBtn}>
          Disconnect
        </Button>
      </Grid>
      <Grid item xs={12}>
        <Divider sx={{ my: 1 }} />
      </Grid>
      <Grid item xs={12}>
        <Box mb={2}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <FormControl fullWidth size="small">
                <InputLabel id="match-mode-label">Match Mode</InputLabel>
                <Select
                  labelId="match-mode-label"
                  id="match-mode"
                  label="Match Mode"
                  value={0}
                >
                  {Object.keys(MatchModes).map((matchMode, index) => (
                    <MenuItem
                      key={identity(`matchMode-${index}`)}
                      value={index}
                      sx={extStyles.menuItem}
                    >
                      {MatchModes[matchMode as keyof typeof MatchModes]}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={2}></Grid>
            <Grid
              item
              xs={4}
              display="flex"
              flexDirection="column"
              justifyContent={"center"}
            >
              <Button
                fullWidth
                variant="contained"
                size="small"
                sx={extStyles.btn}
              >
                Set
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Grid>
      <Grid item xs={6}>
        <Button fullWidth variant="contained" sx={styles.connectBtn}>
          Start
        </Button>
      </Grid>
      <Grid item xs={6}>
        <Button fullWidth variant="contained" sx={extStyles.btn}>
          Stop
        </Button>
      </Grid>
    </Grid>
  </Box>
);

const BaseConnectionSubComp = ({
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

const styles = {
  connectBtn: {
    textTransform: "none",
    backgroundColor: colors.green,
    "&:hover": { backgroundColor: colors.darkGreen },
  },
  disconnectBtn: {
    textTransform: "none",
    backgroundColor: colors.red,
    "&:hover": { backgroundColor: colors.darkRed },
  },
};
