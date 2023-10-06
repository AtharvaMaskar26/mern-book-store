import logo from './logo.svg';
import './App.css';

import { Routes, Route } from 'react-router-dom';

// Importing Pages
import Home from './pages/Home'
import CreateBook from './pages/CreateBooks'
import EditBook from './pages/EditBook'
import DeleteBook from './pages/DeleteBook'
import ShowBook from './pages/ShowBook'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route 
        path='/' 
        element={<Home />} />
        <Route 
        path='/books/create' 
        element={<CreateBook/>} />
        <Route 
        path='/books/details/:id' 
        element={<ShowBook />} />
        <Route 
        path='/books/edit/:id'
        element={<EditBook />} />
        <Route 
        path='/books/delete/:id'
        element={<DeleteBook />} />
      </Routes>
    </div>
  );
}

export default App;
