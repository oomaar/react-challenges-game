import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";
import { Nav } from "./Componetns";
import { Layout } from "./Global/Layout/Layout";
import { Blog, Home, ReactGym, ThirdParty, TwitterSidebar } from "./Screens";

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
            <Route path="/blog" element={<Blog />} />
            <Route path="/third-party" element={<ThirdParty />} />
            <Route path="/react-gym" element={<ReactGym />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
};
