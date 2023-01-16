
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import { createContext, useState } from 'react'
import UserList from './Component/UserList';
import AddUser from './Component/AddUser';
import UpdateUser from './Component/UpdateUser';
import { RxSwitch } from 'react-icons/rx'
import { BsSunFill } from 'react-icons/bs'
import { MdDarkMode } from 'react-icons/md'
 export const modeContext = createContext()

function App() {
  const [mode, setMode] = useState(true)
  return (
    <modeContext.Provider  value={mode}>
      <BrowserRouter>
        <nav className={mode ? "navbar navbar-expand-lg bg-dark " : " navbar navbar-expand-lg bg-white"}>
          <div className="container-fluid">
            <Link className={mode ? "navbar-brand  text-white" : "navbar-brand  text-dark"} to="/">Ali Fihar</Link>
            <button className={mode ? "navbar-toggler bg-white" : "navbar-toggler bg-dark"} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className={mode ? "nav-link active  text-white" : "nav-link active  text-dark"} aria-current="page" to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className={mode ? "nav-link active  text-white" : "nav-link active  text-dark"} to="/add-user">AddUser</Link>
                </li>


              </ul>
              <BsSunFill color='white' />
              <RxSwitch onClick={() => { setMode(!mode) }} color='red' width={100} />
              <MdDarkMode />
            </div>
          </div>
        </nav>


        <Routes>
          <Route path='/' element={<UserList />} />
          <Route path='/add-user' element={<AddUser />} />
          <Route path='/update-user/:id' element={<UpdateUser />} />

        </Routes>






      </BrowserRouter>
    </modeContext.Provider>
  );
}

export default App;
