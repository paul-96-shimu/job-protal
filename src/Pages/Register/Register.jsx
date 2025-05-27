import Lottie from 'lottie-react';
import React, { use } from 'react';
import registerLottie from '../../assets/loities/register.json'
import { AuthContex } from '../../context/AuthContex';
import { Link } from 'react-router';
import SocialLogin from '../SocialLogin/SocialLogin';


const Register = () => {

    const { createUser } = use(AuthContex)

    const handleregister = e => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value
        const email = form.email.value
        const password = form.password.value
        console.log(name, email, password)
        createUser(email, password)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                console.log(user)
                alert('registar successful')
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;


                console.log(errorCode, errorMessage, " errorMessage")

            });


    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div>
                    <Lottie style={{ width: '400px' }} animationData={registerLottie} loop={true}></Lottie>
                </div>

                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <h1 className="text-5xl font-bold">Register now!</h1>
                        <form onSubmit={handleregister} className="fieldset">
                            <label className="label">Name</label>
                            <input type="text" name="name" className="input" placeholder="name" />
                            <label className="label">Email</label>
                            <input type="email" name="email" className="input" placeholder="Email" />
                            <label className="label">Password</label>
                            <input type="password" name="password" className="input" placeholder="Password" />
                            <div><a className="link link-hover">Forgot password?</a></div>
                            <button className="btn btn-neutral mt-4">Register</button>

                            <SocialLogin></SocialLogin>
                        </form >

                        <p className="text-center text-sm text-gray-600">
                            Already have an account?{" "}
                            <Link to="/singin" className="text-blue-600 hover:underline">
                                sing in
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;

