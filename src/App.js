
import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomeScreen from './Components/HomeScreen';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className='App'>
      <Routes>
        
              <Route path='/' element={<HomeScreen />}/>
              <Route path='/signup' element={<Navbar/>}/>
              <Route path='/write' element={<Navbar/>}/>
              
              </Routes>
              
    </div>
  );
}

export default App;
