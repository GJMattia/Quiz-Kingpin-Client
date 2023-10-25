import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../../utilities/user-services';
import AuthPage from '../../Components/Auth/AuthPage/AuthPage';
import NavBar from '../../Components/NavBar/NavBar';
import ProfilePage from '../ProfilePage/ProfilePage';
import PlayPage from '../PlayPage/PlayPage'
import './App.css';


function App() {
  const [user, setUser] = useState(getUser())

  return (
    <main>
      {user ?
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            <Route path='/' element={<ProfilePage user={user} />} />
            <Route path='/play' element={<PlayPage user={user} />} />
          </Routes>
        </> :
        <AuthPage setUser={setUser} />
      }
    </main>
  )
}

export default App
