import { Link } from 'react-router-dom';
import './menu.css'
function Menu(){
    return (
        <nav>
      <ul>
        <li>
          <Link to="/" className='nav-link'>Accueil</Link>
        </li>
        <li>
          <Link to="/profil" className='nav-link'>Profil</Link>
        </li>
        <li>
          <Link to="/reglage" className='nav-link'>Réglage</Link>
        </li>
        <li>
          <Link to="/communaute" className='nav-link'>Communauté</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Menu