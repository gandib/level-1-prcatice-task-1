import { useLoaderData } from "react-router-dom";
import AddOrEditProduct from "../components/dashboard/AddOrEditProduct";
import { toast } from "react-toastify";

const EditProduct = () => {
  const productData = useLoaderData();
  console.log(productData);

  const handleEditProduct = (data) => {
    console.log(data);
    alert("Are you want to update product?");
    fetch(`http://localhost:3000/products/${productData.id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((data) => {
      console.log(data);
      toast("Product updated successfully!");
    });
  };
  return (
    <div>
      <AddOrEditProduct
        pageName="Edit Product"
        productData={productData}
        handleEditProduct={handleEditProduct}
      />
    </div>
  );
};

export default EditProduct;
