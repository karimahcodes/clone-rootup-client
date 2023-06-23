import './FarmTypesPage.scss';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';


export default function FarmTypesPage(){


    return(
        <main className='farmTypes'>
            <section className='farmTypes__section--fruitVegetable'>
                <Link className="farmTypes__link" to='/categories/farmtypes?farmType=fruitVegetable'>
                    <h3 className='farmTypes__label'>Fruit and Vegetable Farms</h3>
                    {/* <img className='' src='#' alt=''/>  test bg image with descriptive label*/}
                </Link>
            </section>
            <section className='farmTypes__section--flowerHerb'>
                <Link className="farmTypes__link" to='/categories/farmtypes?farmType=flowerHerb'>
                    <h3 className='farmTypes__label'>Flower and Herb Farms</h3>
                </Link>
            </section>
            <section className='farmTypes__section--mushroom' to='/categories/farmtypes?farmType=mushroom"'>
                <Link className="farmTypes__link">
                    <h3 className='farmTypes__label'>Mushroom Farms</h3>
                </Link>
            </section>
            <section className='farmTypes__section--aquaponicFish' to='/categories/farmtypes?farmType=aquaponicFish'>
                <Link className="farmTypes__link">
                    <h3 className='farmTypes__label'>Hydroponic, Aquaponic and Fish Farms</h3>
                </Link>
            </section>
            <section className='farmTypes__section--gardenSmallSpaceRooftopUrban' to='/categories/farmtypes?farmType=gardenSmallSpaceRooftopUrban'>
                <Link className="farmTypes__link">
                    <h3 className='farmTypes__label'>Garden, Small-Space, Rooftop, and Urban Farms</h3>
                </Link>
            </section>
            <section className='farmTypes__section--beePollinatorInsect' to='/categories/farmtypes?farmType=beePollinatorInsect'>
                <Link className="farmTypes__link">
                    <h3 className='farmTypes__label'>Bee, Pollinator, and Insect Farm</h3>
                </Link>
            </section>
            <section className='farmTypes__section--poultryLivestock' to='/categories/farmtypes?farmType=poultryLivestock'>
                <Link className="farmTypes__link">
                    <h3 className='farmTypes__label'>Poultry and Livestock Farms</h3>
                </Link>
            </section>
            <section className='farmTypes__section--indoorGreenhouse' to='/categories/farmtypes?farmType=indoorGreenhouse'>
                <Link className="farmTypes__link">
                    <h3 className='farmTypes__label'>Indoor Farms and Greehouses</h3>
                </Link>
            </section>

        </main>
    )
}