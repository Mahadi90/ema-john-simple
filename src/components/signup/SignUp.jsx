import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  const handleSignUp = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const cPassword = form.cPassword.value;
    console.log(email, password, cPassword);
  };

  return (
    <div className="">
      <form onSubmit={handleSignUp} className="card-body max-w-sm mt-10 mx-auto rounded border-2 border-gray-500">
        <h2 className="text-2xl text-center font-semibold">Sign Up</h2>
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
            <a href="#" className="label-text-alt link link-hover">
              Forgot password?
            </a>
          </label>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Confirm Password</span>
          </label>
          <input
          name="cPassword"
            type="password"
            placeholder="Confirm password"
            className="input input-bordered"
            required
          />
          <label className="label">
            <p>
              Alraedy have an account? please{" "}
              <Link className="link" to="/login">
                Login
              </Link>
            </p>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
