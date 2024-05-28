import { Link, Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const DashboardLayout = () => {
  return (
    <div className="grid grid-cols-12 min-h-screen p-12">
      <div className="col-span-2 bg-slate-100 font-bold">
        <ul>
          <li className="border border-black  p-4 w-full">
            <Link to={"home"}>Dashboard Home</Link>
          </li>
          <li className="border border-black  p-4 w-full">
            <Link to={"all-products"}>All Products</Link>
          </li>
          <li className="border border-black  p-4 w-full">
            <Link to={"add-product"}>Add Product</Link>
          </li>
          <li className="border border-black  p-4 w-full">
            <Link to={"/"}>Back Home</Link>
          </li>
        </ul>
      </div>

      <div className="col-span-10 p-12">
        <Outlet />
        <ToastContainer />
      </div>
    </div>
  );
};

export default DashboardLayout;
