import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../App';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';

const Home = () => {
    const navigate = useNavigate();
    const { user } = useContext(UserContext)
    const [ items, setItems ] = useState([]);
    const [ allItems, setAllItems ] = useState([]);
    const [ toggle, setToggle ] = useState(false)

    useEffect(() => {
        fetch(`http://localhost:8080/items?id=${user.id}`)
            .then(res => res.json())
            .then(data => setItems(data))
            .catch(err => {throw err})
    }, [user])

    useEffect(() => {
        fetch(`http://localhost:8080/items`)
            .then(res => res.json())
            .then(data => setAllItems(data))
    }, [user])

    return (
        <div className='home-page-container'>
            <Tooltip title='Add a new item'>
                <Button variant='contained' type='button' onClick={() => navigate('/additem')} sx={{marginRight: '1vw'}}>Add</Button>
            </Tooltip>
            <Button variant='contained' type='button' onClick={() => setToggle(!toggle)}>{toggle ? 'Show Mine' : 'Show All'}</Button>
            {items.length > 0 && toggle === false ? items.map(item => <div key={item.id} onClick={() => navigate(`/item/${item.id}`)}>{item.item_name}: {item.description.length > 100 ? `${item.description.slice(0, 98)}...` : item.description} Quantity: {item.quantity}</div>) 
            : 
            allItems.map(item => <div key={item.id} onClick={() => navigate(`/item/${item.id}`)}>{item.item_name}: {item.description.length > 100 ? `${item.description.slice(0, 98)}...` : item.description} Quantity: {item.quantity}</div>)
            }
        </div>
    )
}

export default Home;