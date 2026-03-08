import { Link } from "react-router";
import "./Signup.css";

const Signup = () => {
  return (
    <div className="wrapper">
      <div className="parent">
        <div className="col-1"></div>
        <div className="col-2">
          <form>
            <div className="text-xl font-semibold">Create an account</div>
            <div>
              <label htmlFor="">Full Name</label>
              <input
                className="border border-gray-300 rounded-lg w-full p-2"
                type="text"
                placeholder="John Berg"
              />
            </div>
            <div>
              <label htmlFor="">Email</label>
              <input
                className="border border-gray-300 rounded-lg w-full p-2"
                type="text"
                placeholder="example@gmail.com"
              />
            </div>
            <div>
              <label htmlFor="">Mobile</label>
              <input
                className="border border-gray-300 rounded-lg w-full p-2"
                type="text"
                placeholder="00000000000"
              />
            </div>
            <div>
              <label htmlFor="">Password</label>
              <input
                className="border border-gray-300 rounded-lg w-full p-2"
                type="password"
                placeholder="Enter password"
              />
            </div>
            <button
              type="button"
              className="border border-gray-300 bg-blue-500 text-white rounded-lg w-full p-2"
            >
              Sign up
            </button>
            <a className="btn btn-dark ">
              <img
                width={"25px"}
                className="me-1"
                src={"./images/google.png"}
                alt="hello"
              />
              or sign up with Google
            </a>
            <p className="text-center text-sm text-gray-500 mt-2">
              Having an accoun? <Link to={"/login"}>Sign in now</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
