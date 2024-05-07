import React from 'react'

const FollowUs = () => {
  return (<>
    <h1 className='block text-4xl  relative top-36 left-52
     font-sans text-slate-500  bg-slate-200'>FOLLOW US ON SOCIAL MEDIA</h1>
    <div className='outerContainer h-screen bg-slate-200 rounded  flex justify-around items-center p-10'>
            <div className='Section1 w-2/4 h-3/5  rounded-3xl' style={{ backgroundImage: `url(/followus.jpg)`, backgroundSize: "cover", backgroundRepeat: 'no-repeat' }}>
            </div>
            <div>
                <div className='Detail1'>
                    <ul  className='text-2xl font-sans font-extrabold flex-col cursor-pointer'>
                      <li>FACEBOOK</li>
                      <hr class="border-t border-black w-full  my-2"/>
                      <li>INSTAGRAM</li>
                      <hr class="border-t border-black w-full  my-2"/>
                      <li>TWITTER</li>
                      <hr class="border-t border-black w-full  my-2"/>
                      <li>YOUTUBE</li>
                      <hr class="border-t border-black w-full  my-2"/>
                      </ul>
                </div>
            </div>


        </div>
        </>
  )
}

export default FollowUs