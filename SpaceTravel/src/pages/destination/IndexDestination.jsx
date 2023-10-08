import React from "react";
import RouteNotFound from "../../utils/RoutesNotFound";
import { Route } from "react-router-dom";
import Mercury from "./planets/Mercury";
import Destination from "./Destination";
import Venus from "./planets/Venus";
function IndexDestination() {
  //const planets = ["Mercucy","Venuz","Earth","Marte","jupiter","saturno","uranus","neptune"]
  return (
    <>
      <RouteNotFound>
        <Route path="" element={<Destination /> }/>
        <Route path="mercury" element={<Mercury />}/>
        <Route path="venus" element={<Venus />}/>
      </RouteNotFound>
    </>
  );
}

export default IndexDestination;
