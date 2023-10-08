import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Book from "./pages/Book";
import About from "./pages/About";
import Navigation from "./components/Navigation";
import RouteNotFound from "./utils/RoutesNotFound";
import IndexDestination from "./pages/destination/IndexDestination";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <RouteNotFound>
        <Route path="/home" element={<Home />} />
        <Route path="" element={<Navigate to="/home" />} />
        <Route path="destination/*" element={<IndexDestination />} />
        <Route path="/book" element={<Book />} />
        <Route path="/about" element={<About />} />
      </RouteNotFound>
    </BrowserRouter>
  );
}

export default App;
