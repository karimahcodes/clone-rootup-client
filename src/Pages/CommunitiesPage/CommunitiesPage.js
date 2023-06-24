import './CommunitiesPage.scss';
import {Link, NavLink, useNavigate} from 'react-router-dom';

export default function CommunitiesPage(){
    let navigate = useNavigate();
    function goBack() {
        navigate(-1)
    }

    // 
    // africanDiaspora
    // aapi
    // latinAmerican
    // arabMENA
    // nativeAmerican
    
    return(
        <main className=''>
            <NavLink className='farmList__navlink' onClick={goBack}>
                <img className="farmList__back-arrow" src="" alt="back arrow icon" />Back to Farm List
            </NavLink>
            <section className='communities__section--qtbipoc'>
                <Link className="communities__link" to="/categories/communities?community=qtbipoc">
                    <h3 className='communities__label'>QTBIPOC</h3>
                    {/* <img className='' src='#' alt=''/>  test bg image with descriptive label*/}
                </Link>
            </section>
            <section className='communities__section--'>
                <Link className="communities__link">
                    <h3 className='communities__label'>  x </h3>
                </Link>
            </section>
            <section className='communities__section--'>
                <Link className="communities__link">
                    <h3 className='communities__label'>x</h3>
                </Link>
            </section>
            <section className='communities__section--'>
                <Link className="communities__link">
                    <h3 className='communities__label'>x</h3>
                </Link>
            </section>
            <section className='communities__section--'>
                <Link className="communities__link">
                    <h3 className='communities__label'>x</h3>
                </Link>
            </section>
            <section className='communities__section--'>
                <Link className="communities__link">
                    <h3 className='communities__label'>x</h3>
                </Link>
            </section>
            <section className='communities__section--'>
                <Link className="communities__link">
                    <h3 className='communities__label'>x</h3>
                </Link>
            </section>
            <section className='communities__section--'>
                <Link className="communities__link">
                    <h3 className='communities__label'>x</h3>
                </Link>
            </section>
        </main>
    )
}