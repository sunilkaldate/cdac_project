import { useEffect } from 'react'
import { getallorders } from '../../actions/customerActions'
import { useDispatch, useSelector } from 'react-redux'

const CustomerOrderDetailsScreen = (props) => {
  const getOrders = useSelector((store) => store.customerGetAllOrders)

  const { loading, response, error } = getOrders

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getallorders())
  }, [])

  console.log('rohit')
  console.log(response)
  useEffect(() => {}, [error, response, loading])
  // let data = Array.prototype(stockChecking.response)

  return (
    <div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Id</th>
            <th>Amount</th>
            <th>category</th>
            <th>Status</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {response &&
            response.data &&
            response.data.length > 0 &&
            response.data.map((order) => {
              return (
                <tr>
                  <td>{order.id}</td>
                  <td>{order.amount}</td>
                  <td>{order.status}</td>
                  <td>{order.category}</td>
                  <td>
                    <button className="btn btn-success"></button>
                  </td>
                </tr>
              )
            })}
        </tbody>
      </table>
    </div>
  )
}

export default CustomerOrderDetailsScreen
