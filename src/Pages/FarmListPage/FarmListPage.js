import { NavLink, Link, useParams, useSearchParams, useNavigate } from "react-router-dom";
import axios from 'axios';
import { useEffect, useState } from "react";

//parent components: FarmTypesPage, RegionsPage, CommunitiesPage
//child component: SelectedFarmPage

export default function FarmListPage() {
    let [searchParams, setSearchParams] = useSearchParams();

    const { category } = useParams()
    const [farmList, setFarmList] = useState([])
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
    }, []);

    if (farmList === null) {
        return <h1>Request is loading. If delay persists, please begin your search again by selecting a category from the previous page.</h1>
    } else {

        return (
            <div className='farmList'>
                <NavLink className='farmList__navlink' onClick={goBack}>
                    <img className="farmList__back-arrow" src="" alt="back arrow icon" />Back to Farm List
                </NavLink>

                <ul className="farmList__list">
                    {farmList.map((farm) => (
                        <li className="farmList__farm-item">
                            <img className="farmList__image" src={farm.farmImageSource} />
                            <Link className="farmList__item-link" to='/farms/{farm.id}'>
                                <h3 className="farmList__farmName">{farm.farmName}</h3>
                            </Link>    
                            <p className="farmList__farmRegion">{farm.region}</p>
                            
                        </li>
                        
                    ))}
                </ul>

            </div>

        )
    }
}