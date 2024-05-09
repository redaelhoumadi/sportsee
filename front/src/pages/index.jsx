import './index.css'
import Logo from '../assets/logo.svg'
import { Link } from 'react-router-dom'

function Index(){
    return <div className='welcome'>
    <img src={Logo} alt='logo SportSee' className='logo-sportsee'/>
    <nav className='users'>
      <Link to="/user/12">Karl</Link>
      <Link to="/user/18">Cecilia</Link>
    </nav>
    </div>; 
}
 export default Index