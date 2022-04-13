import { Link } from 'react-router-dom'

const Footer = (props) => {
  return (
    <div className="container-fluid">
      <div className="row bg-light">
        <div className="footer-widget lead col-md- ">
          <div
            className="text-center"
            style={{ backgroundColor: 'tomato', marginTop: 5 }}>
            CopyRight @ 2021-2022 Restuarant Pvt. Ltd.
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
