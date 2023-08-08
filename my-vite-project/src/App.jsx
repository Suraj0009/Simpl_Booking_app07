import './index.css'; // Import the index.css file
import IndexPage from './pages/IndexPage';

import { Routes, Route } from 'react-router-dom';



function App() {
  return (
    <Routes>
      <Route index element={<IndexPage/>} />

    </Routes>
  )
 
}

export default App;
