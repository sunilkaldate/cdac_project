import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Header from '../../components/Header'
import {
  getingredinet,
  addMenuItem,
  resetAddMenu,
} from '../../actions/adminActions'


const AddMenuScreen = (props) => {
  const [menuName, setMenuName] = useState('')
  const [category, setCategory] = useState('')
  const [price, setPrice] = useState('')

  let ingredient = new Array()
  
  const addMenu = () => {
    console.log(ingredient)
    dispatch(addMenuItem(menuName, category, price, ingredient))
  }

  const ingredients = useSelector((store) => store.getAllIngredients)

  const { loading, response, error } = ingredients

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getingredinet())
  }, [])

  useEffect(() => {}, [error, response, loading])

  let index = ingredient.length
  const addingredient = (id) => {
    ingredient[index] = id
    index++
  }

  const addmenu = useSelector((store) => store.addmenu)
  const { loading1, response1, error1 } = addmenu

  useEffect(() => {
    console.log('use effect called: ')
    console.log('loading: ', loading1)
    console.log('response: ', response1)
    console.log('error: ', error1)

    if (response1) {
      // user successfully got registered
      
      dispatch(resetAddMenu())
      props.history.push('/menu')
    } else if (error) {
      // there is an error while making the API call
      console.log(error)
      alert('error while making API call')
    }
  }, [loading1, response1, error1])

  return (
    <div>
      <Header title="AddMenu" />

      <div className="form">
        <div className="mb-3">
          <label className="form-label">Menu Name</label>
          <input
            onChange={(e) => {
              setMenuName(e.target.value)
            }}
            className="form-control"></input>
        </div>
        <div className="mb-3">
          <label className="form-label">Category</label>
          <input
            onChange={(e) => {
              setCategory(e.target.value)
            }}
            className="form-control"></input>
        </div>
        <div className="mb-3">
          <label className="form-label">Price</label>
          <input
            onChange={(e) => {
              setPrice(e.target.value)
            }}
            type="number"
            className="form-control"
            placeholder=""
          />
        </div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Id</th>
              <th>name</th>
              <th>Check</th>
            </tr>
          </thead>
          <tbody>
            {response &&
              response.data &&
              response.data.length > 0 &&
              response.data.map((ing) => {
                return (
                  <tr>
                    <td>{ing.id}</td>
                    <td>{ing.name}</td>
                    <input
                      onChange={(e) => {
                        addingredient(ing.id)
                      }}
                      type="checkbox"
                      value={ing.id}
                    />
                  </tr>
                )
              })}
          </tbody>
        </table>
        <button onClick={addMenu} className="btn btn-success">
          AddMenu
        </button>
      </div>
    </div>
  )
}

export default AddMenuScreen
