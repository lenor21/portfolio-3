import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RootLayout from './pages/root-layout/RootLayout';
import Home from './pages/home/Home';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';

// Initialize Lenis
const lenis = new Lenis({
  duration: 3,
});

// Use requestAnimationFrame to continuously update the scroll
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route element={<RootLayout />}>
            <Route path='/' element={<Home />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
