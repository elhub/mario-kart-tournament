import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { NuqsAdapter } from "nuqs/adapters/react-router/v7";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Routes, Route } from "react-router";
import App from "@/App";
import RootLayout from "@/components/layout/RootLayout";
import Error from "@/pages/error";
import "@/index.css";

const root = document.getElementById("root");

ReactDOM.createRoot(root!).render(
  <StrictMode>
    <NuqsAdapter>
      <ChakraProvider>
        <BrowserRouter basename="/mario-kart-tournament">
          <Routes>
            <Route element={<RootLayout />}>
              <Route index element={<App />} errorElement={<Error />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ChakraProvider>
    </NuqsAdapter>
  </StrictMode>
);
