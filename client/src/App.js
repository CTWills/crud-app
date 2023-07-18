import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Create from './components/Create';

const App = () => {
  return (
    <div className='app'>
      <h1>The Inventory</h1>
      <div className='flex-container'>
          <Routes>
            <Route path='/' element={<Login />}/>
            <Route path='/create' element={<Create />}/>
          </Routes>
      </div>
    </div>
  )
}

export default App;
