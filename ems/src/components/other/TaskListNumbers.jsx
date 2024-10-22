import React from 'react'

const TaskListNumbers = ({data}) => {
  return (
    <div className='flex justify-between gap-5 screen mt-10'>
      <div className='w-[45%] py-6 px-9 bg-red-400 rounded-xl'>
        <h2 className='text-2xl font-semibold'>{data.taskNumber.new_task}</h2>
        <h3 className='text-xl font-medium'>New Task</h3>
      </div>
      <div className='w-[45%] py-6 px-9 bg-blue-400 rounded-xl'>
        <h2 className='text-2xl font-semibold'>{data.taskNumber.active}</h2>
        <h3 className='text-xl font-medium'>Active Task</h3>
      </div>
      <div className='w-[45%] py-6 px-9 bg-green-400 rounded-xl'>
        <h2 className='text-2xl font-semibold'>{data.taskNumber.completed}</h2>
        <h3 className='text-xl font-medium'>Completed Task</h3>
      </div>
      <div className='w-[45%] py-6 px-9 bg-yellow-400 rounded-xl'>
        <h2 className='text-2xl font-semibold'>{data.taskNumber.failed}</h2>
        <h3 className='text-xl font-medium'>Failed Task</h3>
      </div>
    </div>
  )
}

export default TaskListNumbers