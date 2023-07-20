import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../App';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import './Home.css';

const Home = () => {
    const navigate = useNavigate();
    const { user } = useContext(UserContext)
    const [ items, setItems ] = useState([]);
    const [ allItems, setAllItems ] = useState([]);
    const [ toggle, setToggle ] = useState(false)
    const [ userId, setUserId ] = useState();

    useEffect(() => {
        if (user.id) {
            localStorage.setItem('id', `${user.id}`)
            let id = localStorage.getItem('id')
            setUserId(id)
        } else {
            let id = localStorage.getItem('id')
            setUserId(id)
        }
    }, [user])

    useEffect(() => {
        fetch(`http://localhost:8080/items?id=${userId}`)
            .then(res => res.json())
            .then(data => setItems(data))
            .catch(err => {throw err})
    }, [userId])

    useEffect(() => {
        fetch(`http://localhost:8080/items`)
            .then(res => res.json())
            .then(data => setAllItems(data))
    }, [user])

    return (
        <div >
            <div className='home-buttons'>
                <Tooltip title='Add a new item'>
                    <Button variant='contained' type='button' onClick={() => navigate('/additem')} sx={{marginRight: '1vw'}}>Add</Button>
                </Tooltip>
                <Tooltip title="Toggle between your items and everyones'">
                    <Button variant='contained' type='button' onClick={() => setToggle(!toggle)}>{toggle ? 'Show Mine' : 'Show All'}</Button>
                </Tooltip>
            </div>
            <div className='homepage-items-container'>
                {items.length > 0 && toggle === false ? items.map(item => <div key={item.id} onClick={() => navigate(`/item/${item.id}`)}>{item.item_name}: {item.description.length > 100 ? `${item.description.slice(0, 98)}...` : item.description} Quantity: {item.quantity}</div>) 
                : 
                items.length > 0 && toggle === true ? allItems.map(item => <div key={item.id} onClick={() => navigate(`/item/${item.id}`)}>{item.item_name}: {item.description.length > 100 ? `${item.description.slice(0, 98)}...` : item.description} Quantity: {item.quantity}</div>)
                :
                <div>Loading inventory...</div>
                }
            </div>
        </div>
    )
}

export default Home;