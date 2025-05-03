import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/globals.css";
import App from "./App.tsx";
import { BrowserRouter, Route, Routes } from "react-router";
import { routes } from "./lib/routes.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          {routes.map((route) => {
            if (route.href === "/") {
              return <Route index element={<route.component />} />;
            }
            return <Route path={route.href} element={<route.component />} />;
          })}
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
