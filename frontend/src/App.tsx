import { BrowserRouter, BrowserRouter as Router, Route, Routes} from 'react-router-dom'; 
import { Homepage } from './Homepage/Homepage';

export const App = (): JSX.Element => ( 
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Homepage />} />
    </Routes>
  </BrowserRouter>
);
