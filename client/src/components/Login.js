import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import './Login.css';

const Login = () => {

    return (
            <form className='login-form' autoComplete='off'>
                    <TextField
                        required
                        id="username"
                        label="Username"
                        variant="outlined"
                        onChange={(e) => console.log(e.target.value)}
                    />
                    <TextField
                        required
                        id="password"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                        variant="outlined"
                        onChange={(e) => console.log(e.target.value)}
                    />
                <div className='login-buttons'>
                    <Button id='login-button' variant='contained' type='submit'>Login</Button>
                    <Button variant='contained' type='button'>Create</Button>
                </div>
            </form>
    )
}

export default Login;