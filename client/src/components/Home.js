import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../App';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';

const Home = () => {
    const { user } = useContext(UserContext)
    const [ items, setItems ] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:8080/items?id=${user.id}`)
            .then(res => res.json())
            .then(data => setItems(data))
            .catch(err => {throw err})
    }, [user])

    return (
        <div className='home-page-container'>
            <Tooltip title='Add a new item'>
                <Button variant='contained' type='button'>Add</Button>
            </Tooltip>
            {items.length > 0 ? items.map(item => <div key={item.id}>{item.item_name}</div>) : <div>Items are loading</div>}
        </div>
    )
}

export default Home;