import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Item.css';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

const GuestItem = () => {
    let { itemId } = useParams();
    const [ item, setItem ] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`http://localhost:8080/items/${itemId}`)
            .then(res =>  res.json())
            .then(data => {setItem(data)})
    }, [itemId])

    const boxSX = {
        border: '.5vw ridge lightcyan',
        height: '50vh',
        width: '30vw',
        padding: '1vw',
    }
    const renderItemDetails = (item) => item.map((e) => 
        <div className='item-details' key={e.id}>
            <h1 className='item-header'>{e.item_name}</h1>
            <div id='description'><h4>Description:</h4> {e.description}</div>
            <div><h4>Quantity:</h4> {e.quantity}</div>
        </div>
    );

    return (
        <div>
            <Button variant='contained' type='button' sx={{marginRight: '1vw'}} onClick={() => navigate('/allitems')}>Home</Button>
            <div className='item-container'>
                <Box sx={boxSX}>
                    {renderItemDetails(item)}
                </Box>
            </div>
        </div>
            
    )
}

export default GuestItem;