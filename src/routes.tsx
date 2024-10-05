import { Routes, Route } from "react-router-dom";
import Rating from "./challenges/Rating";
import DefaultLayout from "./DefaultLayout";

function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />} />
      <Route path="/rating" element={<Rating />} />
    </Routes>
  );
}

export default AllRoutes;
