import {
  Box,
  TextField,
  Typography,
  FormControlLabel,
  Checkbox,
  Button,
  Grid,
  Select,
  InputLabel,
  FormControl,
  MenuItem,
} from "@mui/material";
import { RFGrades } from "core/constants/enum";
import { identity } from "lodash";

export const BasicStationSettings = () => (
  <Box display="flex" flexDirection="column" alignItems="center">
    <Typography variant="h5">Settings</Typography>
    <Typography mt={1} mb={2} variant="h6" sx={styles.underlinedText}>
      Basic Station Settings
    </Typography>
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <TextField
          id="base-id"
          size="small"
          label="Base Id"
          type="number"
          margin="normal"
          InputLabelProps={{ shrink: true }}
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          id="channel"
          size="small"
          label="Channel"
          type="number"
          margin="normal"
          InputLabelProps={{ shrink: true }}
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          id="from-keypad-id"
          size="small"
          label="From Keypad Id"
          type="number"
          margin="normal"
          InputLabelProps={{ shrink: true }}
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          id="to-keypad-id"
          size="small"
          label="To Keypad Id"
          type="number"
          margin="normal"
          InputLabelProps={{ shrink: true }}
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          id="keypad-turn-off-timer"
          size="small"
          label="Keypad Turn Off Timer"
          type="number"
          margin="normal"
          InputLabelProps={{ shrink: true }}
        />
      </Grid>
      <Grid item xs={6}>
        <FormControl fullWidth size="small" margin="normal">
          <InputLabel id="rf-grade-label">RF Grade</InputLabel>
          <Select
            labelId="rf-grade-label"
            id="rf-grade"
            label="RF Grade"
            value={0}
          >
            {Object.keys(RFGrades).map((rfGrade, index) => (
              <MenuItem
                selected
                key={identity(`rfGrade-${index}`)}
                value={index}
              >
                {RFGrades[rfGrade as keyof typeof RFGrades]}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={6}>
        {" "}
        <FormControlLabel
          id="keypad-feedback"
          label={<Typography variant="body2">Keypad Feedback</Typography>}
          control={<Checkbox />}
        />
      </Grid>
      <Grid item xs={6}>
        <FormControlLabel
          id="auto-submission"
          label={<Typography variant="body2">Automatic Submission</Typography>}
          control={<Checkbox />}
        />
      </Grid>
      <Grid item xs={12}>
        <Box display="flex" justifyContent="center">
          <Button variant="contained" sx={styles.btn}>
            Write Settings
          </Button>
        </Box>
      </Grid>
    </Grid>
  </Box>
);

const styles = {
  btn: {
    textTransform: "none",
  },
  underlinedText: {
    textDecoration: "underline",
  },
};
