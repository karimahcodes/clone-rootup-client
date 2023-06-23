import './About.scss';

export default function About(){
    return(
        <div className='about'>
            <h2>About the rootUP app</h2>
            <p></p>
            
            <section className='section'>

                <section className='section__regions'> 
                    <h3>Current Regions</h3>
                </section>

                <section className='section__communities'> 
                    <h3>Communities currently represented</h3>
                </section>

                <section className='section__feedback'> 
                    <h3>How to submit feedback and requests:</h3>
                </section>

            </section>
        </div>

    )

}