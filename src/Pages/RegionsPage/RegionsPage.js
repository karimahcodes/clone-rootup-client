import './RegionsPage.scss';
import {Link, NavLink, useNavigate} from 'react-router-dom';

export default function CommunitiesPage(){
    let navigate = useNavigate();
    function goBack() {
        navigate(-1)
    }

 
    
    return(
        <main className=''>
            <NavLink className='farmList__navlink' onClick={goBack}>
                <img className="farmList__back-arrow" src="" alt="back arrow icon" />Back to Farm List
            </NavLink>
        
            <section className='regions__section--'>
                <Link className="regions__link">
                    <h3 className='regions__label'>x</h3>
                    {/* <img className='' src='#' alt=''/>  test bg image with descriptive label*/}
                </Link>
            </section>
            <section className='regions__section--'>
                <Link className="regions__link">
                    <h3 className='regions__label'>  x </h3>
                </Link>
            </section>
            <section className='regions__section--'>
                <Link className="regions__link">
                    <h3 className='regions__label'>x</h3>
                </Link>
            </section>
            <section className='regions__section--'>
                <Link className="regions__link">
                    <h3 className='regions__label'>x</h3>
                </Link>
            </section>
            <section className='regions__section--'>
                <Link className="regions__link">
                    <h3 className='regions__label'>x</h3>
                </Link>
            </section>
            <section className='regions__section--'>
                <Link className="regions__link">
                    <h3 className='regions__label'>x</h3>
                </Link>
            </section>
            <section className='regions__section--'>
                <Link className="regions__link">
                    <h3 className='regions__label'>x</h3>
                </Link>
            </section>
            <section className='regions__section--'>
                <Link className="regions__link">
                    <h3 className='regions__label'>x</h3>
                </Link>
            </section>
        </main>
    )
}