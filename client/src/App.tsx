import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import ServiceCoaching from "./pages/services/Coaching";
import ServiceSalon from "./pages/services/Salon";
import ServiceCommunity from "./pages/services/Community";
import ServiceProducts from "./pages/services/Products";
import Contact from "./pages/Contact";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/services/coaching" component={ServiceCoaching} />
      <Route path="/services/salon" component={ServiceSalon} />
      <Route path="/services/community" component={ServiceCommunity} />
      <Route path="/services/products" component={ServiceProducts} />
      <Route path="/contact" component={Contact} />
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
