import './CommunitiesPage.scss';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import backArrow from '../../assets/icons/arrow-back_icon.svg';
import Hackett_subway from '../../assets/images/site-images/Hackett_subway.png'
export default function CommunitiesPage() {
    let navigate = useNavigate();
    function goBack() {
        navigate(-1)
    }

    return (
        <main className='communities'>
            <NavLink className='communities__navlink' onClick={goBack}>
                <img className="communities__back-arrow" src={backArrow} alt="back arrow icon" />Back to Search Categories
            </NavLink>
            <section className='communities__content'>
                <section className='communities__links'>
                    <section className='communities__section--qtbipoc'>
                        <Link className="communities__link" to="/categories/communities?communityType=qtbipoc">
                            <h3 className='communities__label'>QTBIPOC</h3>
                        </Link>
                    </section>
                    <section className='communities__section--africanDiaspora'>
                        <Link className="communities__link" to="/categories/communities?communityType=africanDiaspora">
                            <h3 className='communities__label'>Black / African Diaspora</h3>
                        </Link>
                    </section>
                    <section className='communities__section--aapi'>
                        <Link className="communities__link" to="/categories/communities?communityType=aapi">
                            <h3 className='communities__label'>Asian American / Pacific Islandar</h3>
                        </Link>
                    </section>
                    <section className='communities__section--latinAmerican'>
                        <Link className="communities__link" to="/categories/communities?communityType=latinAmerican">
                            <h3 className='communities__label'>Latin American</h3>
                        </Link>
                    </section>
                    <section className='communities__section--arabMENA'>
                        <Link className="communities__link" to="/categories/communities?communityType=arabMENA">
                            <h3 className='communities__label'>Arab / Middle Eastern / North African</h3>
                        </Link>
                    </section>
                    <section className='communities__section--nativeAmerican'>
                        <Link className="communities__link" to="/categories/communities?communityType=nativeAmerican">
                            <h3 className='communities__label'>Indigenous / Native American</h3>
                        </Link>
                    </section>
                </section>
                <figure className='farmTypes__figure'>
                    <img className="farmTypes__img" src={Hackett_subway} alt="an AI-imagined scene of black women growing vegetables in a subway train car" />
                    <figcaption> Art by Curry Hackett with Midjourney (AI Tool)
                    </figcaption>
                </figure>

            </section>
        </main>
    )
}