import React from 'react';
import { motion } from "motion/react"
import team1 from '../../assets/team/office team.jpg'
import team2 from '../../assets/team/devoloper team.jpg'

const Banner = () => {
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className='flex-1 '>
                    < motion.img
                        animate={{ y: [100, 150, 100] }}
                        transition={{ duration: 5, repeat: Infinity }}
                        className='max-w-sm rounded-t-4xl rounded-br-4xl border-blue-400 border-s-8 border-b-8' src={team2} alt="" />
                    < motion.img
                        animate={{ y: [100, 150, 100] }}
                        transition={{ duration: 10, repeat: Infinity }}
                        className='max-w-sm rounded-t-4xl rounded-br-4xl border-blue-400 border-s-8 border-b-8' src={team1} alt="" />


                </div>
                <div className='flex-1'>

                </div>
                <div>
                    {/* < motion.h1
                        animate={{
                            rotate: 180,
                            transition: { duration: 4 }

                        }}
                        className="text-5xl font-bold">Latest Jobs For You!</motion.h1> */}

                    < motion.h1
                        initial={{ scale: 0 }}
                        animate={{ scale: 1, transition: { duration: 4 } }}


                        className="text-5xl font-bold"> Remot <motion.span animate={{
                            color: ['#ff5733', '#b5ff33', '#338aff'],
                            transition: { duration: 4, repeat: Infinity }

                        }} >
                            Jobs</motion.span> For You!</motion.h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;