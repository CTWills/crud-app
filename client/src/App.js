import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Create from './components/Create';
import { useNavigate } from 'react-router-dom';

const App = () => {
  const navigate = useNavigate();

  return (
    <div className='app'>
      <h1 onClick={() => navigate('/')}>The Inventory</h1>
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
