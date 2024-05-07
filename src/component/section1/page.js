import React from 'react'

const Section1 = () => {
    return (
        <div className='outerContainer h-screen bg-slate-50 rounded  flex justify-around items-center p-10'>
            <div className='Section1 w-9/12 h-3/5  rounded-3xl' style={{ backgroundImage: `url(/pexels-photo-3183197.jpeg)`, backgroundSize: "cover", backgroundRepeat: 'no-repeat' }}>
            </div>
            <div>
                <div className='Detail1 flex-col ml-5 '>
                    <div className='text-5xl text font-extrabold font-sans'>About Us</div>
                    <div className=' mt-4 text-xl'>Indulge in rich aromas and expertly crafted brews at our cozy coffee haven, where every sip is a journey into pure bliss.</div>
                    <button
                        className="bg-orange-400 px-4 py-2 mt-5 rounded-2xl text-white text-2xl font-bold hover:bg-orange-500 focus:ring-4 focus:bg-orange-500">Learn
                        more</button>
                </div>
            </div>


        </div>
    )
}

export default Section1