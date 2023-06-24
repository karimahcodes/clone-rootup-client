import './FarmSearchPage.scss';
import {Link} from 'react-router-dom';

//child components: FarmTypesPage, RegionsPage, CommunitiesPage

export default function FarmSearchPage(){




    return (
        <div className='browse'>
            
            <section className='browse__section--farmtype'>
                <Link className='browse__link--farmtype' to="/browse/farmtypes">
                    <h2 className='browse__subheader'>Search by Type of Farm Production</h2>
                </Link>
            </section>
            <section className='browse__section--farmtype'>
                <Link className='browse__link--farmtype' to="/browse/communities">
                    <h2 className='browse__subheader'>Search by Community of Focus</h2>
                </Link>
            </section>
            <section className='browse__section--farmtype'>
                <Link className='browse__link--farmtype' to="/browse/regions">
                    <h2 className='browse__subheader'>Search by Region</h2>
                </Link>
            </section>
        </div>
    )
}
