import { useState, useEffect } from 'react'
import Header from '../../components/Header'
import { useDispatch, useSelector } from 'react-redux'
import { addEmployee } from '../../actions/owneraction/ownerAction'
import { resetAddEmployee } from '../../actions/owneraction/ownerAction'

const OwnerAddEmployee = (props) => {
  const [name, setName] = useState('')
  const [username, setUserName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [role, setRole] = useState('')

  const user = sessionStorage['role']

  const dispatch = useDispatch()

  const role1 = sessionStorage['role']
  const ownerAddEmployee = useSelector((store) => store.ownerAddEmployee)
  const { loading, response, error } = ownerAddEmployee

  useEffect(() => {
    console.log('use effect called: ')
    console.log('loading: ', loading)
    console.log('response: ', response)
    console.log('error: ', error)

    if (response && response.status == 200) {
      // user successfully got registered
      dispatch(resetAddEmployee())
      if (user == 'MANAGER') {
        props.history.push('/managechef')
      } else if (user == 'OWNER') {
        props.history.push('/revenue')
      }
    } else if (error) {
      // there is an error while making the API call
      console.log(error)
      alert('error while making API call')
    }
  }, [loading, response, error])

  const onSignup = () => {
    props.history.push('/addEmpSuccess')
    dispatch(addEmployee(name, username, email, password, role))
  }

  return (
    <div>
      <Header title="Signup" />
      <div className="form">
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            onChange={(e) => {
              setName(e.target.value)
            }}
            className="form-control"
          ></input>
        </div>
        <div className="mb-3">
          <label className="form-label">UserName</label>
          <input
            onChange={(e) => {
              setUserName(e.target.value)
            }}
            className="form-control"
          ></input>
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
            placeholder="*****"
          ></input>
        </div>
        <div className="mb-3">
          <label className="form-label">Role</label>
          <select
            onChange={(e) => {
              setRole(e.target.value)
            }}
            className="form-select"
          >
            <option selected>Choose A Role</option>
            {user != 'MANAGER' && role1 != 'MANAGER' && (
              <option value="MANAGER">Manager</option>
            )}
            {/* { && <option value="MANAGER">Manager</option>} */}
            <option value="CHEF">Chef</option>
            <option value="WAITER">Waiter</option>
            {user != 'MANAGER' && <option value="SUPPLIER">Supplier</option>}
          </select>
        </div>
        <div className="mb-3">
          <button onClick={onSignup} className="btn btn-success">
            Add Employee
          </button>
        </div>
      </div>

      {/* {userSignup.loading && <div>waiting for result</div>} */}
    </div>
  )
}

export default OwnerAddEmployee
