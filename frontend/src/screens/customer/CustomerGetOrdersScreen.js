import { useEffect } from 'react'
import { getallorders } from '../../actions/customerActions'
import { useDispatch, useSelector } from 'react-redux'

const CustomerGetOrdersScreen = (props) => {
  const getOrders = useSelector((store) => store.customerGetAllOrders)

  const { loading, response, error } = getOrders

  const dispatch = useDispatch()
  let role = sessionStorage['role']
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
            <th>status</th>
            <th>date</th>
            <th>Payment</th>
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
                  <td>{order.date}</td>
                  {order.status == 'UNPAID' && (
                    <td>
                      <button onClick={() => {}} className="btn btn-success">
                        Pay
                      </button>
                    </td>
                  )}
                </tr>
              )
            })}
        </tbody>
      </table>
    </div>
  )
}

export default CustomerGetOrdersScreen
