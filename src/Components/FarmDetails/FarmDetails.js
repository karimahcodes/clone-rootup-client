import './FarmDetails.scss';
import checkSrc from '../../assets/icons/check-verified_icon.svg';

export default function FarmDetails({ farm }) {

    return (
        <main className="details">
            {/*** DESCRIPTION ****/}
            <div className='details__description'>
                <h3 className='details__header'>Description of program:</h3>
                <p className=''></p>{farm.description}

            </div>
            {/*** REGION ***/}
            <div className="details__location">
                <h3 className="details__text details__text--region">
                    REGION: {farm.region}
                </h3>
            </div>

            {/* **FARM TYPE** */}
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
            </div>

            {/* **COMMUNITIES OF FOCUS** */}
            <div className='details__table-row'>
                <h3 className='details__row-header details__row-header--cof'>Communities of Focus At This Farm</h3>
                <p className='details__description'>This farm's general programming contains information that may appeal to members of the communities below. </p>
                <div className='details__table-row--regular'>
                    {farm.communityType.includes('qtbipoc') &&
                        <p className='details__farm-type'>QTBIPOC</p>}

                    {farm.communityType.includes('africanDiaspora') &&
                        <p className='details__farm-type'>Black / African Diaspora</p>}

                    {farm.communityType.includes('aapi') &&
                        <p className='details__farm-type'>Asian American / Pacific Islander</p>}

                    {farm.communityType.includes('latinAmerican') &&
                        <p className='details__farm-type'>Latin American</p>}

                    {farm.communityType.includes('arabMENA') &&
                        <p className='details__farm-type'>Arab / Middle Eastern / North African</p>}

                    {farm.communityType.includes('nativeAmerican') &&
                        <p className='details__farm-type'>Indigenous / Native American</p>}
                </div>
            </div>
            <div className='details__table'>

                {/* ***SPECIAL PROGRAMMING*** */}
                <div className='details__table-row details__affirming'>
                    <h3 className='details__row-header'>Notes on Special Programming:</h3>
                    {farm.qtbipocAffirming &&
                        <div className="details__conditional-row">
                            <p className='details__table-text'>QTBIPOC Affirming </p>
                            <img className="details__checkbox" alt="checkbox badge icon" src={checkSrc} />
                        </div>
                    }

                    {farm.blackAffirming &&
                        <div className="details__conditional-row">
                            <p className='details__table-text'>Black Affirming </p>
                            <img className="details__checkbox" alt="checkbox badge icon" src={checkSrc} />
                        </div>
                    }
                </div>

                {/*  **OWNERSHIP** */}
                <div className='details__table-row'>
                    <p className='details__table-text'>  </p>
                    <h3 className='details__row-header'>Program Ownership or Leadership</h3>
                    <div className='details__table-row--regular'>
                        {farm.ownership.includes('qtbipocOwnedOrLed') &&
                            <p className='details__farm-type'>QTBIPOC Owned or Led</p>}
                        {farm.ownership.includes('blackOwnedOrLed') &&
                            <p className='details__farm-type'>Black Owned or Led</p>}
                    </div>

                </div>

                {/* ***COSTS*** */}
                <div className='details__table-row'>
                    <h3 className='details__row-header'>Costs and Considerations:</h3>
                     
                     {/*** FEES***/}
                     {farm.cost.programFee === 0.00 ?
                        <div className='details__table-row--nofee'>
                            <p className='details__table-text'>Program Fees (if applicable):  FREE</p>
                        </div> : <div className='details__table-row--fee'>
                            <p className='details__table-text'>Program Fees (if applicable): ${farm.cost.programFee}</p>
                        </div>
                    }

                    

                    {/*** PAYS***/}
                    {farm.paidApprenticeship &&
                        <div className="details__conditional-row">
                            <p className='details__table-text'> Pays Apprenctices </p>
                            <img className="details__checkbox" alt="checkbox badge icon" src={checkSrc} />
                        </div>
                    }
                </div>
               


                {/*** LODGING***/}
                <div className='details__table-row'>
                    {farm.lodgingAvailable &&
                        <div className="details__conditional-row">
                            <p className='details__table-text'>Housing / Lodging Available On Farm: </p>
                            <div><img className="details__checkbox" alt="checkbox badge icon" src={checkSrc} /></div>
                        </div>
                    }
                </div>
                {/** *FORMAT* **/}
                <div className='details__table-row--regular'>
                    <h4> Format of this Program</h4>
                    {Object.keys(farm.programFormat).map((key) => (
                        <div>
                            <p className='details__farm-type'> {farm.programFormat[key]}</p>
                        </div>
                    ))}
                </div>

                <div className='details__table-row'>
                    <p className='details__table-text'><span id="bold">Accessibility Accommodation notes:</span> {farm.accessibility}</p>
                </div>


            </div>

            <p className='details__contact-info'>Street Address: {farm.contactInfo.address}</p>
            <p className='details__contact-info'>Phone: {farm.contactInfo.phone}</p>
            
        </main>

    )
}
