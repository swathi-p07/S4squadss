import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainLayout } from "@/components/Layout/MainLayout";
import Dashboard from "./pages/Dashboard";
import Research from "./pages/Research";
import Transcripts from "./pages/Transcripts";
import Scripts from "./pages/Scripts";
import Storyboards from "./pages/Storyboards";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout><Dashboard /></MainLayout>} />
          <Route path="/research" element={<MainLayout><Research /></MainLayout>} />
          <Route path="/transcripts" element={<MainLayout><Transcripts /></MainLayout>} />
          <Route path="/scripts" element={<MainLayout><Scripts /></MainLayout>} />
          <Route path="/storyboards" element={<MainLayout><Storyboards /></MainLayout>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
