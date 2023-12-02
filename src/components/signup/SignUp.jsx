import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
        <div className=''>
           <form className="card-body max-w-sm mt-10 mx-auto rounded border-2 border-gray-500">
            <h2 className='text-2xl text-center font-semibold'>Sign Up</h2>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Confirm Password</span>
          </label>
          <input type="password" placeholder="Confirm password" className="input input-bordered" required />
          <label className="label">
           <p>Alraedy have an account? please <Link className='link' to='/login'>Login</Link></p>
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