import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Create from './components/Create';
import { useNavigate } from 'react-router-dom';
import Home from './components/Home';
import { useState, createContext, useEffect} from 'react';
import AddItem from './components/AddItem';
import Item from './components/Item';
import GuestHome from './components/GuestHome';
import GuestItem from './components/GuestItem';
export const UserContext = createContext();

const App = () => {
  const navigate = useNavigate();
  const [ user, setUser ] = useState([]);
  const [ username, setUsername ] = useState();

  useEffect(() => {
    if (user.id) {
        localStorage.setItem('username', `${user.username}`)
        let username = localStorage.getItem('username')
        setUsername(username)
    } else {
        let username1 = localStorage.getItem('username')
        setUsername(username1)
    }
}, [user])
  
  return (
    <UserContext.Provider value={ {user, setUser} } >
     <div className='app'>
          <div className='header-container'>
              <h1 id='main-header' onClick={() => {
                if (user.id) {
                  navigate('/homepage')
                }
              }}>The Inventory</h1>
              <div className='header-logout'>
                <div id='header-logout' onClick={() => {navigate('/'); localStorage.setItem('id', ''); localStorage.setItem('username', ''); window.location.reload()}}>Logout</div>
                {username ? <div>Logged in as: {username}</div> : <></>}
              </div>
          </div>
          <Routes>
            <Route path='/' element={<Login />}/>
            <Route path='/create' element={<Create />}/>
            <Route path='/homepage' element={<Home />}/>
            <Route path='/additem' element={<AddItem />}/>
            <Route path='/item/:itemId' element={<Item />}/>
            <Route path='/allitems' element={<GuestHome />}/>
            <Route path='/guestview/:itemId' element={<GuestItem />}/>
          </Routes>
      </div>
    </UserContext.Provider>
  )
}

export default App;
