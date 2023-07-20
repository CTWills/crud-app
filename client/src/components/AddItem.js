import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import './Login_Create.css';
import { useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import { UserContext } from '../App';

const AddItem = () => {
    const navigate = useNavigate();
    const { user } = useContext(UserContext)
    const [ itemInfo, setItemInfo ] = useState({
        users_id: user.id,
        item_name: '',
        description: '',
        quantity: 0
    })

    const onChangeHandler = (e) => {
        let item = {...itemInfo};
        item[e.target.id] = e.target.value;
        setItemInfo(item)
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();
        let init = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(itemInfo)
        }
        fetch('http://localhost:8080/items', init)
            .then(res => res.json())
            .then(data => {console.log(data.message); navigate('/homepage')})
            .catch(err => alert('Could not connect to server. Item was not created. Please try again in a few minutes.'))
    }

    return (
        <div className='flex-container'>
            <form className='add-item-form' autoComplete='off' onSubmit={(e) => onSubmitHandler(e)}>
                    <TextField
                        required
                        id="item_name"
                        label="Item Name"
                        variant="outlined"
                        onChange={(e) => onChangeHandler(e)}
                    />
                    <TextField
                        required
                        id="description"
                        label="Description"
                        variant="outlined"
                        onChange={(e) => onChangeHandler(e)}
                        inputProps={{maxLength: 250}}
                    />
                    <TextField
                        required
                        type='number'
                        id="quantity"
                        label="Quantity"
                        variant="outlined"
                        onChange={(e) => onChangeHandler(e)}
                    />
                <div className='login-buttons'>
                    <Button id='item-button' variant='contained' type='submit' >Create Item</Button>
                </div>
            </form>
        </div>
    )
}

export default AddItem;