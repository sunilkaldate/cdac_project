const ContactUsScreen = () => {
  return (
    <div>
      <div
        className="card text-dark mb-3"
        style={{ backgroundColor: '#2eb85c' }}
      >
        <div className="card-header" style={{ textAlign: 'center' }}>
          <h5>Contact Us</h5>
        </div>
        <div className="card-body">
          <p className="card-text" style={{ textAlign: 'center' }}>
            Feel free to drop us a line below....!
          </p>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row">
          <div className="col-md-4 offset-md-4">
            <div className="card ">
              <div className="card-body">
                <form>
                  <div className="form-group">
                    <input
                      name="Name"
                      required
                      type="text"
                      className="form-control"
                      id="name"
                      aria-describedby="name"
                      placeholder="Enter your name"
                    />
                  </div>
                  <br />
                  <div className="form-group">
                    <input
                      name="email"
                      required
                      type="email"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Name@gmail.com"
                    />
                  </div>
                  <br />
                  <div className="form-group">
                    <textarea
                      class="form-control"
                      id="exampleFormControlTextarea1"
                      rows="2"
                      placeholder="Enter Message"
                    ></textarea>
                  </div>
                  <br />

                  <div className="container text-center ">
                    <button type="Send" className="btn btn-primary">
                      Send
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        <br />

        <div className="row ">
          <div className="col-md-4 offset-md-4">
            <div className="card">
              <div className="container">
                <h4>Address</h4>
                <p>RMS Hotel, F.C Road Pune</p>
                <h4>Email</h4>
                <p>Owner@gmail.com</p>
                <h4>Phone</h4>
                <p>+91-98887755441</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactUsScreen
