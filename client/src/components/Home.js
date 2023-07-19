import { useContext } from 'react';
import { UserContext } from '../App';

const Home = () => {
    const { user } = useContext(UserContext)
    return (
        <>
            This is the home page! for {user.first_name}
        </>
    )
}

export default Home;