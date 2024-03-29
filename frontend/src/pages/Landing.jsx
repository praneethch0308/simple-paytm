import React from 'react'
import { Link, useNavigate } from 'react-router-dom'


const Landing = () => {
    const navigate= useNavigate();
  return <div>
    <nav>
    <div className='flex justify-between bg-white p-5 sticky'>
        <h1 className='ml-10 text-4xl pt-3 font-bold'>PayTM</h1>
        <div className='pt-3 mr-5'>
        <button onClick={()=>{
            navigate("/signin")
            
        }} className='bg-black text-white h-10 w-20 rounded-md mr-5 '>Sign In</button>

<button onClick={()=>{
            navigate("/signup")
            
        }} className='bg-black text-white h-10 w-20 rounded-md '>Sign up</button>
        </div>
        

    </div>

    </nav>
  
    
    <div className='flex justify-between'>
        <div className=' items-center pr-8 pt-20 mt-15 bg-black rounded-r-full'>
            <p className='text-4xl lg:text-6xl xl:text-6xl text-white font-bold ml-5 mt-10 text-left'> Money Transfer is now simple</p><br></br>
            <p className='text-3xl font-bold ml-8 text-white text-left mt-2'>Send Money to your Friends</p><br></br>

            <button onClick={()=>{
                navigate("/signup")
            }} className='bg-white text-black h-15 w-30 text-2xl pl-5 pr-5 pb-3 pt-2 rounded-full ml-10 mt-5'>Register now</button>


        </div>
        <div className="">
            <img src='./paytm landing.png'  alt='Paytm logo' className='h-100 w-100 '/>

        </div>

    </div>
      
    </div>
  
}

export default Landing
