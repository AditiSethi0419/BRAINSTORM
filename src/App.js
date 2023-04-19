
import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomeScreen from './Components/HomeScreen';
import Navbar from './Components/Navbar';
import SignUp from './Components/SignUp';
import SignIn from './Components/SignIn';
// import SignIn from './Components/SignIn';

function App() {
  return (
    <div className='App'>
      <Routes>
        
              <Route path='/' element={<HomeScreen />}/>
              <Route path='/SignUp' element={<SignUp/>}/>
              {/* <Route path='/SignUp' element={<SignIn/>}/> */}
              <Route path='/write' element={<Navbar/>}/>
              
      </Routes>
              
    </div>
  );
}

export default App;
