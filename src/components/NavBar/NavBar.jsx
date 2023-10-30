import { NavLink } from 'react-router-dom';
import * as userService from '../../../utilities/user-services';
import './NavBar.css';

export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    userService.logOut()
    setUser(null)
  }

  return (
    <div className='NavBar'>
      <ul className='NavList'>
        <li>
          <NavLink className='underline' activeclassname='active' to='/play' exact>
            Play!
          </NavLink>
        </li>
        <li>
          <NavLink className='underline' activeclassname='active' to='/' exact>
            Profile
          </NavLink>
        </li>
        <li>
          <NavLink className='underline' activeclassname='active' to='/kingpin' exact>
            Kingpins
          </NavLink>
        </li>
        <li>
          <NavLink className='underline' activeclassname='active' to='/about' exact>
            About
          </NavLink>
        </li>
        <li>
          <NavLink className='underline' to='' onClick={handleLogOut} exact>
            Sign Out
          </NavLink>
        </li>


      </ul>
    </div>
  )
}

