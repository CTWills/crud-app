import { useContext, useEffect } from 'react';
import { UserContext } from '../App';

const Home = () => {
    const { user } = useContext(UserContext)

    // useEffect(() => {
    //     fetch('http://localhost:8080/items')
    // }, [user])
    return (
        <>
            This is the home page! for {user.first_name}
        </>
    )
}

export default Home;