import React from 'react'
import Image from 'next/image'
import "./page.css"
const About = () => {
  
  return (
    <>
    
    <div>
       
        <div>
        <Image src="/icu.jpeg"
        alt='Hackathon'
        className='rounded-md filter opacity-40 '
        width={1700} height={50}
       ></Image>
       <div className="absolute left-20 top-80">
       <h1 className='text-8xl font-bold text-purple-800'>
       2024 Best of <br></br> VHELP </h1>
       </div>
       
       <div className="absolute left-60 bottom-40">
        
        <h1 className='text-4xl font-bold  text-purple-800'>
            ~ By VIT BHOPAL
        </h1>
       </div>
     <div className='flex absolute bottom-1 text-4xl font-bold ml-8  text-purple-900'>
        <h1 className='ml-4 border-2 border-purple-800 border-round rounded-full'>Safety</h1>
        <h1 className='ml-4 border-2 border-purple-800 border-round rounded-full'> Assurance</h1>
        <h1 className='ml-4 border-2 border-purple-800 border-round rounded-full'>Equiped</h1>
       <br></br>
        <div>
       <h1 className='ml-4 '> Click on about to know more and contact to reach us</h1>
     </div></div>
     
       </div>
        

        <Image src="/hc.webp"
        alt='Scanner'
        className='ok7  '
        width={440} height={800}
       ></Image>

       
    </div>
    
    
    </>
 
  )
}

export default About