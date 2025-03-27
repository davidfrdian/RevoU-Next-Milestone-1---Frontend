import React from 'react';
import StarRatings from '../Produk/StarRatings';
import { ThumbUp } from '@mui/icons-material';
import imageProfile from '../../assets/ProfileImage.png';

function UserReview({ 
    ratings = 0, height = 0, weight = 0, bust = 0, waist = 0, hips = 0 , 
    likes = 0, desc, userImage, picture

}) {
  return (
    <div className='flex flex-col justify-center items-center'>
        <div className='flex flex-col justify-center items-cente w-[349px] mt-1'>
        <div className='w-[350px] h-[2px] bg-[#E5E5E5]'></div>
        <div className='flex justify-between mt-4'>

            <div className='flex gap-x-2'>
                <img 
                src={userImage || imageProfile}
                alt="" 
                className="w-10 h-10 rounded-full object-cover"
                />

                
                <div className='flex flex-col'>
                    <StarRatings rating={ratings} size={16} />
                    <div className='flex gap-x-2 mt-1'>
                    <p className=' text-[9px] text-gray-500'>{`${height} CM ${weight} KG`}</p>
                        <p className=' text-[9px] text-gray-500'>{ `${bust}/${waist}/${hips} CM`}</p>
                    </div>
                </div>
            </div>

            <div className='flex gap-x-1 justify-center items-center'>
                <ThumbUp sx={{color: '#075128', width: 16, height: 16}}/>
                <p className='text-[12px]'>({likes})</p>
            </div>

        {/* Tampilkan gambar review jika ada */}
        {picture && (
          <div className='mt-3 w-full'>
            <img 
              src={picture} 
              alt="Review" 
              className='w-full h-auto rounded-md border border-gray-200'
            />
          </div>
        )}
        
        </div>
        <p className='text-[12px] text-justify mt-4'>
           {desc}
        </p>

        </div>
    </div>

  )
}

export default UserReview