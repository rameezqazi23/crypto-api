import { ThemeProvider } from './Context/ThemeContext';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Routes/Home';


function App() {
  return (
    <ThemeProvider>
      <Router>
        <Navbar />
        {/* <Routes>
          <Route element={<Home />} />
        </Routes> */}
      </Router>


    </ThemeProvider>
  );
}

export default App;
