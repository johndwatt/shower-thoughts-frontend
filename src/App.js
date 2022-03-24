import AppRoutes from './routes/AppRoutes'
import Navbar from "./components/nav_comps/Navbar";

import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <AppRoutes />
    </div>
  );
}

export default App;
