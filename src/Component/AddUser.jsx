import React, { useState ,useContext} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { addUserAction } from './../Config/Action';
import { modeContext } from './../App';



function AddUser() {
  const count = useSelector(data => data.users.length)
  const mode = useContext(modeContext)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handelClick = () => {
    dispatch(addUserAction(
      {
        id: count + 1,
        name: name,
        email: email,
      }
    ))
    navigate('/')
  }

  return (
    <div className='container mt-5'>
      <div className='row'>
        <div className='col-8 mx-auto'>
          <form>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className={mode?"form-label text-white":"form-label text-dark"}>Full Name</label>
              <input type="text" className={mode?"form-control text-white bg-dark ":"form-control text-dark bg-white "} id="exampleInputEmail1"
                value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className={mode?"form-label text-white":"form-label text-dark"}>Email address</label>
              <input type="gmail" className={mode?"form-control text-white bg-dark ":"form-control text-dark bg-white "} id="exampleInputPassword1"
                value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>

            <button type="submit" className="btn btn-primary form-control mt-4" onClick={handelClick}>Submit</button>
          </form>


        </div>
      </div>
    </div>
  )
}

export default AddUser
