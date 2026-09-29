import { createFileRoute } from "@tanstack/react-router";
import { ScienceApp } from "@/components/ScienceApp";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <main className="min-h-screen bg-bg">
      <ScienceApp />
    </main>
  );
}
