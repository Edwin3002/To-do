import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { TaskForm } from './TaskForm'
import { TaskList } from './TaskList'
import '../style/app.css'

export const App = () => {
  return (
    <div className='bg-zinc-900 '>
      <div className='flex items-center justify-center h-full'>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<TaskList />} />
            <Route path='/create-task' element={<TaskForm />} />
            <Route path='/edit-task/:id' element={<TaskForm />} />
          </Routes>
        </BrowserRouter>

      </div>
    </div>
  )
}
