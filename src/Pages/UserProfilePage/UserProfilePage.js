import './UserProfilePage.scss';
import userImg from '../../assets/images/user1.jpg'
export default function UserProfilePage() {

    return (
        <div className='user'>

            <div className='user__profile-wrapper'>
                <div className='user__image-div'>
                    <img className="user__image" src={userImg} alt="Ann Apprentice sits in a wheelborrow and smiles at the camera " />
                </div>

                <div className='user__details'>
                    <h2> *Coming Soon* </h2>
                    <section className='user__stats'>
                        <div className='user__stats-div'>
                            <h3 className='user__subheading'>User Name:</h3>
                        <p className='user__text'>Anne Apprentice</p>
                        </div>
                        
                        <div className='user__stats-div'>
                        <h3 className='user__subheading'>Pronouns:</h3>
                        <p className='user__text'>She/They</p>
                        </div>

                        <div className='user__stats-div'>
                        <h3 className='user__subheading'>Region:</h3>
                        <p className='user__text'>US-Northeast</p>
                        </div>

                        <div className='user__stats-div user__usertype'>
                            <h3 className='user__subheading'>Usertype:</h3>
                            <p className='user__text'>Apprentice</p>
                        </div>
                    </section>
                    <section className='user__bio'>
                        <h3 className='user__subheading'>Descriptive Bio:</h3>
                        <p className='user__text'>I'm seeking a farm apprenticeship in New York, New Jersey or Philadelphia. I'd like to be paired with a rootUP Farmentor as well, and hope to one day form my own farm cooperative with other farmers I meet throughout my learning journey. One day, when I have my own farm, I'll host an apprenticeship for new farmers like myself.</p>
                    </section>
                    <section className='user__career'>

                        <section className='user__experience'>
                            <h3 className='user__subheading'>Previous relevant experience:</h3>
                            <p className='user__text'>Inexperienced farm apprentice with some construction trades knowledge. </p>
                            <p className='user__text'>I love to prune and weed. </p>
                            <p className='user__text'>I've volunteered at a seed library. </p>
                            <p className='user__text'>Can't wait to learn!</p>
                        </section>

                        <section className='user__seeks'>
                            <h3 className='user__subheading'>Seeking</h3>
                            <ul className='user__list'>
                                <li>Paid Apprenticeship</li>
                                <li>Lodging</li>
                                <li>Farmentor</li>
                                <li>Training in Fruit and Vegetable Farming</li>
                            </ul>
                        </section>
                    </section>
                </div>
            </div>
        </div>

    )

}