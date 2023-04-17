import React from "react";
import { 
  BrowserRouter as Router, 
  Route, 
  Routes
} from "react-router-dom";

import Home from "./pages/Home";
import Profile from "./pages/Profile/profile"
import Error from "./components/Error";

function App() {
  return (
      <div>
        <Router>
          <Routes>
            <Route path="SportSee/Home" element={<Home />} />
            <Route path="/statistics/:id" element={<Profile />} />
            <Route path="*" element={<Error code={"ERR_BAD_REQUEST"} />} />
          </Routes>
        </Router>
      </div>
    );
  };

  export default App;