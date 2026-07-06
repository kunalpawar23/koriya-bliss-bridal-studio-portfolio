import { Home } from "./pages/Home";
import { NavBar } from "./components/NavBar";

export default function App() {
  return (
    <div className="min-h-[100dvh] flex flex-col bg-background selection:bg-primary/20 selection:text-primary">
      <NavBar />
      <main className="flex-1">
        <Home />
      </main>
    </div>
  );
}
