import './FarmTypesPage.scss';
import { Link, useNavigate, NavLink } from 'react-router-dom';
import backArrow from '../../assets/icons/arrow-back_icon.svg';
// import { useEffect } from 'react';

//parent component: FarmSearchPage
//child component: ParmListPage

export default function FarmTypesPage() {
    let navigate = useNavigate();
    function goBack() {
        navigate(-1)
    }

    return (
        <main className='farmTypes'>
            <NavLink className='farmList__navlink' onClick={goBack}>
                <img className="farmList__back-arrow" src={backArrow} alt="back arrow icon" />Back to Search Categories
            </NavLink>
            <section className='farmTypes__links'>
                <section className='farmTypes__section--fruitVegetable'>
                    <Link className="farmTypes__link" to='/categories/farmtypes?farmType=fruitVegetable'>
                        <h3 className='farmTypes__label'>Fruit and Vegetable Farms</h3>

                    </Link>
                </section>
                <section className='farmTypes__section--flowerHerb'>
                    <Link className="farmTypes__link" to='/categories/farmtypes?farmType=flowerHerb'>
                        <h3 className='farmTypes__label'>Flower and Herb Farms</h3>
                    </Link>
                </section>
                <section className='farmTypes__section--mushroom' >
                    <Link className="farmTypes__link" to='/categories/farmtypes?farmType=mushroom'>
                        <h3 className='farmTypes__label'>Mushroom Farms</h3>
                    </Link>
                </section>
                <section className='farmTypes__section--aquaponicFish'>
                    <Link className="farmTypes__link" to='/categories/farmtypes?farmType=aquaponicFish'>
                        <h3 className='farmTypes__label'>Hydroponic, Aquaponic and Fish Farms</h3>
                    </Link>
                </section>
                <section className='farmTypes__section--gardenSmallSpaceRooftopUrban'>
                    <Link className="farmTypes__link" to='/categories/farmtypes?farmType=gardenSmallSpaceRooftopUrban'>
                        <h3 className='farmTypes__label'>Garden, Small-Space, Rooftop, and Urban Farms</h3>
                    </Link>
                </section>
                <section className='farmTypes__section--beePollinatorInsect'>
                    <Link className="farmTypes__link" to='/categories/farmtypes?farmType=beePollinatorInsect'>
                        <h3 className='farmTypes__label'>Bee, Pollinator, and Insect Farm</h3>
                    </Link>
                </section>
                <section className='farmTypes__section--poultryLivestock'>
                    <Link className="farmTypes__link" to='/categories/farmtypes?farmType=poultryLivestock'>
                        <h3 className='farmTypes__label'>Poultry and Livestock Farms</h3>
                    </Link>
                </section>
                <section className='farmTypes__section--indoorGreenhouse'>
                    <Link className="farmTypes__link" to='/categories/farmtypes?farmType=indoorGreenhouse'>
                        <h3 className='farmTypes__label'>Indoor Farms and Greehouses</h3>
                    </Link>
                </section>
            </section>
        </main>
    )
}