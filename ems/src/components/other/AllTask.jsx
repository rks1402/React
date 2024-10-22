import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {

    const authData = useContext(AuthContext)

    console.log(authData.employees)

  return (
    <div className='bg-[#1C1C1C] p-5 mt-5 rounded'>
        <div className='bg-red-300 py-2 px-4 flex justify-between rounded mb-2'>
            <h2 className='text-lg font-medium w-1/5'>Employee Name</h2>
            <h3 className='text-lg font-medium w-1/5'>New Task</h3>
            <h5 className='text-lg font-medium w-1/5'>Active Task</h5>
            <h5 className='text-lg font-medium w-1/5'>Comlpeted Task</h5>
            <h5 className='text-lg font-medium w-1/5'>Failed Task</h5>
        </div>
        <div className='h-[80%] overflow-auto'>
        {authData.employees.map((elem, idx) => {
            return (<div key={idx} className='border-2 border-emerald-300 py-2 px-4 flex justify-between rounded mb-2'>
                <h2 className='text-lg font-medium w-1/5'>{elem.firstName}</h2>
                <h3 className='text-lg font-medium w-1/5 text-blue-600'>{elem.taskNumber.new_task}</h3>
                <h5 className='text-lg font-medium w-1/5 text-yellow-400'>{elem.taskNumber.active}</h5>
                <h5 className='text-lg font-medium w-1/5 text-green-600'>{elem.taskNumber.completed}</h5>
                <h5 className='text-lg font-medium w-1/5 text-red-600'>{elem.taskNumber.failed}</h5>
            </div>)
            })}
        </div>
        
        
    </div>
  )
}

export default AllTask