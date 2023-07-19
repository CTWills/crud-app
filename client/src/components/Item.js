import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Item.css';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

const Item = () => {
    let { itemId } = useParams();
    const [ item, setItem ] = useState([]);
    const [ toggleEdit, setToggleEdit ] = useState(false);
    const [ updatedItem, setUpdatedItem ] = useState();
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`http://localhost:8080/items/${itemId}`)
            .then(res =>  res.json())
            .then(data => {setItem(data); setUpdatedItem({
                item_name: data[0].item_name,
                description: data[0].description,
                quantity: data[0].quantity
            })})
    }, [itemId])

    const boxSX = {
        border: '.5vw ridge lightcyan',
        height: '50vh',
        width: '30vw',
        padding: '1vw',
    }

    const handleOnChange = (e) => {
        let updateInfo = {...updatedItem}
        updateInfo[e.target.id] = e.target.value;
        setUpdatedItem(updateInfo)
    }

    const handleOnSubmit = () => {
        let init = {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedItem)
        }
        fetch(`http://localhost:8080/items/${itemId}`, init)
            .then(res => res.json())
            .then(data => console.log(data.message))
    }

    const handleDelete = () => {
        let init = {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
        }
        fetch(`http://localhost:8080/items/${itemId}`, init)
            .then(res => res.json())
            .then(data => {console.log(data.message); navigate('/homepage')})
    }

    const renderItemDetails = (item) => item.map((e) => 
        <div className='item-details' key={e.id}>
            <h1 className='item-header'>{e.item_name}</h1>
            <div id='description'><h4>Description:</h4> {e.description}</div>
            <div><h4>Quantity:</h4> {e.quantity}</div>
        </div>
    );

    const renderEditItemForm = (item) => item.map((e) => 
        <div className='item-details' key={e.id}>
            <form autoComplete='off' onSubmit={() => handleOnSubmit()}>
                <input className='item-header' type='string'  id='item_name' defaultValue={e.item_name} onChange={(e) => handleOnChange(e)}></input>
                <div><h4>Description:</h4> <input type='string' id='edit-description' defaultValue={e.description} onChange={(e) => handleOnChange(e)}></input></div>
                <div><h4>Quantity:</h4> <input type='number' id='quantity' defaultValue={e.quantity} onChange={(e) => handleOnChange(e)}></input></div>
                <Button variant='contained' type='submit' size='small'>Confirm</Button>
            </form>
        </div>
    );


    return (
        <div>
            <Button variant='contained' type='button' sx={{marginRight: '1vw'}} onClick={() => navigate('/homepage')}>Home</Button>
            <Button variant='contained' type='button' sx={{marginRight: '1vw'}} onClick={() => handleDelete()}>Delete</Button>
            <Button variant='contained' type='button' onClick={() => setToggleEdit(!toggleEdit)}>{toggleEdit ? 'Finish' : 'Edit'}</Button>
            <div className='item-container'>
                <Box sx={boxSX}>
                    {toggleEdit ? renderEditItemForm(item) : renderItemDetails(item)}
                </Box>
            </div>
        </div>
            
    )
}

export default Item;