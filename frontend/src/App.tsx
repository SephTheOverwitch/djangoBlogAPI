import { BrowserRouter, Route, Routes} from 'react-router-dom'; 
import { Homepage } from './Homepage/Homepage';
import { PostList } from './Post/PostList'
import { Navbar } from './Navbar/Navbar';
import { CreatePost } from './Post/CreatePost'

export const App = (): JSX.Element => (
  <>
  <Navbar />
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/posts" element = { <PostList />} />
      <Route path="/create" element = { <CreatePost />} />
    </Routes>
  </BrowserRouter>
  </>
);
