import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ScienceApp } from "@/components/ScienceApp";
import "./styles.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <main className="min-h-screen bg-bg">
      <ScienceApp />
    </main>
  </StrictMode>,
);
