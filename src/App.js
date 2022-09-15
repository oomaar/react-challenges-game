import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Home, TwitterSidebar } from "./Screens";

export const App = () => {
  return (
    <div>
      <Router basename="/">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/twitter" element={<TwitterSidebar />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </div>
  );
};
