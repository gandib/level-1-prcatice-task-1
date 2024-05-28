import AddOrEditProduct from "../components/dashboard/AddOrEditProduct";
import { toast } from "react-toastify";

const AddProduct = () => {
  const handleAddProduct = (data) => {
    console.log(data);
    alert("Are you want to add product?");
    fetch(`http://localhost:3000/products`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((data) => {
      console.log(data);
      toast("Product added successfully!");
    });
  };

  return (
    <div>
      <AddOrEditProduct
        pageName="Add Product"
        handleAddProduct={handleAddProduct}
      />
    </div>
  );
};

export default AddProduct;
