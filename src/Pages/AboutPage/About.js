import './About.scss';

export default function About() {
    return (
        <div className='about'>
            <h2>About rootUP</h2>
            <p> rootUP began as a way to promote intentionally affirming learning spaces for aspiring BIPOC farmers, especially black farmers who identify as women and/or members of the LGBTQ community.</p>
                <p>Recognizing that many farm training programs in the US do not adequately address the historical precedent and risks of sexual, psychological, physical, and spiritual violence against BIPOC, female-bodied, and LGBTQ apprentices, we hope to encourage members of the farming and gardening communities to design intentionally affirming learning spaces to increase the overall safety of these programs for farmers from marginalized groups.</p>

               <p> Future releases of the app will include tools for past apprentices to inform new ones of the quality of their program experiences by leaving feedback and ratings. This is to encourage transparency and accountability between program participants.</p>

            <section className='section'>

                <section className='section__regions'>
                    <h3>Current Regions</h3>
                    <ul className='section__list'>
                        <li className='section__item'>(US-NE) NorthEast</li>
                        <li className='section__item'>(US-SE) SouthEast</li>
                        <li className='section__item'>(US-MW) Midwest</li>
                        <li className='section__item'>(US-W) West/Northwest</li>
                        <li className='section__item'>(US-S) South</li>
                        <li className='section__item'>(US-PO) Pacific Ocean</li>
                        <li className='section__item'>(US-CAR) Caribbean (Puerto Rico, US Virgin Islands)</li>
                    </ul>
                </section>


                <section className='section__communities'>
                    <h3>Communities currently represented</h3>
                    <ul className='section__list'>
                        <li className='section__item'>QTBIPOC</li>
                        <li className='section__item'>African Diaspora</li>
                        <li className='section__item'>Asian American Pacific Islander</li>
                        <li className='section__item'>Latin American</li>
                        <li className='section__item'>Arab/Middle Eastern/North African</li>
                        <li className='section__item'>Indigenous/Native American</li>
                    </ul>
                </section>







                <section className='section__feedback'>
                    <h3>How to submit feedback and requests:</h3>
                </section>

            </section>
        </div>

    )

}