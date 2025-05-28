import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Outlet } from "react-router";

function App() {
  return (
    <TooltipProvider>
      <div className="font-display flex h-dvh flex-col scroll-smooth antialiased">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </TooltipProvider>
  );
}

export default App;
