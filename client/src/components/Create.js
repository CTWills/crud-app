import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import './Login_Create.css';
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
            .then(data => {console.log(data.message); navigate('/')})
            .catch(err => alert('Could not connect to server. Profile was not created. Please try again in a few minutes.'))
    }
    return (
        <div className='flex-container'>
            <form className='create-form' autoComplete='off' onSubmit={(e) => onSubmitHandler(e)}>
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
        </div>
    )
}

export default Create;