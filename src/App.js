
import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomeScreen from './Components/HomeScreen';
import Navbar from './Components/Navbar';
import SignUp from './Components/SignUp';
import SignIn from './Components/SignIn';
// import SignIn from './Components/SignIn';
import Write from './Components/Write';

function App() {
  return (
    <div className='App'>
      <Routes>
        
              <Route path='/' element={<HomeScreen />}/>
              <Route path='/signup' element={<SignUp/>}/>
              <Route path='/write' element={<Write/>}/>
              
      </Routes>
              
    </div>
  );
}

export default App;
