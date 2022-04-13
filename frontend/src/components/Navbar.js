import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { OwnerSidebarData } from './sidebardata/OwnerSidebarData'
import './Navbar.css'
import { IconContext } from 'react-icons'
import { ManagerSidebarData } from './sidebardata/ManagerSidebarData'
import { ChefSidebarData } from './sidebardata/ChefSidebarData'
import { WaiterSidebarData } from './sidebardata/WaiterSidebarData'
import { SupplierSidebarData } from './sidebardata/SupplierSidebarData'
import { CustomerSidebarData } from './sidebardata/CustomerSidebarData'
import { adminLogout } from './../actions/adminActions'
import { customerLogout } from '../actions/customerActions'

const Navbar = (props) => {
  const [sidebar, setSidebar] = useState(false)
  const loggedin = sessionStorage['Loggedin']
  const role = sessionStorage['role']

  const dispatch = useDispatch()

  let customer
  const customerSignin = useSelector((store) => store.customerSignin)
  const { response1 } = customerSignin
  if (customerSignin.loading1 == false && customerSignin.response1) {
    customer = true
  }

  const adminSignin = useSelector((store) => store.adminSignin)
  const { response } = adminSignin
  let user
  let show = false
  if (adminSignin.loading == false && response) {
    user = adminSignin.response.role
    show = true
    customer = false
  }

  if (role) {
    show = true
  }

  const onLogout = () => {
    if (role == 'CUSTOMER') {
      dispatch(customerLogout())
    } else {
      dispatch(adminLogout())
    }
  }

  useEffect(() => {}, [response])

  const showSidebar = () => setSidebar(!sidebar)
  return (
    <div>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className="navbar">
          {(response || loggedin || response1) && (
            <Link to="#" className="menu-bars">
              <FaIcons.FaBars onClick={showSidebar} />
            </Link>
          )}
          {!adminSignin.response && !customerSignin.response1 && !role && (
            <Link to="/adminsignin" className="menu-bars">
              Staff Signin
            </Link>
          )}
          {!adminSignin.response && !customerSignin.response1 && !role && (
            <Link to="/customersignup" className="menu-bars">
              Customer Signup
            </Link>
          )}
          {!adminSignin.response && !customerSignin.response1 && !role && (
            <Link to="/customersignin" className="menu-bars">
              Customer Signin
            </Link>
          )}
          <Link to="/contactus" className="menu-bars">
            Contact Us
          </Link>
          <Link to="/about" className="menu-bars">
            About
          </Link>
          {(adminSignin.response || customerSignin.response1 || role) && (
            <div className="d-flex " style={{ marginLeft: 1200 }}>
              <button
                onClick={onLogout}
                type="button"
                className="btn "
                style={{ background: '#f26622' }}
              >
                Logout
              </button>
            </div>
          )}
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {show &&
              (user == 'OWNER' || role == 'OWNER') &&
              OwnerSidebarData.map((item, index) => {
                return (
                  <li key={index} className={item.cName}>
                    <Link to={item.path}>
                      {item.icon}
                      <span>{item.title}</span>
                    </Link>
                  </li>
                )
              })}
            {show &&
              (user == 'MANAGER' || role == 'MANAGER') &&
              ManagerSidebarData.map((item, index) => {
                return (
                  <li key={index} className={item.cName}>
                    <Link to={item.path}>
                      {item.icon}
                      <span>{item.title}</span>
                    </Link>
                  </li>
                )
              })}
            {show &&
              (user == 'CHEF' || role == 'CHEF') &&
              ChefSidebarData.map((item, index) => {
                return (
                  <li key={index} className={item.cName}>
                    <Link to={item.path}>
                      {item.icon}
                      <span>{item.title}</span>
                    </Link>
                  </li>
                )
              })}
            {show &&
              (user == 'WAITER' || role == 'WAITER') &&
              WaiterSidebarData.map((item, index) => {
                return (
                  <li key={index} className={item.cName}>
                    <Link to={item.path}>
                      {item.icon}
                      <span>{item.title}</span>
                    </Link>
                  </li>
                )
              })}
            {show &&
              (user == 'SUPPLIER' || role == 'SUPPLIER') &&
              SupplierSidebarData.map((item, index) => {
                return (
                  <li key={index} className={item.cName}>
                    <Link to={item.path}>
                      {item.icon}
                      <span>{item.title}</span>
                    </Link>
                  </li>
                )
              })}
            {(customer || role == 'CUSTOMER') &&
              CustomerSidebarData.map((item, index) => {
                return (
                  <li key={index} className={item.cName}>
                    <Link to={item.path}>
                      {item.icon}
                      <span>{item.title}</span>
                    </Link>
                  </li>
                )
              })}
          </ul>
        </nav>
      </IconContext.Provider>
    </div>
  )
}

export default Navbar
