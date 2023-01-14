import  { useState } from 'react'
import { useDispatch , useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom';
import { updateUserAction } from './../Config/Action';

function UpdateUser() {
  const {id} = useParams()
  const user = useSelector(data => data.users.find((u)=>u.id===parseInt(id)))
  const [name, setName] = useState(user.name)
  const [email, setEmail] = useState(user.email)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handelClick = () => {
    dispatch(updateUserAction(
      {
        id: id,
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
              <label htmlFor="exampleInputEmail1" className="form-label text-white">Email address</label>
              <input type="text" className="form-control text-white bg-dark " id="exampleInputEmail1"
                value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label text-white">Password</label>
              <input type="email" className="form-control text-white bg-dark " id="exampleInputPassword1"
                value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>

            <button type="submit" className="btn btn-primary form-control mt-4" onClick={handelClick}>Submit</button>
          </form>


        </div>
      </div>
    </div>
  )
}

export default UpdateUser
