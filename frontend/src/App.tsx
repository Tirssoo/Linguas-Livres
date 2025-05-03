import { useState } from "react";
import { Hero } from "./components/hero";
import { ButtonEnvio } from "./components/button";
import { Link } from "./components/link";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen">
        <Hero />
        <ButtonEnvio className="bg-blue-500 hover:bg-blue-700" />
        <Link href="https://react.dev" text="React" />
      </div>
    </>
  );
}

export default App;
