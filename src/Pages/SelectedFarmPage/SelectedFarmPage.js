import { Link, NavLink, useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './SelectedFarmPage.scss';
// temporarily importing instead of doing axios call
import imgSrc from '../../assets/images/almond-orchard.jpg';
import FarmDetails from '../../Components/FarmDetails/FarmDetails';


export default function SelectedFarmPage(){
    let {farmId}= useParams();
    let [farm, setFarm] = useState();
    let navigate = useNavigate() 
    function handleClick(){ 
        navigate(-1) 
    }
    // const apiURL = 'http://localhost:3000/farms/';

    useEffect(()=>{
        axios
            .get(`http://localhost:8080/farms/${farmId}`)
            .then((response)=>{setFarm(response.data)})
            .catch((error)=>{console.log(error)})
    }, [farmId])
        
    if (farm === null) {
        return <h1>Request is loading. If delay persists, please begin your search again by selecting a farm from the previous page.</h1>
    }
    // const farm=
    else{
        return (
            <div className='farm'>
                <NavLink onClick={handleClick}> Back to Farm List </NavLink>
                <img className="farm__banner-image" src={imgSrc} alt="almond orchard" />
                {/* imgSrc will be 
                
                const = farmData.img */}
                
                <div className='farm__title-div'>
                    <h2 className='farm__program'>farm.Program/ Name</h2>
                    <h3 className="farm__farm-name">farm.Name/ of/ Farm </h3>
                </div>
                
                <FarmDetails farm={farm} key={farm.id}/>

                <div className='farm__map'>
                    placeholder map
                </div>


                <div className='farm__CTA-div'>
                    <Link className='farm__CTA-div--link'>Apply In-App </Link>
                    <Link className='farm__CTA-div--link'>Website</Link>
                </div>
            </div>
        )
    }
}
