import { Link } from 'react-router-dom'
import * as userService from '../../../utilities/user-services'

export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    userService.logOut()
    setUser(null)
  }

  return (
    <nav>
      <Link to='/'>Profile</Link>
      &nbsp;&nbsp;
      <Link to='/play'>Play</Link>
      &nbsp;&nbsp;
      <Link to='/'>Search</Link>
      &nbsp;&nbsp;
      <Link to='/'>About</Link>
      &nbsp;&nbsp;
      <Link to='' onClick={handleLogOut}>Log Out</Link>
    </nav>
  );
}