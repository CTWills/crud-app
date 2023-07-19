import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const GuestHome = () => {
    const navigate = useNavigate();
    const [ items, setItems ] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:8080/items`)
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])

    return (
        <div className='home-page-container'>
            {items.length > 0 ? items.map(item => <div key={item.id} onClick={() => navigate(`/guestview/${item.id}`)}>{item.item_name}: {item.description.length > 100 ? `${item.description.slice(0, 98)}...` : item.description} Quantity: {item.quantity}</div>) : <div>Items are loading</div>}
        </div>
    )
}

export default GuestHome;