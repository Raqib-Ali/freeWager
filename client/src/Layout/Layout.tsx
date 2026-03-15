import { Outlet } from "react-router";
import { Header } from "../Components/Header";

const Layout = () => {
  return (
    <>
      <Header />
      <div className="p-3">
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
