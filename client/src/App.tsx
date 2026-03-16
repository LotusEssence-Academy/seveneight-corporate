import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch, useLocation } from "wouter";
import { useEffect } from "react";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import About from "./pages/About";
import Mission from "./pages/Mission";
import Services from "./pages/Services";
import Results from "./pages/Results";
import Company from "./pages/Company";
import Contact from "./pages/Contact";
import ServiceCoaching from "./pages/services/Coaching";
import ServiceSalon from "./pages/services/Salon";
import ServiceCommunity from "./pages/services/Community";
import ServiceProducts from "./pages/services/Products";

// ページ遷移時に常にトップへスクロールする
function ScrollToTop() {
  const [location] = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [location]);
  return null;
}

function Router() {
  return (
    <>
      <ScrollToTop />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/mission" component={Mission} />
        <Route path="/services" component={Services} />
        <Route path="/services/coaching" component={ServiceCoaching} />
        <Route path="/services/salon" component={ServiceSalon} />
        <Route path="/services/community" component={ServiceCommunity} />
        <Route path="/services/products" component={ServiceProducts} />
        <Route path="/results" component={Results} />
        <Route path="/company" component={Company} />
        <Route path="/contact" component={Contact} />
        <Route path="/404" component={NotFound} />
        <Route component={NotFound} />
      </Switch>
    </>
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
