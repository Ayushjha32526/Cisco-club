import React from 'react';
import Image from 'next/image';
import "./page.css"
const Abouts = () => {
  return (
    <div>
    
      <div>
      <Image
        src="/icu.jpeg"
        alt="Code"
        className=" no2"
        width={200}
        height={24}
      />
      </div>
      <Image
        src="/emergency.jpeg"
        alt="WEB"
        className="no1 "
        width={230}
        height={24}
      />
       <br></br>
      <br></br>
       
      <div>
        <h1 className='text-bold text-5xl text-purple-900 text-center ml-16'>Emergency Care</h1>
        <h1 className='text-bold text-2xl  text-center ml-16'>24/7 emergency medical care for patients with critical conditions or injuries.
          </h1>
      </div> 
      <br></br>
      <br></br>
      <div>
        <h1 className='text-bold text-5xl text-bold text-purple-900 text-right mr-16'>Surgical Services</h1>
        <h1 className='text-bold text-2xl  text-right mr-16'> Operating rooms and surgical teams for various surgical procedures,<br></br> including elective surgeries and emergency surgeries.
          </h1>
      </div>
      <br></br>
      <br></br>
      <div>
        <h1 className='text-bold text-5xl  text-purple-900 text-center mr-16'>Intensive Care Units (ICUs)</h1>
        <h1 className='text-bold text-2xl  text-center mr-16'> Critical care services for patients with severe illnesses or injuries,<br></br> often requiring advanced monitoring and life support.</h1>
      </div>
      <br></br>
      <br></br>
      <div>
        <h1 className='text-bold text-5xl text-bold text-purple-900 text-right mr-16'>Laboratory Services</h1>
        <h1 className='text-bold text-2xl  text-right mr-16'> Clinical laboratory testing for blood, urine, <br></br> and other specimens to aid in diagnosis and treatment planning.
          </h1>
      </div>
    </div>
    
    
    
  );
};

export default Abouts;
