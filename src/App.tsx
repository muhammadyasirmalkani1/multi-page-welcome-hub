
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Features from "./pages/Features";
import Pricing from "./pages/Pricing";
import Docs from "./pages/Docs";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";

// Create the query client
const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/features" element={<Features />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/docs" element={<Docs />} />
          <Route path="/docs/installation" element={<Docs />} />
          <Route path="/docs/quickstart" element={<Docs />} />
          <Route path="/docs/first-pipeline" element={<Docs />} />
          <Route path="/docs/pipelines" element={<Docs />} />
          <Route path="/docs/pipelines/configuration" element={<Docs />} />
          <Route path="/docs/repositories/create" element={<Docs />} />
          <Route path="/docs/repositories/access" element={<Docs />} />
          <Route path="/docs/branch-strategies" element={<Docs />} />
          <Route path="/docs/environment-variables" element={<Docs />} />
          <Route path="/docs/triggers-webhooks" element={<Docs />} />
          <Route path="/docs/monitoring-logs" element={<Docs />} />
          <Route path="/docs/deployment/strategies" element={<Docs />} />
          <Route path="/docs/environments" element={<Docs />} />
          <Route path="/docs/rollbacks" element={<Docs />} />
          <Route path="/docs/security/best-practices" element={<Docs />} />
          <Route path="/docs/security/secrets" element={<Docs />} />
          <Route path="/docs/security/compliance" element={<Docs />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
