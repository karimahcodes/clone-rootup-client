import './FarmSearchPage.scss';
import {Link} from 'react-router-dom';

export default function FarmSearchPage(){

    return (
        <div className='browse'>
            
            <section className='browse__section--farmtype'>
                <Link className='browse__link--farmtype' to="/categories/farmtypes">
                    <h2 className='browse__subheader'>Search by Type of Farm Production</h2>
                </Link>
            </section>
            <section className='browse__section--farmtype'>
                <Link className='browse__link--farmtype' to="/categories/communities">
                    <h2 className='browse__subheader'>Search by Community of Focus</h2>
                </Link>
            </section>
            <section className='browse__section--farmtype'>
                <Link className='browse__link--farmtype' to="/categories/regions">
                    <h2 className='browse__subheader'>Search by Region</h2>
                </Link>
            </section>
        </div>
    )
}
