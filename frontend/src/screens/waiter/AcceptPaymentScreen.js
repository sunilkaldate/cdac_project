import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Header from '../../components/Header'
import { getallordersWithId, paybill } from '../../actions/customerActions'
import { useDispatch, useSelector } from 'react-redux'

const AcceptPaymentScreen = (props) => {
  const getOrders = useSelector((store) => store.customerGetAllOrders)

  const [custid, setCustid] = useState('')
  const { loading, response, error } = getOrders

  const dispatch = useDispatch()

  const updateOrder = () => {
    console.log('update order')
    console.log(custid)
    dispatch(paybill(custid))

    window.location.reload()
  }

  const orders = () => {
    dispatch(getallordersWithId(custid))
  }

  console.log('rohit')
  console.log(response)
  useEffect(() => {}, [error, response, loading])
  // let data = Array.prototype(stockChecking.response)

  return (
    <div>
      <input
        style={{ marginTop: 10 }}
        type="number"
        className="form-control-sm"
        placeholder="customer id.."
        onChange={(e) => {
          setCustid(e.target.value)
        }}
      />
      <button
        onClick={() => {
          orders()
        }}
        style={{ marginLeft: 5 }}
        className="btn btn-success">
        Get Orders
      </button>
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
                  {order.status == 'UNPAID' && <td>{order.id}</td>}
                  {order.status == 'UNPAID' && <td>{order.amount}</td>}
                  {order.status == 'UNPAID' && <td>{order.status}</td>}
                  {order.status == 'UNPAID' && <td>{order.date}</td>}
                  {order.status == 'UNPAID' && (
                    <td>
                      <button
                        onClick={() => {
                          updateOrder()
                        }}
                        className="btn btn-success">
                        Accept Payment
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

export default AcceptPaymentScreen
