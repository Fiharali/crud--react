
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import UserList from './Component/UserList';
import AddUser from './Component/AddUser';
import UpdateUser from './Component/UpdateUser';

function App() {
  return (
    <BrowserRouter>
      <nav className="navbar navbar-expand-lg bg-dark text-white">
        <div className="container-fluid">
          <Link className="navbar-brand  text-white" to="/">Ali Fihar</Link>
          <button className="navbar-toggler  bg-white " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active  text-white" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link  text-white" to="/add-user">AddUser</Link>
              </li>


            </ul>
          </div>
        </div>
      </nav>


      <Routes>
        <Route path='/' element={<UserList />} />
        <Route path='/add-user' element={<AddUser />} />
        <Route path='/update-user/:id' element={<UpdateUser />} />

      </Routes>






    </BrowserRouter>

  );
}

export default App;
