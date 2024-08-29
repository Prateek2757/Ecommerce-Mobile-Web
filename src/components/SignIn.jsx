import React, { useState } from "react";
import { Link } from "react-router-dom";

function SignIn() {
  const [credentail, setCredentail] = useState({ email: "", password: "" });
  const handleSubmit = () => {
    console.log("This is handle submit");
  };
   const handleChange = (e)=>{
       setCredentail({...credentail,[e.target.name]:e.target.value})
   }

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label text-warning">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            onChange={handleChange}
            value={credentail.email}
            name="email"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label text-warning">
            Password
          </label>
          <input
            type="password"
            name="password"
            onChange={handleChange}
            value={credentail.password}
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      <h6 className="text-warning"> Not Register?</h6>
      <Link className="nav-link" to="/signup">
        SignUp
      </Link>
    </div>
  );
}

export default SignIn;
