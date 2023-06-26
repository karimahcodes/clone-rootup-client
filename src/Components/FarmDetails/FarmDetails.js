import './FarmDetails.scss';
import checkSrc from '../../assets/icons/check-verified_icon.svg';

export default function FarmDetails({ farm }) {

    return (
        <main className="details">

            <div className='details__description'>
                <h3 className='details__header'>Description of program:</h3>
                <p className=''></p>{farm.description}

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
                    <h3 className='details__row-header'>Type of Farm:</h3>
                    <div className='details__table-row--regular'>
                        {farm.farmType.includes('fruitVegetable') &&
                            <p className='details__farm-type'>Fruit and Vegetable</p>}

                        {farm.farmType.includes('flowerHerb') &&
                            <p className='details__farm-type'>Flower and Herb</p>}

                        {farm.farmType.includes('aquaponicFish') &&
                            <p className='details__farm-type'>Hydroponic/Aquaponic/Aeroponic or Fish</p>}

                        {farm.farmType.includes('gardenSmallSpaceRooftopUrban') &&
                            <p className='details__farm-type'>Garden, Small-space, Rooftop, or Urban</p>}

                        {farm.farmType.includes('beePollinatorInsect') &&
                            <p className='details__farm-type'>Bee, Pollinator, or Insect</p>}

                        {farm.farmType.includes('poultryLivestock') &&
                            <p className='details__farm-type'>Poultry or Livestock</p>}

                        {farm.farmType.includes('indoorGreenhouse') &&
                            <p className='details__farm-type'>Indoor or Greenhouse</p>}

                    </div>

                    {/* { farm.farmType.entries(value).forEach(([farmType, value]) => { return(`${value}`) }) }</h3> */}

                    {/* {farm.farmType.map((type)=> {return (`<h3>${type}+ ", "</h3>`)}
                     )} */}

                </div>
                <div className='details__table-row details__affirming'>
                <h3 className='details__row-header'>Notes on Special Programming:</h3>
                    {farm.qtbipocAffirming &&
                        <div className="details__conditional-row">
                            <p className='details__table-text'>QTBIPOC Affirming </p>
                            <img className="details__checkbox" alt="checkbox badge icon" src={checkSrc} />
                        </div>
                    }
                   
                {/* </div>
                <div className='details__table-row'> */}
                     {farm.blackAffirming &&
                        <div className="details__conditional-row">
                            <p className='details__table-text'>Black Affirming </p>
                            <img className="details__checkbox" alt="checkbox badge icon" src={checkSrc} />
                        </div>
                    }
                </div>


                <div className='details__table-row'>
                    <h3 className='details__row-header'>Costs and Considerations:</h3>
                    {farm.hiresApprentices ?
                        <div className="details__conditional-row">
                            <p className='details__table-text'>Hires Apprentices (after program) </p>
                            <img className="details__checkbox" alt="checkbox badge icon" src={checkSrc} />
                        </div> : 
                        <p className='details__header-response'>Hires Apprentices (after program): no</p>
                    } 
                {/* </div>


                <div className='details__table-row'> */}
                    {farm.paidApprenticeship &&
                        <div className="details__conditional-row">
                            <p className='details__table-text'> Pays Apprenctices </p>
                            <img className="details__checkbox" alt="checkbox badge icon" src={checkSrc} />
                        </div>
                    }
                </div>


                <div className='details__table-row'>
                    <p className='details__table-text'>Program Fees (if applicable): ${farm.programFee}</p>
                </div>
                <div className='details__table-row'>
                    <p className='details__table-text'>Accessibility Accommodation notes: {farm.Accessibility}</p>
                </div>
                <div className='details__table-row'>
                    {farm.lodgingAvailable &&
                        <div className="details__conditional-row">
                            <p className='details__table-text'>Housing / Lodging Available On Farm: </p>
                            <div><img className="details__checkbox" alt="checkbox badge icon" src={checkSrc} /></div>
                        </div>
                    }
                </div>




            </div>


        </main>
    )
}
