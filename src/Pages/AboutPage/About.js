import './About.scss';
import hackett4 from '../../assets/images/site-images/Derby_Hackett4.png'
export default function About() {
    return (
        <div className='about'>
            <div className='about__hero-image'>
            </div>
            <section className='about__text-content'>
                <section className='about__background'>
                    <section className='about__about-us'>
                        <section className='about__about-text'><h2 className='about__header'>About rootUP
                            </h2>
                            <p className='about__description'> rootUP promotes intentionally affirming learning spaces for aspiring BIPOC farmers, especially black farmers who identify as women and/or members of the LGBTQ community. It has a long-term vision for fostering an ecosystem in which internal resources can be more easily identified, developed and accessed by all.</p>

                            <p className='about__description'>The primary goals are
                                <ul className='about__goals'>
                                    <li>to increase the pool of farmers from ethnically diverse backgrounds to better reflect the nation's demographics,</li>
                                    <li>to improve food sovereignty for BIPOC (Black, Indigenous, and People of Color) and QTBIPOC (Queer and Trans BIPOC) communities and</li>
                                    <li>to connect farmers to safe(r) identify-affirming learning resources (i.e. apprenticeships, mentors, or skill-shares with peers, etc.) at different stages of their farm journey.</li>
                                </ul>
                            </p>

                            <p className='about__description'>Recognizing that many farm training programs in the US do not adequately address the historical precedent and risks of sexual, psychological, physical, and spiritual violence against BIPOC, female-bodied, and LGBTQ apprentices, we hope to encourage members of the farming and gardening communities to design intentionally affirming learning spaces to increase the overall safety of these programs for farmers from marginalized groups.
                            </p>
                        </section>
                        {/* <figure className='about__about-figure'> 
                            <img className='about__about-img' src={hackett4} alt="a black woman wearing a tiara beams with joy in an imagined watermelon derby race. seated behind her are two elated black women in red headwraps."/>
                            <figcaption className='about__img-caption'>An imagined Watermelon Derby by Curry Hackett and Midjourney (AI Tool)</figcaption>
                    
                        </figure> */}


                    </section>
                    <section className='about__problem-statement'>
                        <h3 className="about__header">Background:
                        </h3>
                        <p className="about__description">
                            In the US it is often cited that only less than 2% of all privately owned land is held by BIPOC stewards, with those numbers being even smaller for Black people, BIPOC women, and QTBIPOC (Queer or Trans BIPOC) farmers.
                        </p>
                        <p className="about__description">
                            The aging population of farmers occupying most of US farmland differs greatly from the increasingly diverse population of younger Americans, many of whom would be concerned for their safety in predominantly white (and male-led) rural learning spaces where traditional farm apprenticeships are held.
                            And although many of their living elders (and other potential farmmentors) may have migrated from areas (domestically or abroad) where they experienced some connection to agriculture or land/nature stewardship practices to cities in pursuit of insulation from societal challenges, this has disrupted the transmission of critical agricultural knowledge to a younger generation of farmers.
                        </p>
                    </section>
                </section >

                <section className='about__guide-section'>
                    <section className="about__usertypes">
                        <h3>Description of User Types:</h3>
                        <p className='about__description'><span class="bold">APPRENTICE</span>Apprentices are new farmers applying to a learning opportunity on the app (i.e. apprenticeship or farmentorship).
                        </p>


                        <p className='about__description'><span class="bold">HOST FARM</span> Host Farms provide safer learning opportunities to apprentices in the form of structured programming that is culturally affirming of BIPOC of all gender and sexual identities. They may host learning opportunities in person, virtually, or in a hybrid (live and virtual) format and may publish photos, program descriptions, eligibility criteria and application instructions on their profiles.
                        </p>

                        <h5>*Coming Soon*</h5>
                        <p className='about__description'><span class="bold">COOPERATIVE</span> Cooperative members are farmers who want to connect with others on the app around shared goals for farming in the community collectively. They may be using the app to form a cooperative, to purchase land together or to complete another project in pursuit of food sovereignty.
                        </p>

                        <p className='about__description'><span class="bold">FARMENTOR</span> Farmentors offer to share their knowledge in one-to-one relationships with Apprentices or Cooperative members. They may have knowledge about any topic or skill like irrigation/plumbing, securing land, farming in specific climates, running community programs, raising animals, etc.
                        </p>
                    </section>

                    <section className='section__regions'>
                        <h3>Current Regions</h3>
                        <ul className='section__list'>
                            <li className='section__item'>(US-NE) NorthEast</li>
                            <li className='section__item'>(US-SE) SouthEast</li>
                            <li className='section__item'>(US-MW) Midwest</li>
                            <li className='section__item'>(US-W) West/Northwest (includes Alaska)</li>
                            <li className='section__item'>(US-SO) South</li>
                            <li className='section__item'>(US-PO) Pacific Ocean (includes Hawaii and other occupied US territories)</li>
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
                    <p className='about__description'> Here's what to look forward to from future releases of the app:
                    </p>
                    <ul className='about__list'>
                        <li>Search by Skilled Trades</li>
                        <li>New Farm submission form</li>
                        <li>Apprentice user profiles and in-app application submission</li>
                        <li>tools for past apprentices to inform new ones of the quality of their program experiences by leaving feedback and ratings. This is to encourage transparency and accountability between program participants and programs.</li>
                        <li>Farmmentor user profiles and 1-to-1 matching </li>
                        <li>Cooperative user profiles for more experienced farmers forming coops or collective actions </li>
                    </ul>
                    <section className='section__feedback'>
                        <h3>How to submit feedback, additional farms, and requests to contribute:</h3>
                        <p> rootup.app@gmail.com</p>
                    </section>
                </section>
            </section>
        </div >

    )

}