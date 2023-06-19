import './Header.scss';
// import logoSrc from '../../assets/logo';




export default function Header(){
    return(
        <header className="header">
            <Link className="header__logo-link" to="/">
                <img className="header__logo" src="logoSrc"/>
            </Link>
            <nav className="header__nav">
                <Link to="/About" className="header__nav-link--about">             {/* CREATE NAVLINK MIXIN */}
                    
                </Link>

                <Link to="/farms" className="header__nav-link--farms">
                    
                </Link>
                
                <Link to="/user" className="header__nav-link--user">
                
                </Link>
            </nav>




        </header>
    )

}