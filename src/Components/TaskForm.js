import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { addTask, editTask } from '../redux/features/taskSlice'
import { v4 as uuid } from 'uuid'
import { useNavigate, useParams } from 'react-router-dom'
export const TaskForm = () => {
  const [task, setTask] = useState({
    title: '',
    description: '',
    completed: false,
  })

  const tasks = useSelector(state => state.tasks)
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const params = useParams();

  const handleChange = e => {
    setTask({
      ...task,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (params.id) {

      dispatch(editTask(task))
    } else {
      dispatch(addTask({ ...task, id: uuid() }))
    }
    navigate('/')
  }

  useEffect(() => {
   if(params.id){
      setTask(tasks.find(task => task.id === params.id)) 
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className='flex flex-col w-2/3 lg:w-1/2 items-cente justify-center h-screen'>
      <h2 className='text-3xl font-bold text-white mt-4'>Task Creator </h2>
      <form className='flex flex-col ' onSubmit={handleSubmit}>
        <input className='my-1 rounded-lg p-2' name='title' type='text' placeholder='Title' value={task.title} onChange={handleChange} />
        <textarea  className='my-1 rounded-lg p-2' name='description' placeholder='Description' value={task.description} onChange={handleChange} />
        <button className='mx-auto my-2 w-1/2 bg-green-500 p-1 rounded-lg hover:scale-110'>Save</button>
      </form>
      <div className='flex flex-row- m-2'>
      <Link className='text-white px-4 bg-blue-600 p-1 rounded-lg hover:scale-110' to='/'>Back</Link>
      </div>
    </div>
  )
}
