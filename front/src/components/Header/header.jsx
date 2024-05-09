import Menu from '../Menu/menu';
import Logo from '../../assets/logo.svg';
import './header.css';

function Header(){
    return(
        <header> 
        <img src={Logo} alt='logo SportSee' className='logo-sportsee'/>
        <Menu />
        </header>
        
    )
}

export default Header