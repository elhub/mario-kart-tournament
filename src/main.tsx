import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { NuqsAdapter } from "nuqs/adapters/react-router/v7";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "@/App";
import RootLayout from "@/components/layout/RootLayout";
import Error from "@/pages/error";
import "@/index.css";

const root = document.getElementById("root");

ReactDOM.createRoot(root!).render(
  <StrictMode>
    <NuqsAdapter>
      <BrowserRouter basename="/mario-kart-tournament">
        <Routes>
          <Route element={<RootLayout />}>
            <Route index element={<App />} errorElement={<Error />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </NuqsAdapter>
  </StrictMode>
);
