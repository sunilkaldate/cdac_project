import { useState, useEffect } from 'react'
import Header from '../../components/Header'

import { useDispatch, useSelector } from 'react-redux'
import {
  updateProfile,
  resetUpdateProfile,
  signin,
  adminLogout,
} from '../../actions/adminActions'

const AdminUpdateProfile = (props) => {
  const [name, setName] = useState('')
  const [username, setUserName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [role, setRole] = useState('OWNER')
  // setRole('OWNER')
  let name1 = sessionStorage['name']
  let username1 = sessionStorage['username']
  let email1 = sessionStorage['email']
  let id = sessionStorage['id']
  let token = sessionStorage['token']
  const dispatch = useDispatch()
  console.log(name + ' ' + email + ' ' + role)
  const updateAdminProfile = () => {
    dispatch(updateProfile(name, username, email, password, role))
  }

  const updateprofile = useSelector((store) => store.adminupdateProfile)

  const { loading, response1, error } = updateprofile

  const adminSignin = useSelector((store) => store.adminSignin)
  const { response } = adminSignin

  useEffect(() => {
    console.log('use effect called: ')
    console.log('loading: ', loading)
    console.log('response: ', response1)
    console.log('error: ', error)

    if (response1) {
      dispatch(resetUpdateProfile())
      dispatch(adminLogout())

      props.history.push('/adminsignin')
    } else if (error) {
      console.log(error)
      alert('error while making API call')
    }
  }, [loading, response1, error])

  return (
    <div>
      <Header title="Update" />
      <div className="form">
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            onChange={(e) => {
              setName(e.target.value)
            }}
            className="form-control"></input>
        </div>
        <div className="mb-3">
          <label className="form-label">UserName</label>
          <input
            onChange={(e) => {
              setUserName(e.target.value)
            }}
            placeholder={name1}
            className="form-control"></input>
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            onChange={(e) => {
              setEmail(e.target.value)
            }}
            type="email"
            className="form-control"
            placeholder="test@test.com"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            onChange={(e) => {
              setPassword(e.target.value)
            }}
            type="password"
            className="form-control"
            placeholder="*****"></input>
        </div>
        <div className="mb-3">
          <button
            onClick={() => {
              updateAdminProfile()
            }}
            className="btn btn-success">
            UpdateProfile
          </button>
        </div>
      </div>

      {/* {userSignup.loading && <div>waiting for result</div>} */}
    </div>
  )
}

export default AdminUpdateProfile
