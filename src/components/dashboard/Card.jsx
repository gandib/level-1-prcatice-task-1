import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const Card = ({ product, handleDelete }) => {
  return (
    <div className="card card-compact w-80 bg-base-100 shadow-xl grow">
      <figure className="h-[400px]">
        <img src={product?.imgUrl} alt={product?.name} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{product?.name}</h2>
        <p className="font-bold text-sm">{product?.description}</p>
        <p className="text-green-500 font-bold">Price: {product?.price}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-sm btn-primary">
            <Link to={`/dashboard/details-product/${product?.id}`}>
              Details
            </Link>
          </button>
          <button className="btn btn-sm bg-teal-500 text-white">
            <Link to={`/dashboard/edit-product/${product?.id}`}>Edit</Link>
          </button>
          <button
            onClick={() => handleDelete(product?.id)}
            className="btn btn-sm bg-red-500 text-white"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
