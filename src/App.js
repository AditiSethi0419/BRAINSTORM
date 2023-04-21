
import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomeScreen from './Components/HomeScreen';
import Navbar from './Components/Navbar';
import SignUp from './Components/SignUp';
import SignIn from './Components/SignIn';
import ProfilePage from './Components/ProfilePage';
// import SignIn from './Components/SignIn';
import Write from './Components/Write';

function App() {
  return (
    <div className='App'>
      <Routes>
        
              <Route path='/' element={<HomeScreen />}/>
              {/* <Route path='/SignUp' element={<SignUp/>}/> */}
              <Route path='/SignUp' element={<SignIn/>}/>
              <Route path='/write' element={<ProfilePage/>}/>
              
      </Routes>
              
    </div>
  );
}

export default App;
