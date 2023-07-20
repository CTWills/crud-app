import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../App';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import './Home.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

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
    }, [])

    const generateCardForAccItems = (items) => {
        if (items.length > 0 && toggle === false) {
            return items.map((item) => (
                <Card className='card' onClick={() => navigate(`/item/${item.id}`)} key={item.id}>
                    <CardContent className='card-content'>
                        <Typography sx={{textAlign: 'center', fontWeight: 'bold', fontSize: 'larger', marginBottom: '1vh'}}>
                            {item.item_name}
                        </Typography >
                        <Typography sx={{marginBottom: '1vh'}}>
                            <span>Description:</span> {item.description.length > 100 ? `${item.description.slice(0, 98)}...` : item.description}
                        </Typography>
                        <Typography>
                            <span>Quantity:</span> {item.quantity}
                        </Typography>
                    </CardContent>
                </Card>
            ))
        }
    }

    const generateCardForAllAccItems = (items) => {
        if (items.length > 0 && toggle === true) {
            return allItems.map((item) => (
                <Card className='card' onClick={() => navigate(`/item/${item.id}`)} key={item.id}>
                    <CardContent className='card-content'>
                        <Typography sx={{textAlign: 'center', fontWeight: 'bold', fontSize: 'larger', marginBottom: '1vh'}}>
                            {item.item_name}
                        </Typography >
                        <Typography sx={{marginBottom: '1vh'}}>
                            <span>Description:</span> {item.description.length > 100 ? `${item.description.slice(0, 98)}...` : item.description}
                        </Typography>
                        <Typography>
                            <span>Quantity:</span> {item.quantity}
                        </Typography>
                        <Typography>
                            <span>Managed By:</span> {item.first_name} {item.last_name}
                        </Typography>
                    </CardContent>
                </Card>
            ))
        }
    }

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
                {generateCardForAccItems(items)}
                {generateCardForAllAccItems(allItems)}
                {items.length < 1  && toggle === false ? <>No items to display. Add items to get started</> : console.log('displaying items')}
            </div>
        </div>
    )
}

export default Home;