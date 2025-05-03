import { Header } from "@/components/header";
import { Outlet } from "react-router";
import { Footer } from "./components/footer";

function App() {
  return (
    <div className="font-display flex h-screen flex-col scroll-smooth antialiased">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
