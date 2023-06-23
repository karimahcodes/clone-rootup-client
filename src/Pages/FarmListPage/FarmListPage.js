import { NavLink, Link, useParams, useSearchParams, useNavigate } from "react-router-dom";
import axios from 'axios';
import { useEffect, useState } from "react";



export default function FarmListPage() {
    let [searchParams, setSearchParams] = useSearchParams();

    const { category } = useParams()
    const [farmList, setFarmList] = useState()
    let navigate = useNavigate();
    function goBack() {
        navigate(-1)
    }

    useEffect(() => {
        console.log(searchParams.toString())
        axios
            .get(`http://localhost:8080/categories/${category}?${searchParams.toString()}`)
            .then((response) => {
                setFarmList(response.data)
                console.log(response)
            })
            .catch((error) => { console.log(error) })
    }, [])

    if (farmList=== null) {
        return <h1>Request is loading. If delay persists, please begin your search again by selecting a category from the previous page.</h1>
    } else {

        return (
            <div className=''>
                <NavLink onClick={goBack}> Back to Farm List </NavLink>
            </div>




        )
    }
}