
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Index from "./pages/Index";
import Work from "./pages/Work";
import Showreel from "./pages/Showreel";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import CommercialProduction from "./pages/services/CommercialProduction";
import CorporateVideos from "./pages/services/CorporateVideos";
import EventCoverage from "./pages/services/EventCoverage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout><Index /></Layout>} />
          <Route path="/work" element={<Layout><Work /></Layout>} />
          <Route path="/showreel" element={<Layout><Showreel /></Layout>} />
          <Route path="/about" element={<Layout><About /></Layout>} />
          <Route path="/contact" element={<Layout><Contact /></Layout>} />
          <Route path="/services/commercial-production" element={<Layout><CommercialProduction /></Layout>} />
          <Route path="/services/corporate-videos" element={<Layout><CorporateVideos /></Layout>} />
          <Route path="/services/event-coverage" element={<Layout><EventCoverage /></Layout>} />
          <Route path="*" element={<Layout><NotFound /></Layout>} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
