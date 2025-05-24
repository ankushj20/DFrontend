// import React from 'react'

// const SideNavTop = () => {
//   return (
//         <div className="top w-full h-[28%] flex flex-col items-center justify-center">
//                 <img className='w-[50%]' src="\image\4ea98108e0dd10a1dc417a24e32232e2-removebg-preview.png" alt="" />
//                 <h1 className="text-4xl">जनहित मिशन</h1>
//         </div>  
//   )
// }

// export default SideNavTop
import React from 'react';

const SideNavTop = () => {
  return (
    <div className="top w-full h-[28%] flex flex-col items-center justify-center p-4">
      <img
        className="w-24 md:w-32 lg:w-1/2 max-w-[150px] object-contain"
        src="/image/4ea98108e0dd10a1dc417a24e32232e2-removebg-preview.png"
        alt="Logo"
      />
      <h1 className="text-xl md:text-2xl lg:text-4xl text-center mt-2">
        जनहित मिशन
      </h1>
    </div>
  );
};

export default SideNavTop;
