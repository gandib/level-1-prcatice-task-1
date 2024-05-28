/* eslint-disable react/prop-types */
import { useState } from "react";

const AddOrEditProduct = ({
  pageName,
  productData,
  handleEditProduct,
  handleAddProduct,
}) => {
  console.log(productData?.id);
  const [id, setId] = useState(productData?.id || "");
  const [name, setName] = useState(productData?.name || "");
  const [price, setPrice] = useState(productData?.price || 0);
  const [description, setDescription] = useState(
    productData?.description || ""
  );
  const [imgUrl, setImgUrl] = useState(productData?.imgUrl || "");

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      id,
      name,
      price,
      description,
      imgUrl,
    };

    if (handleEditProduct) {
      handleEditProduct(data);
    }
    if (handleAddProduct) {
      handleAddProduct(data);
    }
  };

  return (
    <div className="card card-compact w-3/4 bg-base-100 shadow-xl">
      <h1 className="flex justify-center  text-3xl font-bold my-4">
        {pageName}
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="flex justify-center">
          <input
            onChange={(e) => setId(e.target.value)}
            type="text"
            placeholder={id || "Id"}
            defaultValue={id}
            className="input input-bordered input-md w-4/5 mx-2 "
          />
        </div>
        <div className="flex justify-center my-2">
          <input
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder={name || "Name"}
            defaultValue={name}
            className="input input-bordered input-md w-4/5 mx-2 "
          />
        </div>
        <div className="flex justify-center">
          <input
            onChange={(e) => setPrice(e.target.value)}
            type="text"
            placeholder={price || "Price"}
            defaultValue={price}
            className="input input-bordered input-md w-4/5 mx-2 "
          />
        </div>
        <div className="flex justify-center">
          <textarea
            onChange={(e) => setDescription(e.target.value)}
            type="text"
            placeholder={description || "Comment"}
            defaultValue={description}
            className="textarea textarea-bordered  w-4/5 mx-2 "
          />
        </div>
        <div className="flex justify-center my-2">
          <input
            onChange={(e) => setImgUrl(e.target.value)}
            type="text"
            placeholder={imgUrl || "ImgUrl"}
            defaultValue={imgUrl}
            className="input input-bordered input-md w-4/5 mx-2 "
          />
        </div>
        <div className="flex justify-center mb-12">
          <button
            type="submit"
            className="btn w-2/4 bg-purple-500 text-white font-bold text-1xl"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddOrEditProduct;
