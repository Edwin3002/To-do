import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { TaskForm } from './TaskForm'
import { TaskList } from './TaskList'

export const App = () => {
  return (
    <div className='bg-zinc-300 m-6'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<TaskList />} />
          <Route path='/create-task' element={<TaskForm />} />
          <Route path='/edit-task/:id' element={<TaskForm />} />
        </Routes>
      </BrowserRouter>

    </div>
  )
}
