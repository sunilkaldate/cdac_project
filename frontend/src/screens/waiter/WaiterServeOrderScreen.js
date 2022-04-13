import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPreparedOrd, postServeOrd } from '../../actions/WaiterActions'

const WaiterServeOrderScreen = () => {
  const waiterGetPreparedOrders = useSelector(
    (store) => store.waiterGetPreparedOrders
  )
  const { loading, response, error } = waiterGetPreparedOrders

  const waiterServeOrder = useSelector((store) => store.waiterServeOrder)
  const { loading1, response1, error1 } = waiterServeOrder

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPreparedOrd())
  }, [response1])

  const serveOrder = (orderId) => {
    dispatch(postServeOrd(orderId))
  }

  return (
    <div>
      <div className=" text-white bg-secondary mb-3">
        <div className="card-header text-center">Orders to Serve</div>
        {(!response || response.data.length < 1) && (
          <h2>No Orders to Serve!</h2>
        )}
        {response &&
          response.data.map((order) => {
            return (
              <div className="card-body">
                <h5 className="card-title">Order no {order.orderNo}</h5>
                <p className="card-text">
                  Please Serve this Order on Table No {order.tableNo}
                </p>
                <button
                  onClick={() => {
                    serveOrder(order.orderNo)
                  }}
                  type="button"
                  class="btn btn-light"
                >
                  Serve Order
                </button>
              </div>
            )
          })}
      </div>
    </div>
  )
}

export default WaiterServeOrderScreen
