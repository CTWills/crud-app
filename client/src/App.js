import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Create from './components/Create';
import { useNavigate } from 'react-router-dom';
import Home from './components/Home';
import { useState, createContext } from 'react';
import AddItem from './components/AddItem';
export const UserContext = createContext();

const App = () => {
  const navigate = useNavigate();
  const [ user, setUser ] = useState([]);

  return (
    <UserContext.Provider value={ {user, setUser} } >
      <div className='app'>
        <h1 onClick={() => navigate('/')}>The Inventory</h1>
          <Routes>
            <Route path='/' element={<Login />}/>
            <Route path='/create' element={<Create />}/>
            <Route path='/homepage' element={<Home />}/>
            <Route path='/additem' element={<AddItem />}/>
          </Routes>
      </div>
    </UserContext.Provider>
  )
}

export default App;
