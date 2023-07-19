import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import './Login_Create.css';
import { useNavigate } from 'react-router-dom';
import { useState, useContext } from 'react';
import { UserContext } from '../App';

const Login = () => {
    const navigate = useNavigate();
    const [ loginInfo, setLoginInfo ] = useState({
        username: '',
        password: ''
    });
    const { setUser } = useContext(UserContext);

    const onChangeHandler = (e) => {
        let login = {...loginInfo};
        login[e.target.id] = e.target.value;
        setLoginInfo(login)
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();
        fetch(`http://localhost:8080/users/${loginInfo.username}`)  
            .then(res => res.json())
            .then(data => {
                let profileData = data[0];
                if (data.length > 0 && loginInfo.username === profileData.username && loginInfo.password === profileData.password) {
                    setUser(profileData)
                    navigate('/homepage')
                } else {
                    alert('No username or password matches')
                }
            })
            .catch(() => alert('Could not connect to server. Please try again in a few minutes.'))
    }

    return (
        <div className='flex-container'>
            <form className='login-form' autoComplete='off' onSubmit={(e) => onSubmitHandler(e)}>
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

export default Login;