import { BrowserRouter, BrowserRouter as Router, Route, Routes} from 'react-router-dom'; 
import { Homepage } from './Homepage/Homepage';
import { PostList } from './Post/PostList'
import { Navbar } from './Navbar/Navbar';

export const App = (): JSX.Element => (
  <>
  <Navbar />
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/posts" element = { <PostList />} />
    </Routes>
  </BrowserRouter>
  </>
);
