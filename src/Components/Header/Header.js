import './Header.scss';
import logoSrc from '../../assets/icons/leaf_icon.svg';
import homeSrc from '../../assets/icons/home_icon.svg';
import searchSrc from '../../assets/icons/earth-search_icon.svg';
import profileSrc from '../../assets/icons/person_icon.svg';
import { Link } from 'react-router-dom';



export default function Header(){
    return (
        <header className="header">
            <Link className="header__logo-link" to="/">
                <img className="header__logo" src={logoSrc}/>
                <p className='header__logo-text'>rootUP</p>    
            </Link>
            <nav className="header__nav">
                <Link className="header__nav-link--about" to="/About">             {/* CREATE NAVLINK MIXIN */}
                    <img className='header__homeicon'src={homeSrc} alt='icon of a small house with pointed roof'/>
                    <p className='header__text--about'>About</p>                   {/* placeholder, needs icon */}

                </Link>

                <Link className="header__nav-link--farms" to="/farms">
                    <img className='header__leafIcon'src={searchSrc} alt='icon of a leaf'/>
                    <p className='header__text--farms'>Farms</p>                    {/* placeholder, needs icon */}
                </Link>
                
                <Link className="header__nav-link--user" to="/user">
                    <img className='header__homeIcon'src={profileSrc} alt='icon of a small person from the shoulders up'/>
                    <p className='header__text--profile'>Profile</p>                    {/* placeholder, needs icon */}
                </Link>
            </nav>




        </header>
    )

}