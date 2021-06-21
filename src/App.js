import React from "react";
import Display from "./Components/Display";
import useCounter from "./Components/useCounter";
import "./App.css";
import "../node_modules/font-awesome/css/font-awesome.min.css";

function App() {
  const { youtube, twitter, facebook, linkedin } = useCounter();

  return (
    <Display
      youtube={youtube}
      twitter={twitter}
      facebook={facebook}
      linkedin={linkedin}
    />
  );
}

export default App;
