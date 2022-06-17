import { Link } from 'react-router-dom';

const Home = props => {
    return(
        <> 
        <h1>Home</h1>
        <Link className='text-primary' to={"/docs/5.1/salud/corazon"}>Ejemplo1</Link>
        <Link className='text-primary' to={"/docs/5.2/tecnologia/moviles"}>Ejemplo2</Link>
        </>
    )
}

export default Home;