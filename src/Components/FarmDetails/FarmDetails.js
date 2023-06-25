import './FarmDetails.scss';
import checkSrc from '../../assets/icons/check-verified_icon.svg';

export default function FarmDetails({ farm }) {

    return (
        <main className="details">

            <div className='details__description'>
                {farm.description}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
            <div className="details__location">
                <h3 className="details__text details__text--region">
                    REGION: {farm.region}
                </h3>
                {/*
                <img className="details__map" src={regionSrc} alt="map of farm address"/>
                */}
            </div>

            <div className='details__table'>
                <div className='details__table-row'>
                    <h3 className='details__table-row'>Type of Farm:</h3>
                    <div className='details__table-row--regular'>
                        {farm.farmType.includes('fruitVegetable') &&
                            <h4 className='details__farm-type'>Fruit and Vegetable</h4>}

                        {farm.farmType.includes('flowerHerb') &&
                            <h4 className='details__farm-type'>Flower and Herb</h4>}

                        {farm.farmType.includes('aquaponicFish') &&
                            <h4 className='details__farm-type'>Hydroponic/Aquaponic/Aeroponic or Fish</h4>}
                        
                        {farm.farmType.includes('gardenSmallSpaceRooftopUrban') &&
                            <h4 className='details__farm-type'>Garden, Small-space, Rooftop, or Urban</h4>}
                        
                        {farm.farmType.includes('beePollinatorInsect') &&
                            <h4 lassName='details__farm-type'>Bee, Pollinator, or Insect</h4>}
                                                    
                        {farm.farmType.includes('poultryLivestock') &&
                            <h4 lassName='details__farm-type'>Poultry or Livestock</h4>}
                                                    
                        {farm.farmType.includes('indoorGreenhouse') &&
                            <h4 lassName='details__farm-type'>Indoor or Greenhouse</h4>}


                    </div>


                    {/* { farm.farmType.entries(value).forEach(([farmType, value]) => { return(`${value}`) }) }</h3> */}

                    {/* {farm.farmType.map((type)=> {return (`<h3>${type}+ ", "</h3>`)}
                     )} */}

                </div>
                <div className='details__table-row'>
                    {farm.qtbipocAffirming &&
                        <div className="details__conditional-row">
                            <p className='details__table-text'>QTBIPOC Affirming </p>
                            <img className="details__checkbox" alt="checkbox badge icon" src={checkSrc} />
                        </div>
                    }
                </div>
                <div className='details__table-row'>
                    {farm.blackAffirming &&
                        <div className="details__conditional-row">
                            <p className='details__table-text'>Black Affirming </p>
                            <img className="details__checkbox" alt="checkbox badge icon" src={checkSrc} />
                        </div>
                    }
                </div>
                <div className='details__table-row'>
                    {farm.hiresApprentices &&
                        <div className="details__conditional-row">
                            <p className='details__table-text'> Hires Apprentices</p>
                            <img className="details__checkbox" alt="checkbox badge icon" src={checkSrc} />
                        </div>
                    }
                </div>


                <div className='details__table-row'>
                    {farm.paidApprenticeship &&
                        <div className="details__conditional-row">
                            <p className='details__table-text'> Pays Apprenctices //</p>
                            <img className="details__checkbox" alt="checkbox badge icon" src={checkSrc} />
                        </div>
                    }
                </div>






            </div>


        </main>
    )
}
