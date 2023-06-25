import { Link, NavLink, useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './SelectedFarmPage.scss';
import backArrow from '../../assets/icons/arrow-back_icon.svg';
// temporarily importing instead of doing axios call
import imgSrc from '../../assets/images/almond-orchard.jpg';
import FarmDetails from '../../Components/FarmDetails/FarmDetails';

//Parent Component: FarmListPage


export default function SelectedFarmPage(){
    const {farmId}= useParams();
    // const farmImageSource = farm.farmImageSource
    const [farm, setFarm] = useState(null);
    let navigate = useNavigate(); 
    function goBack(){ 
        navigate(-1) 
    }

    useEffect(()=>{
        axios
            .get(`http://localhost:8080/farms/${farmId}`)
            .then((response)=>{setFarm(response.data)
            
             console.log(response)           
            })
            .catch((error)=>{console.log(error)})
    }, [farmId])
        
    if (farm === null) {
        return <h1>Request is loading. If delay persists, please begin your search again by selecting a farm from the previous page.</h1>
    } else {
        return (
            <div className='farm'>
                <NavLink className='farm__navlink' onClick={goBack}>
                    <img className="farm__back-arrow" src={backArrow} alt="back arrow icon" />Back to Farm List
                </NavLink>
                <img className="farm__banner-image" src={`${farm.farmImageSource}`} alt="almond orchard" />
               {/* src will be farm.farmImageSource */}
                
                <div className='farm__title-div'>
                    <h2 className='farm__program'>{`${farm.programName}`}</h2>
                    <h3 className="farm__farm-name">{`${farm.farmName}`} </h3>
                </div>
                <FarmDetails farm={farm} key={farm.id}  />

                <div className='farm__map'>
                    placeholder map
                </div>


                <div className='farm__CTA-div'>
                    <Link to='https://www.soulfirefarm.org/programs/bipoc-trainings/FIRE/' className='farm__CTA-div--link'>Apply</Link>
                    <a href={`http://${farm.contactInfo.website}`} className='farm__CTA-div--link' target="_blank">Website</a>
                </div>
            </div>
        )
    }
}
