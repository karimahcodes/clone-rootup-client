import './RegionsPage.scss';

export default function RegionsPage(){
    return(
        <main className=''>
            <section className='farmTypes__section--fruitVegetable'>
                <Link className="farmTypes__link">
                    <h3 className='farmTypes__label'>x</h3>
                    {/* <img className='' src='#' alt=''/>  test bg image with descriptive label*/}
                </Link>
            </section>
            <section className='farmTypes__section--flowerHerb'>
                <Link className="farmTypes__link">
                    <h3 className='farmTypes__label'>  x </h3>
                </Link>
            </section>
            <section className='farmTypes__section--mushroom'>
                <Link className="farmTypes__link">
                    <h3 className='farmTypes__label'>x</h3>
                </Link>
            </section>
            <section className='farmTypes__section--aquaponicFish'>
                <Link className="farmTypes__link">
                    <h3 className='farmTypes__label'>x</h3>
                </Link>
            </section>
            <section className='farmTypes__section--gardenSmallSpaceRooftopUrban'>
                <Link className="farmTypes__link">
                    <h3 className='farmTypes__label'>x</h3>
                </Link>
            </section>
            <section className='farmTypes__section--beePollinatorInsect'>
                <Link className="farmTypes__link">
                    <h3 className='farmTypes__label'>x</h3>
                </Link>
            </section>
            <section className='farmTypes__section--poultryLivestock'>
                <Link className="farmTypes__link">
                    <h3 className='farmTypes__label'>Poultry and Livestock Farms</h3>
                </Link>
            </section>
            <section className='farmTypes__section--indoorGreenhouse'>
                <Link className="farmTypes__link">
                    <h3 className='farmTypes__label'>x</h3>
                </Link>
            </section>
        </main>
    )
}