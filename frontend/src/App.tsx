import { Header } from '@/components/header';
import { Outlet } from 'react-router';

function App() {
  return (
    <div className="font-display flex h-screen flex-col scroll-smooth antialiased">
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
