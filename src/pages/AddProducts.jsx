import  { useEffect, useState } from "react";
import apiClient from "../Services/api-client";
import { useForm } from "react-hook-form";
import authApiClient from "../Services/auth-api-client";

const AddProducts = () => {
    const [categories,setCategories] = useState([])

    const{
        register,
        handleSubmit,
        formState: {errors},
    } = useForm()

    //fetch category
    useEffect(() => {
        apiClient.get("/categories/").then(res => {
            console.log(res.data)
            setCategories(res.data)
        })
    },[])

    //submit product details
    const handleProduct = async(data) => {
        try{
            const response = await authApiClient.post("/products/",data)
            console.log(response.data)
        }catch(error){
            console.log(error)
        }
    }

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">Add New Product</h2>

      <form onSubmit={handleSubmit(handleProduct)} className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Product Name</label>
          <input
            {...register("name", { required: true })}
            className="input input-bordered w-full"
            placeholder="Product Name"
          />
          {errors.name && (
            <p className="text-red-500 text-xs">This field is required</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium">Description</label>
          <textarea
            {...register("description", { required: true })}
            className="textarea textarea-bordered w-full"
            placeholder="Description"
          ></textarea>
          {errors.description && (
            <p className="text-red-500 text-xs">This field is required</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium">Price</label>
          <input
            type="text"
            {...register("price", {
              required: "This Field is required",
              validate: (value) => {
                const parsedValue = parseFloat(value);
                return !isNaN(parsedValue) || "Please enter a valid number!";
              },
            })}
            className="input input-bordered w-full"
            placeholder="Price"
          />
          {errors.price && (
            <p className="text-red-500 text-xs">{errors.price.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium">Stock Quantity</label>
          <input
            type="number"
            {...register("stock", { required: true })}
            className="input input-bordered w-full"
            placeholder="Stock"
          />
          {errors.stock && (
            <p className="text-red-500 text-xs">This field is required</p>
          )}
        </div>

        {/* Dropdown for categories */}
        <div>
          <label className="block text-sm font-medium">Category</label>
          <select
            {...register("category", { required: true })}
            className="select select-bordered w-full"
          >
            <option value="">Select a category</option>
            {categories.map((cat) => (
              <option key={cat.id} value={cat.id}>
                {cat.name}
              </option>
            ))}
          </select>
          {errors.category && (
            <p className="text-red-500 text-xs">This field is required</p>
          )}
        </div>

        <button type="submit" className="btn btn-primary w-full">
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProducts;
