import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Item.css';

const Item = () => {
let { itemId } = useParams();
const [ item, setItem ] = useState([]);

useEffect(() => {
    fetch(`http://localhost:8080/items/${itemId}`)
        .then(res =>  res.json())
        .then(data => setItem(data))
}, [itemId])


    return (
        <div className='item-container'>
            {item.map((e) => <div key={e.id}>{e.item_name}: {e.description} Quantity: {e.quantity}</div>)}
        </div>
    )
}

export default Item;