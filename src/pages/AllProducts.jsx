import Card from "../components/dashboard/Card";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";

const AllProducts = () => {
  const [products, setProduct] = useState([]);
  const [refresh, setRefresh] = useState(false);
  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [refresh]);

  const handleDelete = (id) => {
    console.log(id);
    alert("Are you want to delete product?");
    fetch(`http://localhost:3000/products/${id}`, {
      method: "DELETE",
    }).then((data) => {
      console.log(data);
      toast("Product deleted successfully!");
      setRefresh(!refresh);
    });
  };
  return (
    <div>
      <h1 className="text-3xl font-bold my-6 flex justify-center">
        All Products
      </h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
        {products.map((product) => (
          <Card
            key={product.id}
            product={product}
            handleDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
