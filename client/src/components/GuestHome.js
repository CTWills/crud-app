import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const GuestHome = () => {
    const navigate = useNavigate();
    const [ allItems, setAllItems ] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:8080/items`)
            .then(res => res.json())
            .then(data => setAllItems(data))
    }, [])

    const generateCardForAllAccItems = (items) => {
        if (items.length > 0) {
            return allItems.map((item) => (
                <Card className='card' onClick={() => navigate(`/guestview/${item.id}`)} key={item.id}>
                    <CardContent>
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

    return (
        <div className='homepage-items-container'>
            {generateCardForAllAccItems(allItems)}
            {/* {items.length > 0 ? items.map(item => <div key={item.id} onClick={() => navigate(`/guestview/${item.id}`)}>{item.item_name}: {item.description.length > 100 ? `${item.description.slice(0, 98)}...` : item.description} Quantity: {item.quantity}</div>) : <div>Items are loading</div>} */}
        </div>
    )
}

export default GuestHome;