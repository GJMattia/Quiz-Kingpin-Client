import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../../utilities/user-services';
import AuthPage from '../../components/Auth/AuthPage/AuthPage';
import NavBar from '../../components/NavBar/NavBar';
import ProfilePage from '../ProfilePage/ProfilePage';
import PlayPage from '../PlayPage/PlayPage';
import KingpinPage from '../KingpinPage/KingpinPage';
import AboutPage from '../AboutPage/AboutPage';
import Footer from '../../components/Footer/Footer';
import './App.css';


function App() {
  const [user, setUser] = useState(getUser());

  return (
    <>
      {user ?
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            <Route path='/' element={<ProfilePage user={user} />} />
            <Route path='/play' element={<PlayPage user={user} />} />
            <Route path='/kingpin' element={<KingpinPage user={user} />} />
            <Route path='/about' element={<AboutPage user={user} />} />
          </Routes>
          <Footer />
        </> :
        <AuthPage setUser={setUser} />

      }
    </>
  )
}

export default App
