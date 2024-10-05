import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Toaster } from "react-hot-toast";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header.tsx";
import Footer from "./components/Footer.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Header />
      <App />
      <Footer />
      <Toaster
        toastOptions={{
          duration: 5000,
          style: {
            direction: "ltr",
            width: "100%",
            maxWidth: "400px",
            overflowWrap: "break-word",
            whiteSpace: "normal",
          },
        }}
      />
    </BrowserRouter>
  </StrictMode>
);
