import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import './Login.css';
import { useNavigate } from 'react-router-dom';

const Create = () => {
    const navigate = useNavigate();

    return (
            <form className='create-form' autoComplete='off'>
                    <TextField
                        required
                        id="first_name"
                        label="First Name"
                        variant="outlined"
                        onChange={(e) => console.log(e.target.value)}
                    />
                    <TextField
                        required
                        id="last_name"
                        label="Last Name"
                        variant="outlined"
                        onChange={(e) => console.log(e.target.value)}
                    />
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
                    <Button variant='contained' type='submit'>Create</Button>
            </form>
    )
}

export default Create;