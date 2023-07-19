import { useContext } from 'react';
import { UserContext } from '../App';

const Home = () => {
    const { user } = useContext(UserContext)
    return (
        <>
            This is the home page! for {user[0].first_name} {console.log(user)}
        </>
    )
}

export default Home;