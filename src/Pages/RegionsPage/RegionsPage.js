import './RegionsPage.scss';
import {Link, NavLink, useNavigate} from 'react-router-dom';
import backArrow from '../../assets/icons/arrow-back_icon.svg';


export default function CommunitiesPage(){
    let navigate = useNavigate();
    function goBack() {
        navigate(-1)
    }

    return(
        <main className='regions'>
            <NavLink className='regions__navlink' onClick={goBack}>
            <img className="regions__back-arrow" src={backArrow} alt="back arrow icon" />Back to Search Categories
            </NavLink>
        
            <section className='regions__section--US-NE'>
                <Link className="regions__link" to="/categories/regions?region=US-NE">
                    <h3 className='regions__label'>(US-NE) NorthEast</h3>
                    {/* <img className='' src='#' alt=''/>  test bg image with descriptive label*/}
                </Link>
            </section>
            <section className='regions__section--US-SE'>
                <Link className="regions__link" to="/categories/regions?region=US-SE">
                    <h3 className='regions__label'>  (US-SE) SouthEast </h3>
                </Link>
            </section>
            <section className='regions__section--US-MW'>
                <Link className="regions__link" to="/categories/regions?region=US-MW">
                    <h3 className='regions__label'>(US-MW) Midwest</h3>
                </Link>
            </section>
            <section className='regions__section--US-W'>
                <Link className="regions__link" to="/categories/regions?region=US-W">
                    <h3 className='regions__label'>(US-W) West/Northwest</h3>
                </Link>
            </section>
            <section className='regions__section--US-SO'>
                <Link className="regions__link" to="/categories/regions?region=US-SO">
                    <h3 className='regions__label'>(US-S) South</h3>
                </Link>
            </section>
            <section className='regions__section--US-PO'>
                <Link className="regions__link" to="/categories/regions?region=US-PO">
                    <h3 className='regions__label'>(US-PO) Pacific Ocean</h3>
                </Link>
            </section>
            <section className='regions__section--US-CAR'>
                <Link className="regions__link" to="/categories/regions?region=US-CAR">
                    <h3 className='regions__label'>(US-CAR) Caribbean (Puerto Rico, US Virgin Islands)</h3>
                </Link>
            </section>
        </main>
    )
}