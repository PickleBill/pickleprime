
import { Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Scoreboard from "./pages/Scoreboard";
import SandboxScoreboard from "./pages/SandboxScoreboard";
import { Toaster } from "sonner";
import "./App.css";

function App() {
  return (
    <>
      <Toaster position="top-center" />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/scoreboard" element={<Scoreboard />} />
        <Route path="/sandbox-scoreboard" element={<SandboxScoreboard />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
