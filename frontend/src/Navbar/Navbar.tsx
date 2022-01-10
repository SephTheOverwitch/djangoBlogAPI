import { Link } from 'react-router-dom';

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>Most amazing blog ever</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/createPost">Create post</Link>
            </div>
        </nav>
     );
}

export default Navbar;