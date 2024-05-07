import React from 'react'

const Section2 = () => {
    return (
        <div className='outerContainer h-screen bg-slate-50 rounded  flex justify-around p-10 items-center'>

            <div>
                <div className='Detail1 flex-col ml-5'>
                <div className=' mb-3 ml-1 text-gray-500 text-sm'>LIVE COFFEE MAKING PROOCESS</div>
                    <div className='text-5xl text font-extrabold font-sans '>We Telecast Our Coffee Making Live</div>
                    <div className=' mt-4 text-xl'>Live coffee artistry at Momento Café: Witness skilled baristas craft each cup, revealing the essence of coffee in every pour.</div>
                    <button
                        className="bg-orange-400 px-4 py-2 mt-5 rounded-2xl text-white text-2xl font-bold hover:bg-orange-500 focus:ring-4 focus:bg-orange-500">Learn
                        more</button>
                </div>
            </div>
            <div className='Section2 w-9/12 h-3/5 rounded-3xl' style={{backgroundImage:`url(/coffemaking.jpg)`, backgroundSize:"cover",backgroundPosition:'center'}}>
            </div>

        </div>
    )
}

export default Section2