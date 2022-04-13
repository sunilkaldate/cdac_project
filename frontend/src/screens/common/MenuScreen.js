import { useState, useEffect } from 'react'
import { getmenu } from '../../actions/adminActions'
import { useDispatch, useSelector } from 'react-redux'
import { store } from 'react-notifications-component'

const MenuScreen = (props) => {
  const [search, setSearch] = useState('')

  const menu = useSelector((store) => store.getallmenu)

  const { loading, response, error } = menu

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getmenu())
  }, [])

  useEffect(() => {}, [error, response, loading])

  const addMenu = () => {
    props.history.push('/addmenu')
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
        style={{ marginLeft: 510 }}
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
                    <td>{menu.id}</td>
                    <td>{menu.menuName}</td>
                    <td>{menu.price}</td>
                    <td>{menu.category}</td>
                  </tr>
                )
              })}
        </tbody>
      </table>
      <button
        onClick={() => {
          addMenu()
        }}
        className="btn btn-warning"
      >
        AddMenu
      </button>
    </div>
  )
}

export default MenuScreen
