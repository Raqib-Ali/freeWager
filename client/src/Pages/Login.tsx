import { Link } from "react-router";
import "./Login.css";

const Login = () => {
  return (
    <div className="wrapper">
      <div className="parent">
        <div className="col-1"></div>
        <div className="col-2">
          <form>
            <div className="text-xl font-semibold">Nice to see you again</div>
            <div>
              <label htmlFor="">Login</label>
              <input
                className="border border-gray-300 rounded-lg w-full p-2"
                type="text"
                placeholder="Email or phone number"
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
              Sign in
            </button>
            <a className="w-full mt-2" href="#">
              <img
                width={"25px"}
                className="me-1"
                src={"./images/google.png"}
                alt="hello"
              />
              or sign in with Google
            </a>
            <p className="text-center text-sm text-gray-500 mt-2">
              Don't have an account? <Link to={"/signup"}>Sign up now</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
