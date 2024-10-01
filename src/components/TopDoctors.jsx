import React, { useContext } from 'react'
// import { doctors } from '../assets/assets_frontend/assets' // ---> we can use it from useContext now 
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext';

const TopDoctors = () => {

    const navigate = useNavigate();
    const {doctors} = useContext(AppContext) // use context for doctors 

  return (
    <div className='flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10 '>
        <h1 className=' text-3xl font-medium '>Top Doctors to Book</h1>
        <p className='sm:w-1/3 text-center text-sm'>Simply browse through our extensive list of trusted doctors.</p>
        {/* added gridTemplateColumns for speciality menu in tailwind.config.js file */}
        <div className='w-full grid grid-cols-auto gap-4 pt-5 gap-y-6 px-3 sm:px-0'>
            {doctors.slice(0,10).map( (item, index) => (
                <div onClick={() => {navigate(`/appointments/${item._id}`)}} key={index} className='border border-blue-200 rounded-xl overlflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500s'>
                    <img src={item.image} alt="" className='bg-blue-50 rounded-t-xl'/>
                    <div className='p-4'>
                        <div className='flex items-center gap-2 text-sm text-center text-green-500'>
                            <p className='w-2 h-2 bg-green-500 rounded-full'></p>
                            <p>Available</p>
                        </div>
                        <p className='text-gray-900 text-lg font-medium'>{item.name}</p>
                        <p className='text-gray-600 text-sm'>{item.speciality}</p>
                    </div>
                </div>
            ))}
        </div>
        <button onClick={() => { navigate('/doctors'); scrollTo(0,0) }} // whenever I click on more button, /doctors page gets opened and it scrolls to the top bcos of scrollTo ----> add smooth scroll in index.html
        className='bg-blue-50 text-gray-600 px-12 py-3 rounded-full mt-4'>more</button>
    </div>
  )
}

export default TopDoctors