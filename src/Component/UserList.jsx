import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteUserAction } from './../Config/Action';

function UserList() {
  const users = useSelector(data => data.users)
  const dispatch = useDispatch()
  const handleDelete = () => {
    dispatch(deleteUserAction(id))
  }
  return (
    <div className='container '>
      <div className="row">
        <div className="col-10 mx-auto">


          <Link to="/add-user" className="btn btn-primary form-control my-4" >Add User</Link>
          <table className="table table-dark table-hover">
            <thead>
              <tr>
                <th scope="col">Id</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => {
                return (
                  <tr key={index}>
                    <th>{user.id}</th>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>
                      <Link className='btn btn-success ' to={`/update-user/${user.id}`}>Update</Link>
                      <Link className='btn btn-danger ' onClick={() => handleDelete(user.id)}>Delete</Link>
                    </td>
                  </tr>
                )
              })}

            </tbody>
          </table>

        </div>
      </div>
    </div>
  )
}

export default UserList
