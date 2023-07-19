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
        desctription: '',
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
            .catch(err => alert('Could not connect to server. Profile was not created. Please try again in a few minutes.'))
    }

    return (
        <div className='flex-container'>
            <form className='add-item-form' autoComplete='off' onSubmit={(e) => onSubmitHandler(e)}>
                    <TextField
                        required
                        id="username"
                        label="Username"
                        variant="outlined"
                        onChange={(e) => onChangeHandler(e)}
                    />
                    <TextField
                        required
                        id="password"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                        variant="outlined"
                        onChange={(e) => onChangeHandler(e)}
                    />
                <div className='login-buttons'>
                    <Button id='login-button' variant='contained' type='submit' >Login</Button>
                    <Button variant='contained' type='button' onClick={() => navigate('/create')}>Create</Button>
                </div>
            </form>
        </div>
    )
}

export default AddItem;