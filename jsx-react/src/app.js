import React from "react";
import { render } from "react-dom";
import Pet from "./pet";

const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <Pet name="tiger" animal="dog" breed="German Shepherd" />
      <Pet name="Leonard" animal="Squirrel" breed="vjnaFan" />
    </div>
  );
  // React.createElement takes three arguments, a) the component to be rendered (can be standard html tags or composite components) b) the props,
  // (for standard components, you can define an object and set id and class, while for composite components you can pass props) c) Children components
  // Note that the children components can be a single element or an array.
  //
};

render(<App />, document.getElementById("root"));
