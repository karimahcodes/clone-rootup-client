import './FarmSearchPage.scss';
import {Link} from 'react-router-dom';

//child components: FarmTypesPage, RegionsPage, CommunitiesPage
//AKA BROWSE Farms page
export default function FarmSearchPage(){

    return (
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
        </div>
    )
}
