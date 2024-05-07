import React from 'react';

const MainSection = () => {
    return (
        <><main className="bg-slate-200 h-screen w-auto flex justify-between">
            <section className="ml-44 mt-52">
                <h1 className="font-extrabold text-8xl">Momento Cafe</h1>
                <h1 className="my-6 text-6xl"> Start Your Day With</h1><h1 className="text-orange-400 font-extrabold my-2 text-5xl">Coffee</h1>
                
                <h1 className="my-2 text-2xl ml-1">And Chill</h1>
                <button
                    className="bg-orange-400 px-4 py-2 mt-5  rounded-2xl text-white text-2xl font-bold hover:bg-orange-500 focus:ring-4 focus:bg-orange-500">Find
                    Us</button>
                <button
                    className="bg-orange-400 px-4 py-2 ml-5 rounded-2xl text-white text-2xl font-bold hover:bg-orange-500 focus:ring-4 focus:bg-orange-500">Know
                    more</button>
            </section>
            <div>
                <img src="bg-3.png" alt="coffee pic" />
            </div>
        </main></>
    );
};

export default MainSection
