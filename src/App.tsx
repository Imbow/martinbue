
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Work from "./pages/Work";
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
          <Route path="/" element={<Index />} />
          <Route path="/work" element={<Work />} />
          <Route path="/services/commercial-production" element={<CommercialProduction />} />
          <Route path="/services/corporate-videos" element={<CorporateVideos />} />
          <Route path="/services/event-coverage" element={<EventCoverage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
