import React, { use } from 'react';
import { Link } from 'react-router';
import singinLottie from '../../assets/loities/singin.json'
import Lottie from 'lottie-react';
import { AuthContex } from '../../context/AuthContex';
import SocialLogin from '../SocialLogin/SocialLogin';

const Singin = () => {
    const { singInUser } = use(AuthContex)

    const handleLogIn = e => {
        e.preventDefault()
        const form = e.target;

        const email = form.email.value
        const password = form.password.value
        console.log(email, password)

        singInUser(email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user)
                alert("login suceessful")
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage)
            });


    }


    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div>
                    <Lottie style={{ width: '600px' }} animationData={singinLottie} loop={true}></Lottie>
                </div>

                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <h1 className="text-5xl font-bold">SingIn now!</h1>
                        <form onSubmit={handleLogIn} className="fieldset">

                            <label className="label">Email</label>
                            <input type="email" name="email" className="input" placeholder="Email" />
                            <label className="label">Password</label>
                            <input type="password" name="password" className="input" placeholder="Password" />
                            <div><a className="link link-hover">Forgot password?</a></div>
                            <button className="btn btn-neutral mt-4">SingIn</button>
                            <SocialLogin></SocialLogin>
                        </form >

                        <p className="text-center text-sm text-gray-600">
                            Already have an account?{" "}
                            <Link to="/register" className="text-blue-600 hover:underline">
                                Register
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Singin;