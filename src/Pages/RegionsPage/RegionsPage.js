import './RegionsPage.scss';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import backArrow from '../../assets/icons/arrow-back_icon.svg';
import Baltimore_Hackett from '../../assets/images/site-images/Baltimore_Hackett.png'

export default function CommunitiesPage() {
    let navigate = useNavigate();
    function goBack() {
        navigate(-1)
    }

    return (
        <main className='regions'>
            <NavLink className='regions__navlink' onClick={goBack}>
                <img className="regions__back-arrow" src={backArrow} alt="back arrow icon" />Back to Search Categories
            </NavLink>
            <h1 className='regions__header'>Search by Region</h1>
            <section className='regions__content'>
                <section className='regions__cards'>
                    <section className='regions__section regions__section--US-NE'>
                        <Link className="regions__link" to="/categories/regions?region=US-NE">
                            <h3 className='regions__label'>(US-NE) NorthEast</h3>
                        </Link>
                    </section>
                    <section className='regions__section regions__section--US-SE'>
                        <Link className="regions__link" to="/categories/regions?region=US-SE">
                            <h3 className='regions__label'>  (US-SE) SouthEast </h3>
                        </Link>
                    </section>
                    <section className='regions__section regions__section--US-MW'>
                        <Link className="regions__link" to="/categories/regions?region=US-MW">
                            <h3 className='regions__label'>(US-MW) Midwest</h3>
                        </Link>
                    </section>
                    <section className='regions__section regions__section--US-W'>
                        <Link className="regions__link" to="/categories/regions?region=US-W">
                            <h3 className='regions__label'>(US-W) West/Northwest</h3>
                        </Link>
                    </section>
                    <section className='regions__section regions__section--US-SO'>
                        <Link className="regions__link" to="/categories/regions?region=US-SO">
                            <h3 className='regions__label'>(US-S) South</h3>
                        </Link>
                    </section>
                    <section className='regions__section regions__section--US-PO'>
                        <Link className="regions__link" to="/categories/regions?region=US-PO">
                            <h3 className='regions__label'>(US-PO) Pacific Ocean</h3>
                        </Link>
                    </section>
                    <section className='regions__section regions__section--US-CAR'>
                        <Link className="regions__link" to="/categories/regions?region=US-CAR">
                            <h3 className='regions__label'>(US-CAR) Caribbean (Puerto Rico, US Virgin Islands)</h3>
                        </Link>
                    </section>
                </section>
                {/* <figure className='farmTypes__figure'>
                    <img className="farmTypes__img" src={Baltimore_Hackett} alt="an AI-imagined scene of black farmers growing produce onthe sides of houses in Baltimore" />
                    <figcaption> Art by Curry Hackett with Midjourney (AI Tool)
                    </figcaption>
                </figure> */}

            </section>

        </main>
    )
}