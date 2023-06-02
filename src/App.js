import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './compnents/Header';
import Main from './compnents/Main';
import Nav from './compnents/Nav';
import Reservation from './compnents/Reservation';
import Home from './Pages/Home';

function App() {
  return (
    <>
      <Nav/>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/reservation' element={<Reservation/>}/>
      </Routes>
    </>
  );
}

export default App;
