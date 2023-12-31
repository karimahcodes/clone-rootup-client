import './SelectedFarmPage.scss';
import { Link, NavLink, useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import backArrow from '../../assets/icons/arrow-back_icon.svg';
import FarmDetails from '../../Components/FarmDetails/FarmDetails';
import backgroundImage from '../../assets/images/site-images/helicopter.png';
//Parent Component: FarmListPage
//Child Component: FarmDetails

export default function SelectedFarmPage(){
    const {farmId}= useParams();
    const [farm, setFarm] = useState(null);
    let navigate = useNavigate(); 
    function goBack(){ 
        navigate(-1) 
    }
    
    useEffect(()=>{
        axios
            .get(`${process.env.REACT_APP_API_URL}/farms/${farmId}`)
            .then((response)=>{setFarm(response.data)
            
             console.log(response)           
            })
            .catch((error)=>{console.log(error)})
    }, [farmId])
      
    if (farm === null) {
        return <h2>Request is loading. If delay persists, please begin your search again by selecting a farm from the previous page.</h2>
    } else {
        
        const farmImageSource = farm.farmImageSource;

        return (
            <div className='site-bg' style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundRepeat: 'repeat-y', backgroundPositionY: '-50rem', backgroundSize: 'auto 100%', height: '200vh',
                backgroundColor: '#9d49181a'

            }}>
            <main className='farm'>
                <NavLink className='farm__navlink' onClick={goBack}>
                    <img className="farm__back-arrow" src={backArrow} alt="back arrow icon" />Back to Farm List
                </NavLink>

                <div className='farm__details-body'>
                    <img className="farm__banner-image" src={`${process.env.REACT_APP_API_URL}/assets/images/${farmImageSource}`} alt="almond orchard" />
                    
                    <div className='farm__title-div'>
                        <h1 className='farm__program-name'>{`${farm.programName}`}</h1>
                        <h2 className="farm__farm-name">{`${farm.farmName}`} </h2>
                    </div>

                    <FarmDetails farm={farm} key={farm.id}  />

                    {/* <div className='farm__map'>
                    </div> */}

                    <div className='farm__CTA-div'>
                        <a href='https://www.soulfirefarm.org/programs/bipoc-trainings/FIRE/' className='farm__CTA-div--link' target="_blank">Apply</a>
                        <a href={`http://${farm.contactInfo.website}`} className='farm__CTA-div--link' target="_blank">Website</a>
                    </div>

                </div>
            </main>
            </div>
        )
    }
}
