import { Link } from 'react-router-dom';

export const Navbar= (): JSX.Element => ( 
        <nav className="navbar">
            <h1>Most amazing blog ever</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/createPost">Create post</Link>
            </div>
        </nav>
)