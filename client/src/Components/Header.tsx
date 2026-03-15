import { Link } from "react-router";
import "./Header.css";
import { useState } from "react";

export function Header() {
  const [prop, setProp] = useState(false);
  const isLogin = false;
  const isWager = false;

  function navToggle() {
    setProp(!prop);
    console.log(prop);
  }

  function closeNav() {
    if (prop) {
      setProp(!prop);
    }
  }

  return (
    <header className="shadow-sm sticky top-0 z-10 header  bg-white">
      <div className="flex justify-between px-3 py-2 items-center w-full">
        <Link to={"/"} className="no-underline">
          <div className="logo mb-0 font-semibold text-2xl">
            Free<span className="text-emerald-500">Wager</span>
          </div>
        </Link>
        <form className="md:w-[400px]">
          <div className="input-group ">
            <input
              className="border border-gray-300 rounded-lg w-full p-2.5"
              placeholder="Search Plumber, Electrician and more..."
              type="search"
              name=""
              id=""
            />
            <button className="bi bi-search btn btn-success"></button>
          </div>
        </form>
        <nav id="menu" className={"navigation"} data-visible={prop}>
          {!isLogin ? (
            <span>
              <Link
                onClick={closeNav}
                to={"/login"}
                className="fw-medium text-decoration-none text-dark"
              >
                Sign in
              </Link>
            </span>
          ) : null}

          {!isLogin || !isWager ? (
            <span>
              <Link
                onClick={closeNav}
                to={"ads/category"}
                className="border-4 border-emerald-500 rounded-2xl py-1 px-3 fw-medium text-decoration-none text-dark"
              >
                Become Wager
              </Link>
            </span>
          ) : null}
        </nav>
        <button
          className="button"
          onClick={navToggle}
          aria-controls="menu"
          aria-expanded={prop}
        >
          <span className="bi bi-justify">Nav</span>
        </button>
      </div>
    </header>
  );
}
