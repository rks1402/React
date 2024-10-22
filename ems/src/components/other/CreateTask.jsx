import React, { useState } from 'react'

const CreateTask = () => {

    const [title, setTitle] = useState('')
    const [date, setDate] = useState('')
    const [assignTo, setAssignTo] = useState('')
    const [category, setCategory] = useState('')
    const [description, setDescription] = useState('')

    const submitHandler = (e) => {
        e.preventDefault()

        const newTask = {
            title, 
            date, 
            category, 
            description, 
            active: false, 
            new_task: true, 
            completed: false, 
            failed: false
        };

        const data = JSON.parse(localStorage.getItem('employees'))

        data.forEach((elem)=>{
            if(assignTo == elem.firstName){
                elem.tasks.push(newTask)
                console.log(elem)

                localStorage.setItem('employees', JSON.stringify(data))
            }
        })
        
        setTitle('')
        setDate('')
        setAssignTo('')
        setCategory('')
        setDescription('')
    }    

  return (
    <div className='bg-[#1C1C1C] p-5 mt-7 rounded'>
            <form onSubmit={(e) => {
                submitHandler(e)
            }} className='flex flex-wrap w-full items-start justify-between'>
                <div className='w-1/2'>
                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Task Title</h3>
                        <input 
                        value = {title}
                        onChange = {(e) => {
                            setTitle(e.target.value)
                        }}
                        className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='Make a UI Design' 
                        />
                    </div>
                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Date</h3>
                        <input 
                        value = {date}
                        onChange = {(e) => {
                            setDate(e.target.value)
                        }}
                        className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="date" 
                        />
                    </div>
                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Assign To</h3>
                        <input 
                        value={assignTo}
                        onChange={(e) => {
                            setAssignTo(e.target.value)
                        }}
                        className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='Employee Name'
                        />
                    </div>
                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Category</h3>
                        <input 
                        value={category}
                        onChange={(e) => {
                            setCategory(e.target.value)
                        }}
                        className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='Design, Development, etc.' 
                        />
                    </div>
                </div>
                <div className='w-2/5 flex flex-col items-start'>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Description</h3>
                        <textarea 
                        value={description}
                        onChange={(e) => {
                            setDescription(e.target.value)
                        }}
                        className='w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400' cols="30" rows="10"
                        ></textarea>
                        <button className='bg-emerald-500 py-3 px-5 rounded text-sm mt-4 w-full'>Create Task</button>
                </div>
            </form>
        </div>
  )
}

export default CreateTask