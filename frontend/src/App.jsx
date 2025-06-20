import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import ShowBooks from './pages/showBooks'
import EditBook from './pages/EditBook'
import DeleteBook from './pages/DeleteBook'
import CreateBooks from './pages/CreateBooks'


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/books/create" element={<CreateBooks />} />
      <Route path="/books/details/:id" element={<ShowBooks />} />
      <Route path="/books/edit/:id" element={<EditBook />} />
      <Route path="/books/delete/:id" element={<DeleteBook />} />
    </Routes>
  )
}

export default App