import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
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
    if(params.id){

      dispatch(editTask(task))
    }else{
      dispatch(addTask({ ...task, id: uuid() }))
    }
    navigate('/')
  }

  useEffect(() => {
    params.id?
    setTask(tasks.find(task => task.id === params.id)):
    console.log(2)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  

return (
  <form onSubmit={handleSubmit}>
    <input name='title' type='text' placeholder='title' value={task.title} onChange={handleChange} />
    <textarea name='description' placeholder='description' value={task.description} onChange={handleChange} />
    <button>Save</button>
  </form>
)
}
