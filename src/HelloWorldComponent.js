import React, { PureComponent } from "react";
import { Link } from "react-router-dom";
import { IcClassificationBanner } from "@ukic/react";

import "./assets/styles/index.scss";



const IcChild = () => {
  return(
    <IcClassificationBanner
      classification="official"
      inline="true"
      country={undefined}
    />
  )
}
const HelloWorldComponent = () => {
  const country = undefined;
  const additionalSelectors = undefined;
  return (
    <div style={{ gap: "0.5rem" }}>
    <IcChild  />
  </div>
  )
}

export default HelloWorldComponent;
