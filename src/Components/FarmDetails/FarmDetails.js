import './FarmDetails.scss';


export default function FarmDetails(){

    return (
        <main className="details">
            
        <div className="details__location">
            <h3 className="details__text details__text---location">{farm.region}</h3> {/**pull from farm object */}
            <img className="details__map" src={regionSrc} alt="map of farm address"/>
        </div>
        </main>
    )
}
