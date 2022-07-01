import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { createLocalS } from '../helpers/cartLocalStorage'
import { checkTask, deleteTask } from '../redux/features/taskSlice'


export const TaskList = () => {
  const tasks = useSelector(state => state.tasks)
  const dispatch = useDispatch()

  const handleDelete = (id) => {
    dispatch(deleteTask(id))
  }
  const handleCheck = (id) => {
    dispatch(checkTask(id))
  }
  const [fil, setFil] = useState(false)
  useEffect(() => {
    createLocalS();
  }, [])

  return (
    <div className='text-center'>
      <h1 className='text-3xl font-bold text-white mt-4'>{!fil ? 'Incompleted' : 'Completed'} Tasks {tasks !== [] ? tasks.filter(t => (t.completed === fil)).length : 0}</h1>
      <div className='flex flex-row-reverse m-2 mr-8'>
        <Link className=' justify-end bg-green-500 p-1 rounded-lg' to='create-task'>Create task</Link>
      </div>
      <div className='flex flex-wrap justify-around'>
        {
          tasks !== []?
            tasks.filter(t => (t.completed === fil)).map(task => (
              <div key={task.id} className={task.completed ? 'bg-slate-800  flex flex-col rounded-xl w-80  p-2 m-2 relative' : 'bg-slate-500 flex flex-col rounded-xl w-80 p-2 m-2 relative'}>
                <input className='absolute right-0 mr-6' type='checkbox' checked={task.completed} onChange={() => handleCheck(task.id)} />
                <h3 className='text-2xl text-white'>
                  {task.title}
                </h3>
                <p className='m-4 text-white'>
                  {task.description}
                </p>
                <div className='flex justify-evenly'>
                  <button className='bg-red-500 p-1 rounded-lg hover:scale-110' onClick={() => handleDelete(task.id)} >Delete</button>
                  {
                    !fil ?
                      <Link className='bg-yellow-500 p-1 rounded-lg hover:scale-110' to={`edit-task/${task.id}`}>Edit</Link> :
                      ''

                  }
                </div>
              </div>
            ))
            : ''
        }
      </div>
      <div className='flex flex-row-reverse m-2 mr-8'>
        <span className='text-white hover:scale-110 justify-end bg-blue-600 p-1 rounded-lg' onClick={() => setFil(!fil)}>Show  {fil ? 'Incompleted' : 'Completed'}</span>
      </div>
    </div >
  )
}
