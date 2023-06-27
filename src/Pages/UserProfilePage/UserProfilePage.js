import './UserProfilePage.scss';
import userImg from '../../assets/images/user1.jpg'
export default function UserProfilePage() {

    return (
        <div className='user'>
            <div className='user__image-div'>
                <img  className="user__image"src={userImg} alt="Ann Apprentice sits in a wheelborrow and smiles at the camera " />
            </div>

            <div className='user__details'>
                <h2> *Coming Soon* </h2>
                <section className='user__name'>
                    <h3 className='user__subheading'>User Name:</h3>
                    <p className='user__text'>Anne Apprentice</p>
                    <h3 className='user__subheading'>Pronouns:</h3>
                    <p className='user__text'>She/They</p>
                </section>
                <section>
                    <h3 className='user__subheading'>Descriptive Bio</h3>
                    <p className='user__text'>I'm seeking a farm apprenticeship in New York, New Jersey or Philadelphia. I'd like to be paired with a rootUP Farmentor as well, and hope to one day form my own farm cooperative with other farmers I meet throughout my learning journey. One day, when I have my own farm, I'll host an apprenticeship for new farmers like myself.</p>
                </section>
                <section>
                    <h3 className='user__subheading'>Previous relevant experience:</h3>
                    <p className='user__text'>Inexperienced farm apprentice with some construction trades knowledge. Can't wait to learn!</p>
                </section>
            </div>
        </div>

    )

}