import React from 'react'

const AcceptTask = ({data}) => {
  console.log(data.title)
  return (
    <div className='flex-shrink-0 h-full w-[300px] bg-red-400 rounded-xl p-5'>
        <div className='flex items-center justify-between'>
            <h3 className='bg-red-600 text-sm rounded px-3 py-1'>{data.category}</h3>
            <h4 className='text-sm'>{data.date}</h4>
        </div>
        <h2 className='mt-5 text-2xl font-semibold'>{data.title}</h2>
        <p className='text-sm mt-2'>{data.description}</p>
        <div className='flex justify-between mt-4'>
            <div className='bg-green-500 py-2.5 px-2 text-sm rounded hover:bg-green-600'>Mark as Completed</div>
            <div className='bg-red-500 py-2.5 px-2 text-sm rounded hover:bg-red-600'>Mark as Failed</div>
        </div>
    </div>
  )
}

export default AcceptTask