import React from "react";
import { 
  BrowserRouter as Router, 
  Route, 
  Routes,
  Navigate
} from "react-router-dom";

import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Error404 from "./pages/Error404";

/**
 * @description App is the creation of the router
 * @returns {JSX.Element} the different paths of each page
 */
export default function App () 
{

  return (
      <div>

        <Router>

          <Routes>
            <Route path="/SportSee/Home" element={<Home />} />
            <Route path='/' element={<Navigate to='/SportSee/Home' />} />
            <Route path="/statistics/:userId" element={<Profile />}/>
            <Route path="/404" element={<Error404 code={"ERR_BAD_REQUEST"} />} />
            <Route path="*" element={<Error404 code={"ERR_BAD_REQUEST"} />} />
          </Routes>

        </Router>

      </div>
  );
};

