import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

const Login = () => {
    const { login } = useContext(AuthContext)
    const [succes, setSuccess] = useState('');
    const [error,setError] = useState('');

    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/';

  const handleLogin = (e) => {
    e.preventDefault();

    setError('')
    setSuccess('')

   const form = e.target;
   const email = form.email.value;
   const password = form.password.value;
   console.log(email, password);

   login(email, password)
   .then(result => {
       const loggedUser = result.user;
       console.log(loggedUser)
       form.reset()
       setSuccess('User login successfully')
       navigate(from, {replace : true})
   })
   .catch(error => {
       console.log(error.message);
       setError(error.message)
   })
  };

  return (
    <div className="">
      <form onSubmit={handleLogin} className="card-body max-w-sm mt-10 mx-auto rounded border-2 border-gray-500">
        <h2 className="text-2xl text-center font-semibold">Login</h2>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            name="email"
            type="email"
            placeholder="email"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            name="password"
            type="password"
            placeholder="password"
            className="input input-bordered"
            required
          />
          <label className="label">
            <p>
              Are you new here? please{" "}
              <Link className="link" to="/signup">
                Sign up
              </Link>
            </p>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
        <p className="text-error">{error}</p>
        <p className="text-success">{succes}</p>
      </form>
    </div>
  );
};

export default Login;
