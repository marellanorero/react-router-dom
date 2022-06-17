import { Link } from 'react-router-dom'

const Home = (props) => {
    return (
        <ul className="nav justify-content-center">
            <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/contact">Contact</Link>
            </li>
        </ul>
    )
}
export default Home;