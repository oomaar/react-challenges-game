import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { TwitterSidebar } from "./Screens";

export const App = () => {
  return (
    <div>
      <Router basename="/">
        <Routes>
          <Route path="*" element={<Navigate to="/" />} />
          <Route path="/twitter" element={<TwitterSidebar />} />
        </Routes>
      </Router>
    </div>
  );
};
