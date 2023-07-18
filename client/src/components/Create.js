import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import './Login.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Create = () => {
    const navigate = useNavigate();
    const [ newProfile, setNewProfile ] = useState({
        first_name: '',
        last_name: '',
        username: '',
        password: ''
    })

    const onChangeHandler = (e) => {
        let profileDetails = {...newProfile}
        profileDetails[e.target.id] = e.target.value
        setNewProfile(profileDetails)
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();
        let init = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newProfile)
        }
        fetch('http://localhost:8080/users', init)
            .then(res => res.json())
            .then(data => console.log(data.message))
    }
    return (
            <form className='create-form' autoComplete='off' onSubmit={(e) => {onSubmitHandler(e); navigate('/')}}>
                    <TextField
                        required
                        id="first_name"
                        label="First Name"
                        variant="outlined"
                        onChange={(e) => onChangeHandler(e)}
                    />
                    <TextField
                        required
                        id="last_name"
                        label="Last Name"
                        variant="outlined"
                        onChange={(e) => onChangeHandler(e)}
                    />
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
                    <Button variant='contained' type='submit'>Create</Button>
            </form>
    )
}

export default Create;