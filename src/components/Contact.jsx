import React from 'react'

function Contact() {
  return (
    <>
    <>
    <div className="container">
    
    
  <div className="form-floating mb-3">
    <input
      type="email"
      className="form-control"
      id="floatingInput"
      placeholder="name@example.com"
    />
    <label htmlFor="floatingInput">Email address</label>
  </div>
  <div className="form-floating">
    <input
      type="password"
      className="form-control"
      id="floatingPassword"
      placeholder="Password"
    />
    <label htmlFor="floatingPassword">Password</label>
    <button type="button" className="btn btn-success">submit</button>
  </div>
  </div>
</>

    </>
  )
}

export default Contact;
