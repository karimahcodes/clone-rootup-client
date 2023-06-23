import './FarmCategoryPage.scss';
import { Link, NavLink, useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';


export default function FarmCategoryPage(){

    const {categoryParams}= useParams()    
    const [category, setCategory] = useState({});
    let navigate = useNavigate(); 
    function goBack(){ 
        navigate(-1) 
    }

    useEffect(()=>{
        axios
            .get(`http://localhost:8080/categories`)
            .then((response)=>{setCategory(response.data)
             console.log(response)           
            })
            .catch((error)=>{console.log(error)})
    }, [farmId])
        
    if (farm === null) {
        return <h1>Request is loading. If delay persists, please begin your search again by selecting a category from the previous page.</h1>
    } else {
            
        return (
            <div className=''>
                <NavLink onClick={goBack}> Back to Farm List </NavLink>
            </div>
            



        )}
}

