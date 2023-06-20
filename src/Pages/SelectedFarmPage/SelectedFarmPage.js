import { NavLink, useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './SelectedFarmPage.scss';
// temporarily importing instead of doing axios call
import imgSrc from '../../assets/images/almond-orchard.jpg';
import FarmDetails from '../../Components/FarmDetails/FarmDetails';


export default function SelectedFarmPage(){
    let farmId = useParams();
    let [farm, setFarm] = useState();
    let navigate = useNavigate() 
    function handleClick(){ navigate(-1) }
    // const apiURL = 'http://localhost:3000/farms/';

    useEffect(()=>{
        axios
            .get(`http://localhost:3000/farms/${farmId}`)
            .then((farm)=>{setFarm(farm.data)})
            .catch((error)=>{console.log(error)})
        }, [])
        
        if (farm === null) {
            return <h1>Request is loading. If delay persists, please begin your search again from the previous page</h1>
        }
    // const farm=
        else{
            return (
                <div className='farm'>
                    <NavLink onClick={handleClick}> Back to Farm List </NavLink>
                    <img className="farm__banner-image" src={imgSrc} alt="almond orchard" />
                    <FarmDetails farm="farm props"/>

                </div>
            )
        }
}
