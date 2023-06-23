import { Link, NavLink, useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './SelectedFarmPage.scss';
// temporarily importing instead of doing axios call
import imgSrc from '../../assets/images/almond-orchard.jpg';
import FarmDetails from '../../Components/FarmDetails/FarmDetails';


export default function SelectedFarmPage(){
    const {farmId}= useParams();
    const [farm, setFarm] = useState();
    let navigate = useNavigate(); 
    function goBack(){ 
        navigate(-1) 
    }

    useEffect(()=>{
        axios
            .get(`http://localhost:8080/farms/${farmId}`)
            .then((response)=>{setFarm(response.data)
                        
            })
            .catch((error)=>{console.log(error)})
    }, [farmId])
        
    if (farm === null) {
        return <h1>Request is loading. If delay persists, please begin your search again by selecting a farm from the previous page.</h1>
    } else {
        return (
            <div className='farm'>
                <NavLink onClick={goBack}> Back to Farm List </NavLink>
                <img className="farm__banner-image" src={imgSrc} alt="almond orchard" />
                {/* imgSrc will be 
                
                const = farmData.img */}
                
                <div className='farm__title-div'>
                    <h2 className='farm__program'>farm.Program/ Name</h2>
                    <h3 className="farm__farm-name">farm.Name/ of/ Farm </h3>
                </div>
                
                <FarmDetails farm={farm} key={farm.id}  />

                <div className='farm__map'>
                    placeholder map
                </div>


                <div className='farm__CTA-div'>
                    <Link to='https://www.soulfirefarm.org/programs/bipoc-trainings/FIRE/' className='farm__CTA-div--link'>Apply</Link>
                    <Link to='https://www.google.com' className='farm__CTA-div--link'>Website</Link>
                </div>
            </div>
        )
    }
}
