import React, { Component, Suspense, lazy } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.scss";

const HelloWorldComponent = lazy(() => import("./HelloWorldComponent"));

class App extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <>
        <Suspense fallback={<div>Loading...</div>}>
          <HelloWorldComponent />
        </Suspense>
      </>
    );
  }
}

const render = (Component) => {
  const container = document.getElementById("root");
  
  ReactDOM.render(
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Component />} />
      </Routes>
    </BrowserRouter>,
    container
  );
};

render(App);

if (module.hot) {
  module.hot.accept(".", () => {
    const nextApp = require(".").default;
    render(nextApp);
  });
}
