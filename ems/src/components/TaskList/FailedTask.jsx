import React from 'react'

const FailedTask = ({data}) => {
  return (
    <div className='flex-shrink-0 h-full w-[300px] bg-yellow-400 rounded-xl p-5'>
            <div className='flex items-center justify-between'>
                <h3 className='bg-red-600 text-sm rounded px-3 py-1'>{data.category}</h3>
                <h4 className='text-sm'>{data.date}</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>{data.title}</h2>
            <p className='text-sm mt-2'>{data.description}</p>
            <div className='mt-4'>
                <button className='w-full bg-red-600 text-white rounded-md py-2 px-4 hover:bg-red-500'>Failed</button>
            </div>
    </div>
  )
}

export default FailedTask