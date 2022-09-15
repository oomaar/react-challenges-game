import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";
import { Nav } from "./Componetns";
import { Layout } from "./Global/Layout/Layout";
import { Home, TwitterSidebar } from "./Screens";

export const App = () => {
  return (
    <div>
      <Router basename="/">
        <Routes>
          <Route
            element={
              <>
                <Nav />
                <Layout>
                  <Outlet />
                </Layout>
              </>
            }
          >
            <Route path="/" element={<Home />} />
            <Route path="/twitter" element={<TwitterSidebar />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
};
