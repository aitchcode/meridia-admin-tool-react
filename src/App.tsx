import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import routes from "core/navigation";
import { NotFound } from "core/components/NotFound";
import Template from "core/components/Template";

function App() {
  return (
    <div>
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
    </div>
  );
}

export default App;
