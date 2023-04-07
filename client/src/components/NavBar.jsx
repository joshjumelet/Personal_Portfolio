import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className='nav-container'>
      <div className='nav-header'>Logo Here</div>
      <div className='nav-bar'>
        <div>
          <Link to='/' className='nav-link'>Home</Link>
        </div>
        <div>
          <Link to='/about' className='nav-link'>About</Link>
        </div>
        <div>
          <Link to='/portfolio' className='nav-link'>Portfolio</Link>
        </div>
        <div>
          <Link to='/resume' className='nav-link'>Resume</Link>
        </div>
      </div>
    </div>
  )
}

export default NavBar