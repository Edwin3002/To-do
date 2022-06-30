import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { createLocalS } from '../helpers/cartLocalStorage'
import { deleteTask } from '../redux/features/taskSlice'


export const TaskList = () => {
  const tasks = useSelector(state => state.tasks)
  const dispatch = useDispatch()

  const handleDelete = (id) => {
    dispatch(deleteTask(id))
  }

  useEffect(() => {
    createLocalS();
  }, [])

  return (
    <div >
      <h1>{tasks? tasks.length: 0}</h1>
      <Link to='create-task'>Creater task</Link>
      {
        tasks?
        tasks.map(task => (
          <div key={task.id}>
            <h3>
              {task.title}
            </h3>
            <p>
              {task.description}
            </p>
            <button onClick={() => handleDelete(task.id)} className='underline'>delete</button>
            <Link to={`edit-task/${task.id}`}>Edit</Link>
          </div>
        ))
        : ''
      }
    </div>
  )
}
