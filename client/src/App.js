import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Create from './views/Create';
import Main from './views/Main';
import Update from './views/Update';
function App() {
  
  return (
    
    <div >
          <h1>Favorite Authors</h1>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<Main/>}></Route>
          <Route path="/new" element={<Create /> } ></Route>
          <Route path="/edit/:id" element={<Update/> } ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
