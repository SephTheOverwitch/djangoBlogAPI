import { Link } from "react-router-dom"

const ErrorPage = () => {
    return ( 
        <div className="not-found">
            <h2>404</h2>
            <p>The requested page was not found</p>
            <Link to='/'>Back</Link>
        </div>
     );
}

export default ErrorPage;