import { CssBaseline, ThemeProvider } from "@mui/material";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import routes from "core/navigation";
import { NotFound } from "core/components/NotFound";
import Template from "core/components/Template";
import lightTheme from "core/theme/light";

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <CssBaseline />
      <Router>
        <Routes>
          {routes.map((route) => (
            <Route
              key={route.path}
              element={
                <Template>
                  <route.component />
                </Template>
              }
              path={route.path}
            />
          ))}
          <Route element={<NotFound />} path="*" />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
