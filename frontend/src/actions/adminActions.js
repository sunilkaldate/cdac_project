import {
  ADMIN_SIGNUP_REQUEST,
  ADMIN_SIGNUP_SUCCESS,
  ADMIN_SIGNUP_FAIL,
  ADMIN_SIGNIN_FAIL,
  ADMIN_SIGNIN_SUCCESS,
  ADMIN_SIGNIN_REQUEST,
  GET_STOCK_REQUEST,
  GET_STOCK_SUCCESS,
  GET_STOCK_FAIL,
  UPDATE_STOCK_REQUEST,
  UPDATE_STOCK_SUCCESS,
  UPDATE_STOCK_FAIL,
  GET_SUPPLIER_REQUEST,
  GET_SUPPLIER_SUCCESS,
  GET_SUPPLIER_FAIL,
  GET_MENU_REQUEST,
  GET_MENU_SUCCESS,
  GET_MENU_FAIL,
  GET_INGREDIENT_REQUEST,
  GET_INGREDIENT_FAIL,
  GET_INGREDIENT_SUCCESS,
  ADD_MENU_FAIL,
  ADD_MENU_REQUEST,
  ADD_MENU_SUCCESS,
  RESET_ADD_MENU,
  ADMIN_SIGNOUT,
  RESET_UPDATE_STOCK,
  GET_FEEDBACK_FAIL,
  GET_FEEDBACK_REQUEST,
  GET_FEEDBACK_SUCCESS,
  GET_PROFILE_FAIL,
  GET_PROFILE_REQUEST,
  GET_PROFILE_SUCCESS,
  UPDATE_PROFILE_FAIL,
  UPDATE_PROFILE_REQUEST,
  UPDATE_PROFILE_SUCCESS,
  RESET_UPDATE_PROFILE,
} from '../constants/adminConstants'

import axios from 'axios'

export const adminLogout = () => {
  return (dispatch) => {
    sessionStorage.removeItem('id')
    sessionStorage.removeItem('role')
    sessionStorage.removeItem('name')
    sessionStorage.removeItem('token')
    sessionStorage.removeItem('Loggedin')
    dispatch({ type: ADMIN_SIGNOUT })
    document.location.href = '/'
  }
}

export const signup = (name, username, email, password, role) => {
  return (dispatch) => {
    dispatch({
      type: ADMIN_SIGNUP_REQUEST,
    })

    const header = {
      headers: {
        'Content-Type': 'application/json',
      },
    }

    const body = {
      name,
      username,
      email,
      password,
      role,
    }
    const url = 'http://localhost:8080/admin/register'
    axios
      .post(url, body, header)
      .then((response) => {
        dispatch({
          type: ADMIN_SIGNUP_SUCCESS,
          payload: response.data,
        })
      })
      .catch((error) => {
        dispatch({
          type: ADMIN_SIGNUP_FAIL,
          payload: error,
        })
      })
  }
}

export const signin = (username, password) => {
  return (dispatch) => {
    dispatch({
      type: ADMIN_SIGNIN_REQUEST,
    })

    const header = {
      headers: {
        'Content-Type': 'application/json',
      },
    }

    const body = {
      username,
      password,
    }
    const url = 'http://localhost:8080/admin/login'
    axios
      .post(url, body, header)
      .then((response) => {
        dispatch({
          type: ADMIN_SIGNIN_SUCCESS,
          payload: response.data,
        })
      })
      .catch((error) => {
        dispatch({
          type: ADMIN_SIGNIN_FAIL,
          payload: error,
        })
      })
  }
}

export const getstock = () => {
  return (dispatch) => {
    dispatch({
      type: GET_STOCK_REQUEST,
    })

    const header = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: sessionStorage['token'],
      },
    }

    console.log(header.headers['Authorization'])

    const url = 'http://localhost:8080/admin/stocks'
    axios
      .get(url, header)
      .then((response) => {
        dispatch({
          type: GET_STOCK_SUCCESS,
          payload: response,
        })
      })
      .catch((error) => {
        dispatch({
          type: GET_STOCK_FAIL,
          payload: error,
        })
      })
  }
}

export const getProfile = () => {
  return (dispatch) => {
    dispatch({
      type: GET_PROFILE_REQUEST,
    })

    const header = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: sessionStorage['token'],
      },
    }

    const adminId = sessionStorage['id']
    console.log(header.headers['Authorization'])

    const url = `http://localhost:8080/admin/get/${adminId}`
    axios
      .get(url, header)
      .then((response) => {
        dispatch({
          type: GET_PROFILE_SUCCESS,
          payload: response,
        })
      })
      .catch((error) => {
        dispatch({
          type: GET_PROFILE_FAIL,
          payload: error,
        })
      })
  }
}

export const getSupplier = (id) => {
  return (dispatch) => {
    dispatch({
      type: GET_SUPPLIER_REQUEST,
    })

    const header = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: sessionStorage['token'],
      },
    }

    console.log(header.headers['Authorization'])

    const url = `http://localhost:8080/supplier/getingredinet/${id}`
    axios
      .get(url, header)
      .then((response) => {
        dispatch({
          type: GET_SUPPLIER_SUCCESS,
          payload: response,
        })
      })
      .catch((error) => {
        dispatch({
          type: GET_SUPPLIER_FAIL,
          payload: error,
        })
      })
  }
}

export const updatestock = (id, name, qty) => {
  return (dispatch) => {
    dispatch({
      type: UPDATE_STOCK_REQUEST,
    })

    const header = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: sessionStorage['token'],
      },
    }
    const body = {
      id,
      name,
      qty,
    }
    console.log(header.headers['Authorization'])

    const url = 'http://localhost:8080/admin/updatestock'
    axios
      .post(url, body, header)
      .then((response) => {
        dispatch({
          type: UPDATE_STOCK_SUCCESS,
          payload: response,
        })
      })
      .catch((error) => {
        dispatch({
          type: UPDATE_STOCK_FAIL,
          payload: error,
        })
      })
  }
}

export const getmenu = () => {
  return (dispatch) => {
    dispatch({
      type: GET_MENU_REQUEST,
    })

    const header = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: sessionStorage['token'],
      },
    }

    console.log(header.headers['Authorization'])

    const url = 'http://localhost:8080/menu/getall'
    axios
      .get(url, header)
      .then((response) => {
        dispatch({
          type: GET_MENU_SUCCESS,
          payload: response,
        })
      })
      .catch((error) => {
        dispatch({
          type: GET_MENU_FAIL,
          payload: error,
        })
      })
  }
}

export const getFeedback = () => {
  return (dispatch) => {
    dispatch({
      type: GET_FEEDBACK_REQUEST,
    })

    const header = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: sessionStorage['token'],
      },
    }

    console.log(header.headers['Authorization'])

    const url = 'http://localhost:8080/admin/feedback'
    axios
      .get(url, header)
      .then((response) => {
        dispatch({
          type: GET_FEEDBACK_SUCCESS,
          payload: response,
        })
      })
      .catch((error) => {
        dispatch({
          type: GET_FEEDBACK_FAIL,
          payload: error,
        })
      })
  }
}

export const getingredinet = () => {
  return (dispatch) => {
    dispatch({
      type: GET_INGREDIENT_REQUEST,
    })

    const header = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: sessionStorage['token'],
      },
    }

    console.log(header.headers['Authorization'])

    const url = 'http://localhost:8080/ingredients/list'
    axios
      .get(url, header)
      .then((response) => {
        dispatch({
          type: GET_INGREDIENT_SUCCESS,
          payload: response,
        })
      })
      .catch((error) => {
        dispatch({
          type: GET_INGREDIENT_FAIL,
          payload: error,
        })
      })
  }
}

export const addMenuItem = (menuName, category, price, ingredients) => {
  return (dispatch) => {
    dispatch({
      type: ADD_MENU_REQUEST,
    })

    const header = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: sessionStorage['token'],
      },
    }

    const body = {
      menuName,
      category,
      price,
      ingredientId: ingredients.map((i) => {
        return i
      }),
    }

    console.log(header.headers['Authorization'])

    const url = 'http://localhost:8080/menu/add'
    axios
      .post(url, body, header)
      .then((response) => {
        dispatch({
          type: ADD_MENU_SUCCESS,
          payload: response,
        })
      })
      .catch((error) => {
        dispatch({
          type: ADD_MENU_FAIL,
          payload: error,
        })
      })
  }
}

export const updateProfile = (name, username, email, password, role) => {
  return (dispatch) => {
    dispatch({
      type: UPDATE_PROFILE_REQUEST,
    })

    const header = {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': sessionStorage['token'],
      },
    }
    const id = sessionStorage['id']
    const body = {
      id,
      name,
      username,
      email,
      password,
      role,
    }
    console.log(header.headers['Authorization'])

    const url = `http://localhost:8080/admin/update/${id}`
    axios
      .post(url, body, header)
      .then((response) => {
        dispatch({
          type: UPDATE_PROFILE_SUCCESS,
          payload: response,
        })
      })
      .catch((error) => {
        dispatch({
          type: UPDATE_PROFILE_FAIL,
          payload: error,
        })
      })
  }
}

export const resetAddMenu = () => {
  return {
    type: RESET_ADD_MENU,
  }
}
export const resetUpdateStock = () => {
  return {
    type: RESET_UPDATE_STOCK,
  }
}

export const resetUpdateProfile = () => {
  return {
    type: RESET_UPDATE_PROFILE,
  }
}

