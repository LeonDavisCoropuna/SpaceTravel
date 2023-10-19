import React from "react";
import RouteNotFound from "../../utils/RoutesNotFound";
import { Route } from "react-router-dom";
import Mercury from "./planets/Mercury";
import Destination from "./Destination";
import Venus from "./planets/Venus";
import Earth from "./planets/Earth";
import Mars from "./planets/Mars";
import Jupiter from "./planets/Jupiter";
import Saturn from "./planets/Saturn";
import Uranus from "./planets/Uranus";
import Neptune from "./planets/Neptune";
function IndexDestination() {
  return (
    <>
      <RouteNotFound>
        <Route path="" element={<Destination /> }/>
        <Route path="mercury" element={<Mercury />}/>
        <Route path="venus" element={<Venus />}/>
        <Route path="earth" element={<Earth />}/>
        <Route path="mars" element={<Mars />}/>
        <Route path="jupiter" element={<Jupiter />}/>
        <Route path="saturn" element={<Saturn />}/>
        <Route path="uranus" element={<Uranus />}/>
        <Route path="neptune" element={<Neptune />}/>
      </RouteNotFound>
    </>
  );
}

export default IndexDestination;
