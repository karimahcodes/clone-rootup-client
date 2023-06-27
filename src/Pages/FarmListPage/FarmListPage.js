import './FarmListPage.scss';
import { NavLink, Link, useParams, useSearchParams, useNavigate } from "react-router-dom";
import axios from 'axios';
import { useEffect, useState } from "react";
import backArrow from '../../assets/icons/arrow-back_icon.svg';

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
        // console.log(searchParams.toString())
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
                    <img className="farmList__back-arrow" src={backArrow} alt="back arrow icon" />Back to Subcategory List
                </NavLink>

                <ul className="farmList__list">
                    {farmList.map((farm) => (

                        <li className="farmList__farm-item">
                            <img className="farmList__image" src={`http://localhost:8080/assets/images/${farm.farmImageSource}`} alt="farmer photo" />
                            <div className='farmList__link-region'>
                                <Link className="farmList__item-link" to={farm.id} relative="path">
                                    <h3 className="farmList__farmName">{farm.farmName}</h3>
                                </Link>
                                <p className="farmList__farmRegion"><span className='farmList__span'>Region:</span> {farm.region}</p>
                            </div>
                        </li>

                    ))}
                </ul>

            </div>

        )
    }
}