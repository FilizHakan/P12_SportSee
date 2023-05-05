import React from "react";
import { 
  BrowserRouter as Router, 
  Route, 
  Routes
} from "react-router-dom";

import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Error404 from "./pages/Error404";

/**
 * @description App is the creation of a the router
 * @returns the different paths of each page
 */
function App() {
  return (
      <div>
        <Router>
          <Routes>
            <Route path="/SportSee/Home" element={<Home />} />
            <Route path="/statistics/:userId" element={<Profile />} />
            <Route path="*" element={<Error404 code={"ERR_BAD_REQUEST"} />} />
          </Routes>
        </Router>
      </div>
    );
  };

  export default App;