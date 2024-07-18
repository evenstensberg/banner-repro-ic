import React, { PureComponent } from "react";
import { Link } from "react-router-dom";
import { IcClassificationBanner } from "@ukic/react";

import "./assets/styles/index.scss";
import svgLogo from "./assets/images/logo.svg";


const IcChild = ({country, additionalSelectors}) => {
  return <IcClassificationBanner
  country={country?.toUpperCase()}
  additionalSelectors={additionalSelectors}
  classification="official-sensitive"
/>
}
const HelloWorldComponent = () => {
  const country = undefined;
  const additionalSelectors = undefined;
  return (
    <div style={{ gap: "0.5rem" }}>
    <IcChild country={country} additionalSelectors={additionalSelectors} />
  </div>
  )
}

export default HelloWorldComponent;
