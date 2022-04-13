import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTable, resetAddTable } from '../../actions/owneraction/ownerAction'
import Header from '../../components/Header'

const OwnerAddTableScreen = (props) => {
  const [tableNo, setTableNo] = useState('')
  const [capacity, setCapacity] = useState('')
  const [status, setStatus] = useState('FREE')

  const dispatch = useDispatch()
  const addTheTable = () => {
    dispatch(addTable(tableNo, capacity, status))
  }

  const Table = useSelector((store) => store.owneraddtable)

  const { loading, response, error } = Table

  useEffect(() => {
    console.log('use effect called: ')
    console.log('loading: ', loading)
    console.log('response: ', response)
    console.log('error: ', error)

    if (response) {
      // user successfully got registered
      dispatch(resetAddTable())
      props.history.push('/ownertables')
    } else if (error) {
      // there is an error while making the API call
      console.log(error)
      alert('error while making API call')
    }
  }, [loading, response, error])

  return (
    <div>
      <Header title="AddMenu" />
      <div className="form">
        <div className="mb-3">
          <label className="form-label">TableNo</label>
          <input
            onChange={(e) => {
              setTableNo(e.target.value)
            }}
            type="number"
            className="form-control"></input>
        </div>
        <div className="mb-3">
          <label className="form-label">Capacity</label>
          <input
            onChange={(e) => {
              setCapacity(e.target.value)
            }}
            type="number"
            className="form-control"></input>
        </div>
        <button
          onClick={() => {
            addTheTable()
          }}
          className="btn btn-success">
          AddTable
        </button>
      </div>
    </div>
  )
}

export default OwnerAddTableScreen
