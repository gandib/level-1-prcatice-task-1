import { useLoaderData } from "react-router-dom";
import Card from "./Card";
import { toast } from "react-toastify";

const Details = () => {
  const product = useLoaderData();
  const handleDelete = (id) => {
    console.log(id);
    alert("Are you want to delete product?");
    fetch(`http://localhost:3000/products/${id}`, {
      method: "DELETE",
    }).then((data) => {
      console.log(data);
      toast("Product deleted successfully!");
    });
  };
  return (
    <div>
      <h1 className="text-3xl font-bold my-6 flex justify-center">
        Product Details
      </h1>
      <div className="flex justify-center">
        <Card product={product} handleDelete={handleDelete} />
      </div>
    </div>
  );
};

export default Details;
