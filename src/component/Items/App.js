const Items = () => {
  return (
    <div className='h-screen flex-col flex justify-center items-center bg-slate-200'>
      <div className='text-5xl font-extrabold font-sans '>Our Popular Items</div>
      <div
        className='h-20 w-full'
        style={{ backgroundImage: `url(/image-from-rawpixel-id-6307889-original.png)`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}
      ></div>
      <div className='flex justify-center gap-16 m-8 rounded-3xl'>
      <div
          className='border rounded-3xl h-96 w-96'
          style={{ backgroundImage: `url(/Expresso.jpg)`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        ></div>
        
         <div
          className='border rounded-3xl h-96 w-96'
          style={{ backgroundImage: `url(/mocha.jpg)`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        ></div>
        <div
          className='border rounded-3xl h-96 w-96'
          style={{ backgroundImage: `url(/Americano.jpg)`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        ></div>
        
      </div>
      <div>
        <ul className="text-orange-400 flex gap-96 text-2xl">
        <li>Expresso</li>
        <li>Mocha</li>
          <li>Americano</li> 
         
        </ul>
      </div>
    </div>
  );
};

export default Items;
