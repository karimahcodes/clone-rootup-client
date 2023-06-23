import './FarmDetails.scss';
import checkSrc from '../../assets/icons/check-verified_icon.svg';

export default function FarmDetails({/* farm props */}){
    // const hires = farms.HiresApprentices;



    return (
        <main className="details">
            
            <div className='details__description'>
                \farm.description\                
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
            <div className="details__location">
                <h3 className="details__text details__text--region">
                    REGION: \farm.region\
                </h3>

                {/*
                <img className="details__map" src={regionSrc} alt="map of farm address"/>
                */}
            </div>

            <div className='details__table'>
                <div className='details__table-row'>
                    <h3 className='details__table-row'>Type of Farm :</h3> <h3 className='details__table-row--regular'>farm.farmType, farm.farmType, farm.farmType</h3>

                </div> 
                <div className='details__table-row'>
                    {/* {hires &&  */}
                        <div className="details__conditional-row">
                            <p className='details__table-text'>farm.qtbipocAffirming </p>
                            <img className="details__checkbox" src={checkSrc}/>
                        </div>
                    {/* } */}                   
                </div>
                <div className='details__table-row'>
                    {/* {hires &&  */}
                        <div className="details__conditional-row">
                            <p className='details__table-text'>farm.blackAffirming </p>
                            <img className="details__checkbox" src={checkSrc}/>
                        </div>
                    {/* } */}                   
                </div>
                <div className='details__table-row'>
                    {/* {hires &&  */}
                        <div className="details__conditional-row">
                            <p className='details__table-text'> Hires Apprentices</p>
                            <img className="details__checkbox" src={checkSrc}/>
                        </div>
                    {/* } */}
                </div>
                
                
                <div className='details__table-row'>
                    {/* {hires &&  */}
                        <div className="details__conditional-row">
                            <p className='details__table-text'> Pays Apprenctices /farm.paidApprenticeship/</p>
                            <img className="details__checkbox" src={checkSrc}/>
                        </div>
                    {/* } */}
                </div>

                
                



            </div>

            
        </main>
    )
}
