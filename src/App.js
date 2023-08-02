import { ThemeProvider } from './Context/ThemeContext';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Routes/Home';
import SignIn from './Routes/SignIn';
import SignUp from './Routes/SignUp';
import Account from './Routes/Account';
import axios from 'axios';
import { useState,useEffect } from 'react';


function App() {
  const [coins, setCoins] = useState([])
  const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true&locale=en'

  useEffect(() => {
    axios.get(url).then((response) => {
      setCoins(response.data)
      // console.log(response.data)
    })
  }, [url])

  

  return (
    <ThemeProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home coins={coins}/>} />
          <Route path='/signin' element={<SignIn />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/account' element={<Account />} />


        </Routes>
      </Router>


    </ThemeProvider>
  );
}

export default App;
