import './FarmSearchPage.scss';
import { Link } from 'react-router-dom';
import backgroundImage from '../../assets/images/site-images/dandelion.png';
//child components: FarmTypesPage, RegionsPage, CommunitiesPage
//AKA BROWSE Farms page
export default function FarmSearchPage() {

    return (
        <div className='site-bg' style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundRepeat: 'no-repeat', backgroundPositionY:'-50rem', backgroundSize: 'cover', backgroundPosition: 'center'

        }}>
            <div className='browse-wrapper'>
                <h1 className='browse__header'> Browse Farms By Category</h1>
                <div className='browse'>
                    <section className='browse__section--farmtypes'>

                        <div className='browse__section--farmtypes-img'>
                        </div>

                        <Link className='browse__link--farmtypes' to="/browse/farmtypes">
                            <h2 className='browse__subheader'>Search by Type of Farm</h2>
                        </Link>
                    </section>
                    <section className='browse__section--communities'>

                        <div className='browse__section--communities-img'>
                        </div>

                        <Link className='browse__link--communities' to="/browse/communities">
                            <h2 className='browse__subheader'>Search by Community of Focus</h2>
                        </Link>
                    </section>
                    <section className='browse__section--regions'>

                        <div className='browse__section--regions-img'>
                        </div>

                        <Link className='browse__link--regions' to="/browse/regions">
                            <h2 className='browse__subheader'>Search by Region</h2>
                        </Link>
                    </section>
                    <section className='browse__section--trades'>

                        <div className='browse__section--trades-img'>
                        </div>

                        <Link className='browse__link--regions' to="/browse">
                            <h2 className='browse__subheader'>Search by Auxiliary Trades</h2>
                        </Link>
                    </section>
                </div>
            </div>
        </div>
    )
}
