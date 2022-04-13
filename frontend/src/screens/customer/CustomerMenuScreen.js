import { useState, useEffect } from 'react'
import { getmenu } from '../../actions/adminActions'
import { useDispatch, useSelector } from 'react-redux'
import * as AiIcons from 'react-icons/ai'
import { cusAddtoCart } from '../../actions/customerActions'
import { store } from 'react-notifications-component'

import 'animate.css'
const CustomerMenuScreen = () => {
  const menu = useSelector((store) => store.getallmenu)
  const [search, setSearch] = useState('')
  const { loading, response, error } = menu
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getmenu())
  }, [])

  const addToCart = (menuId) => {
    alert("Item Successfully added into cart");
    dispatch(cusAddtoCart(menuId, 1))
  }
  const DeleteFromCart = (menuId) => {
    alert("Item Successfully deleted from  cart");
    dispatch(cusAddtoCart(menuId, 0))
  }
  const all = () => {
    setSearch('')
  }
  const veg = () => {
    setSearch('veg')
  }
  const nonveg = () => {
    setSearch('nonveg')
  }

  useEffect(() => {}, [error, response, loading])
  return (
    <div>
      <input
        style={{ marginTop: 5 }}
        type="text"
        placeholder="Serach..."
        className="form-control-sm"
        onChange={(e) => {
          setSearch(e.target.value)
        }}
      />
      <button
        onClick={() => {
          all()
        }}
        className="btn btn-info"
        style={{ marginLeft: 470 }}
      >
        All
      </button>
      <button
        onClick={() => {
          veg()
        }}
        className="btn btn-success"
        style={{ marginLeft: 7 }}
      >
        Veg
      </button>
      <button
        onClick={() => {
          nonveg()
        }}
        className="btn btn-danger"
        style={{ marginLeft: 7 }}
      >
        NonVeg
      </button>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Price</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {response &&
            response.data &&
            response.data.length > 0 &&
            response.data
              .filter((val) => {
                if (search == '') {
                  return val
                } else if (
                  val.menuName.toLowerCase().includes(search.toLowerCase()) ||
                  val.category.toLowerCase().startsWith(search.toLowerCase())
                ) {
                  return val
                }
              })
              .map((menu) => {
                return (
                  <tr>
                    <td>{menu.menuName}</td>
                    <td>{menu.price}</td>
                    <td>{menu.category}</td>
                    <td>
                      <button
                        onClick={() => {
                          addToCart(menu.id)
                        }}
                        className="btn btn-success"
                      >
                        Add Item
                      </button>
                      <button
                        style={{ marginLeft: 5 }}
                        onClick={() => {
                          DeleteFromCart(menu.id)
                        }}
                        className="btn btn-danger"
                      >
                        Remove Item
                      </button>
                    </td>
                  </tr>
                )
              })}
        </tbody>
      </table>
    </div>
  )
}

export default CustomerMenuScreen
