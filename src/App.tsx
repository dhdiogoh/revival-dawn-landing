import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import { GamePage } from "./pages/GamePage";
import RevivalCulture from "./pages/RevivalCulture";
import Admin from "./pages/Admin";
import JejumPage from "./pages/JejumPage";
import JejumTimerPage from "./pages/JejumTimerPage";
import Navbar from "./components/Navbar";
import { TransitionProvider } from "./context/TransitionContext";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <TransitionProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/game" element={<GamePage />} />
            <Route path="/revival-culture" element={<RevivalCulture />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/jejum" element={<JejumPage />} />
            <Route path="/jejum/timer" element={<JejumTimerPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </BrowserRouter>
      </TransitionProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
