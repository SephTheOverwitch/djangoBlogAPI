import { BrowserRouter, BrowserRouter as Router, Route, Routes} from 'react-router-dom'; 
import { Homepage } from './Homepage/Homepage';
import { Navbar } from './Navbar/Navbar';

export const App = (): JSX.Element => (
  <>
  <Navbar />
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Homepage />} />
    </Routes>
  </BrowserRouter>
  </>
);
