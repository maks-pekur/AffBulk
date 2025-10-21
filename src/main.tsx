import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "@/styles/global.css";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./router";
import RootLayout from "./layout";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <RootLayout>
        <AppRouter />
      </RootLayout>
    </BrowserRouter>
  </StrictMode>
);
