import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const App = (props) => {
  const location = useLocation();

  useEffect(() => {
    console.log("current route", location.pathname);
  }, []);

  console.log("App here");
  return (
    <div className="App">
      <h1>Django React Setup</h1>
    </div>
  );
};

export default App;
