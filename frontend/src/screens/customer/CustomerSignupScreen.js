import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Header from '../../components/Header'

import { useDispatch, useSelector } from 'react-redux'
import { signup } from '../../actions/customerActions'

const CustomerSignupScreen = (props) => {
  const [name, setName] = useState('')
  const [username, setUserName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [city, setCity] = useState('')
  const [state, setState] = useState('')
  const [country, setCountry] = useState('')
  const [contact, setContact] = useState('')

  const dispatch = useDispatch()

  const customerSignup = useSelector((store) => store.customerSignup)
  const { loading, response, error } = customerSignup

  // const userSignup = useSelector((store) => store.userSignup)

  useEffect(() => {
    console.log('use effect called: ')
    console.log('loading: ', loading)
    console.log('response: ', response)
    console.log('error: ', error)

    if (response) {
      // user successfully got registered
      props.history.push('/customersignin')
    } else if (error) {
      // there is an error while making the API call
      console.log(error)
      alert('error while making API call')
    }
  }, [loading, response, error])

  const onSignup = () => {
    dispatch(
      signup(name, username, email, password, contact, city, state, country)
    )
  }

  return (
    <div>
      <Header title="Customer Signup" />
      <div className="form ">
        <div className="mb-3">
          <label className="form-label" >Name</label>
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
          <label className="form-label">Contact</label>
          <input
            onChange={(e) => {
              setContact(e.target.value)
            }}
            className="form-control"></input>
        </div>
        <div className="mb-3">
          <label className="form-label">City</label>
          <input
            onChange={(e) => {
              setCity(e.target.value)
            }}
            className="form-control"></input>
        </div>
        <div className="mb-3">
          <label className="form-label">State</label>
          <input
            onChange={(e) => {
              setState(e.target.value)
            }}
            className="form-control"></input>
        </div>
        <div className="mb-3">
          <label className="form-label">Country</label>
          <input
            onChange={(e) => {
              setCountry(e.target.value)
            }}
            className="form-control"></input>
        </div>
        <div className="mb-3">
          <button onClick={onSignup} className="btn btn-success">
            Signup
          </button>
          <div className="float-end">
            Existing user? <Link to="/customersignin">Signin here</Link>
          </div>
        </div>
      </div>

      {/* {userSignup.loading && <div>waiting for result</div>} */}
    </div>
  )
}

export default CustomerSignupScreen
