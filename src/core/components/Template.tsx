import { Typography, AppBar, Toolbar, Container } from "@mui/material";
import { AppbarHeight } from "core/constants/enum";
import { ReactElement } from "react";

const Template = ({ children }: { children: ReactElement }) => (
  <div>
    <AppBar position="fixed" sx={styles.appbar}>
      <Toolbar disableGutters>
        <Container maxWidth="xl">
          <Typography variant="h6" sx={styles.title}>
            MeridiaAdminTool
          </Typography>
        </Container>
      </Toolbar>
    </AppBar>
    <Container maxWidth="xl" sx={styles.main}>
      {children}
    </Container>
  </div>
);

const styles = {
  appbar: {
    background: "white",
    height: `${AppbarHeight}px`,
  },
  title: { color: "black" },
  main: { pt: `${AppbarHeight}px` },
};

export default Template;
