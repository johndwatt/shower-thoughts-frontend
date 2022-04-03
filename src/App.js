import AppRoutes from './routes/AppRoutes'
import Navbar from "./components/nav_comps/Navbar";
import Footer from "./components/nav_comps/Footer";

import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <AppRoutes />
      <Footer />
    </div>
  );
}

export default App;
