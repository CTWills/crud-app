import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/Login';

const App = () => {
  return (
    <div className='app'>
        <Routes>
          <Route path='/' element={<Login />}/>
        </Routes>
    </div>
  )
}

export default App;
