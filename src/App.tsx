import { BrowserRouter } from "react-router-dom";
import AllRoutes from "./routes";

export default function App() {
  return (
    <BrowserRouter>
      <AllRoutes />
    </BrowserRouter>
  );
}
