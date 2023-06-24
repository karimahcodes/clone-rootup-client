import './Header.scss';
import logoSrc from '../../assets/logo/rootUP-logo.svg';
import homeSrc from '../../assets/icons/cottage_icon.svg';
import searchSrc from '../../assets/icons/earth-search_icon.svg';
import profileSrc from '../../assets/icons/person_icon.svg';
import { Link } from 'react-router-dom';



export default function Header(){
    return (
        <header className="header">
            <Link className="header__logo-link" to="/About">
                <img className="header__logo" src={logoSrc}/>                
            </Link>
            
            <nav className="header__nav">
                <Link className="header__nav-link header__nav-link--about" to="/About">             
                    <img className='header__nav-icon header__home-icon'src={homeSrc} alt='icon of a small house with pointed roof'/>
                    <p className='header__text--about'>Home/ About</p>
                </Link> 
{/* decide if a link to all farms at /farms route is needed */}
                <Link className="header__nav-link header__nav-link--farms" to="/browse">
                    <img className='header__nav-icon header__leaf-icon'src={searchSrc} alt='icon of a leaf'/>
                    <p className='header__text--farms'>Browse Farms</p>
                </Link>
                
                <Link className="header__nav-link header__nav-link--user" to="/user">
                    <img className='header__nav-icon header__user-icon'src={profileSrc} alt='icon of a small person from the shoulders up'/>
                    <p className='header__text--profile'>User Profile</p>
                </Link>
            </nav>




        </header>
    )

}