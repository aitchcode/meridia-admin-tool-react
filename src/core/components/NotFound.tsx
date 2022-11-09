import { Typography, Container, Link } from "@mui/material";
import colors from "core/constants/color";
import Path from "core/navigation/path";

export const NotFound = () => (
  <Container maxWidth="xs" sx={styles.root}>
    <Typography mb={2} variant="h4">
      Oops!
    </Typography>
    <Typography>
      We can&#39;t seem to find the page you are looking for.
    </Typography>
    <Typography mt={1} mb={2} sx={styles.error}>
      Error Code: 404
    </Typography>
    <Link href={Path.Root} variant="body1">
      Home
    </Link>
  </Container>
);

const styles = {
  root: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  error: {
    color: colors.grey,
  },
};
