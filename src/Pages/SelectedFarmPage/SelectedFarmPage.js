import { useNavigate } from 'react-router-dom';
import './SelectedFarmPage.scss';
// temporarily importing instead of doing axios call
import imgSrc from '../../assets/images/almond-orchard.jpg';
import FarmDetails from '../../Components/FarmDetails/FarmDetails';

export default function SelectedFarmPage(){
    let navigate = useNavigate() 

    // const farm=
    
    return (
        <div className='farm'>
            
            <img className="farm__banner-image" src={imgSrc} alt="almond orchard" />
            <FarmDetails farm={farm}/>

        </div>
   )
}
