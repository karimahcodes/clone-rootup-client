import './SignupScreen.scss';
import { useEffect, useState } from "react";
import axios from "axios";
import UserProfilePage from '../../Pages/UserProfilePage/UserProfilePage';
import { Link } from 'react-router-dom';


export default function SignupScreen() {
    const baseUrl = process.env.REACT_APP_API_URL;
     const signupUrl = `${baseUrl}/signup`;
     // const loginUrl = `${baseUrl}/login`;   
    /*<div className='loginScreen'>
                <h1 className='loginScreen__header'>Join rootUP</h1>
                <form action='/signup' className='form' method='POST'>
                    <div className="form__field-group">
                        <label for="username" className='form__label'>Username: </label>
                        <input id="username" className="form__input" type="text" name="username" placeholder="e.g. myusername" required />
                    </div>
    
                    <div className="form__field-group">
                        <label for="password" className='form__label'>Password: </label>
                        <input id="password" className="form__input" type="password" name="password" placeholder="e.g.: Pa$sw0rd" required />
                    </div>
    
                    <div className="form__field-group">
                        <label for="email" className='form__label'>Email: </label>
                        <input id="email" className="form__input" type="email" name="email" placeholder="e.g. future-apprentice@newfarmer.com" required />
                    </div>
    
                    <button type="submit" className='form__button'>Sign me up</button>
                    <Link to="/LoginScreen" className='form__rerender' >Or Login</Link>
                </form>
            </div>
        */

    const [isSignedUp, setIsSignedUp] = useState(false);

    // const [isLoggedIn, setIsLoggedIn] = useState(false);
    // const [isLoginError, setIsLoginError] = useState(false);
    // const [errorMessage, setErrorMessage] = useState("");

    //signup with email and username
    const handleSignup = (e) => {
        e.preventDefault();

        axios
            .post(signupUrl, {
                username: e.target.username.value,
                email: e.target.email.value,
                password: e.target.password.value,
            })
            .then(() => {
                setIsSignedUp(true);
            });
            
    };

    // const toLoginScreen(){
    //     if(isSignedUp){
    //     Navigate();
    //     } else {}
    // }
    // if (!isSignedUp)

        return (
            // const renderSignUp = () => (
                <div className='loginScreen'>
                    <h1 className='loginScreen__header'>Join rootUP</h1>
                    <img src='/'className='signup__logo' alt='circular rootUP logo of an oak tree above and below the '/>
                    <form onSubmit={handleSignup} className='form'>
                        <div className="form__field-group">
                            <label for="username" className='form__label'>Username: </label>
                            <input id="username" className="form__input" type="text" name="username" placeholder="e.g. myusername" required />
                        </div>

                        <div className="form__field-group">
                            <label for="password" className='form__label'>Password: </label>
                            <input id="password" className="form__input" type="password" name="password" placeholder="e.g.: Pa$sw0rd" required />
                        </div>

                        <div className="form__field-group">
                            <label for="email" className='form__label'>Email: </label>
                            <input id="email" className="form__input" type="email" name="email" placeholder="e.g. future-apprentice@newfarmer.com" required />
                        </div>

                        <button type="submit" className='form__button' /*onClick={toLoginScreen}*/>Sign me up</button>
                        <Link to="/login" className='form__rerender' >Or Login</Link>
                    </form>
                </div>

            // )
        );

    /*   //login with username only
       const handleLogin = (e) => {
           e.preventDefault();
   
           axios
               .post(loginUrl, {
                   username: e.target.username.value,
                   password: e.target.password.value,
               })
               .then((response) => {
                   sessionStorage.setItem("JWToken", response.data.token); //JWT to client's session storage
                   setIsLoggedIn(true);
                   setIsLoginError(false);
                   setErrorMessage("");
               })
               .catch((error) => {
                   setIsLoginError(true);
                   setErrorMessage(error.response.data.error.message);
               });
       };
   
       const renderSignUp = () => (
           <div className='loginScreen'>
               <h1 className='loginScreen__header'>Join rootUP</h1>
               <form onSubmit={handleSignup} className='form'>
                   <div className="form__field-group">
                       <label for="username" className='form__label'>Username: </label>
                       <input id="username" className="form__input" type="text" name="username" placeholder="e.g. myusername" required />
                   </div>
   
                   <div className="form__field-group">
                       <label for="password" className='form__label'>Password: </label>
                       <input id="password" className="form__input" type="password" name="password" placeholder="e.g.: Pa$sw0rd" required />
                   </div>
   
                   <div className="form__field-group">
                       <label for="email" className='form__label'>Email: </label>
                       <input id="email" className="form__input" type="email" name="email" placeholder="e.g. future-apprentice@newfarmer.com" required />
                   </div>
   
                   <button type="submit" className='form__button'>Sign me up</button>
                   <button type="button" className='form__rerender' onClick={renderLogin}>Or Login</button>
               </form>
           </div>
   
       );
   */

    /* const renderLogin = () => (
         <div className='loginScreen'>
             <h1 className='loginScreen__header'>Login rootUP</h1>
             <form onSubmit={handleLogin} className='form'>
                 <div className="form__field-group">
                     <label for="username" className='form__label'>Username: </label>
                     <input id="username" className='form__input' type="text" name="username" placeholder="e.g. myusername" required />
                 </div>
 
                 <div className="form__field-group">
                     <label for="password" className='form__label'>Password: </label>
                     <input id="password" className='form__input' type="password" name="password" placeholder="e.g.: Pa$sw0rd" required />
                 </div>
                 <button type="submit" className='form__button'>Login</button>
                 <button type="button" className='form__rerender' onClick={renderSignUp}>Or SignUp</button>
             </form>
         </div>
 
     );
 
     if (!isSignedUp) return renderSignUp();
     if (!isLoggedIn) return renderLogin();
 
     return (
         <div className='profile'>
             <UserProfilePage />
         </div>
 
     )
 */
}