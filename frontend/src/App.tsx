import { BrowserRouter as Router, Route} from 'react-router-dom'; 
import { Homepage } from './Homepage/Homepage';
import Navbar from './Navbar/Navbar';
import PostDetails from './Post/PostDetails';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <div className="content">
            <Route path="/">
              <Homepage/>
            </Route>
            <Route path="/posts/:id">
              <PostDetails/>
            </Route>
        </div>
      </div>
    </Router>
  );
}

export default App;
