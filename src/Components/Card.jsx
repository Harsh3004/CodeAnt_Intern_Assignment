import React from 'react'
import { GoDatabase } from "react-icons/go";

const Card = (repo) => {
    const {title, security, technology, memory, days} = repo.repo
    return (
        <div className='py-4 md:py-6 border-b-[1px] border-b-[#D5D7DA] hover:bg-[#F5F5F5]'>
            <div className='px-6 flex flex-col md:gap-3'>
                <div className='flex gap-2'>
                    <h2 className='font-medium text-xl text-privacy-txt'>{title}</h2>
                    <div className='pl-2 pr-2.5 py-0.5 flex items-center justify-center bg-[#EFF8FF] rounded-full border border-[#B2DDFF]'>
                        <p className='text-[#175CD3] text-sm'>{security}</p>
                    </div>
                </div>

                <div className='flex gap-10'>
                    <div className='flex items-center gap-2'>
                        <span className='text-privacy-txt'>{technology}</span>
                        <div className='w-2 h-2 rounded-full bg-[#1570EF]'></div>
                    </div>

                    <div className='flex items-center gap-2'>
                        <GoDatabase />
                        <span className='text-privacy-txt'>{memory} KB</span>
                    </div>

                    <div className='flex items-center gap-2'>
                        <span className='text-privacy-txt'>Updated {days} days ago</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card