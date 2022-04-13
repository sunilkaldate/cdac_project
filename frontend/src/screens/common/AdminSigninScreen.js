import { useState, useEffect } from 'react'
import background from '../../image25.png'
import Header from '../../components/Header'
import { signin } from '../../actions/adminActions'
import { useDispatch, useSelector } from 'react-redux'

const AdminSigninScreen = (props) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const adminSignin = useSelector((store) => store.adminSignin)
  const { loading, error, response } = adminSignin

  const dispatch = useDispatch()
  const onSignin = () => {
    dispatch(signin(username, password))
  }

  useEffect(() => {
    if (response) {
      sessionStorage.setItem('id', response.id)
      sessionStorage.setItem('role', response.role)
      sessionStorage.setItem('name', response.name)
      sessionStorage.setItem('Loggedin', true)
      sessionStorage.setItem('token', 'Bearer ' + response.token)
      if (response.role == 'OWNER') {
        props.history.push('/owneraddemployee')
      } else if (response.role == 'MANAGER') {
        props.history.push('/managechef')
      } else if (response.role == 'CHEF') {
        props.history.push('/cheforders')
      } else if (response.role == 'WAITER') {
        props.history.push('/waiterorders')
      } else if (response.role == 'SUPPLIER') {
        props.history.push('/ingredients')
      }
    } else if (response && response.status == 'error') {
      alert(response.error)
    } else if (error) {
      alert(error)
    }
  }, [loading, error, response])

  return (
    <div
      className="adminsignin"
      style={{
        backgroundImage: 'url(' + background + ')',
        backgroundSize: 'cover',
        width: '88%',
        height: '500px',
      }}>
      <Header title="Admin and Staff Signin" />
      <div className="form">
        <div className="mb-3">
          <label
            style={{ color: 'black', fontWeight: 'bold' }}
            className="form-label">
            Username
          </label>
          <input
            onChange={(e) => {
              setUsername(e.target.value)
            }}
            type="text"
            className="form-control"
            placeholder="test@test.com"
          />
        </div>
        <div className="mb-3">
          <label
            style={{ color: 'black', fontWeight: 'bold' }}
            className="form-label">
            Password
          </label>
          <input
            onChange={(e) => {
              setPassword(e.target.value)
            }}
            className="form-control"
            placeholder="*****"
            type="password"></input>
        </div>
        <div className="mb-3">
          <button onClick={onSignin} className="btn btn-success">
            Staff Signin
          </button>
        </div>
      </div>
      {loading && (
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      )}
    </div>
  )
}

export default AdminSigninScreen
