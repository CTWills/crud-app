import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/Login';

const App = () => {
  return (
    <div className='app'>
      <h1>The Inventory</h1>
      <div className='flex-container'>
          <Routes>
            <Route path='/' element={<Login />}/>
          </Routes>
      </div>
    </div>
  )
}

export default App;
