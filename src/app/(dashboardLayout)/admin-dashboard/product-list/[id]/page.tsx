"use client";

import { useEffect } from "react";
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useForm, FieldValues } from "react-hook-form";
import { toast } from "sonner";
import {
  useGetSingleProductQuery,
  useUpdateProductByIdMutation,
} from "../../../../../redux/features/skills/skillsApi";

const UpdateProduct = () => {
  const productId = useParams();
  const { data: productData } = useGetSingleProductQuery(productId?.id);
  const product = productData?.data;

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm<FieldValues>();

  const [updateProductById] = useUpdateProductByIdMutation();
  const router = useRouter();

  // Image upload function
  const uploadImageToImgBB = async (file: File) => {
    const url = `https://api.imgbb.com/1/upload?key=${"9b72c2e7f55726fd9a28bfb8bfedc08b"}`;
    const formData = new FormData();
    formData.append("image", file);

    try {
      const response = await fetch(url, {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      if (data.success) {
        return data.data.url;
      } else {
        throw new Error(data.error.message);
      }
    } catch (error) {
      console.error("Error uploading image:", error);
      return null;
    }
  };

  // Set default values when product data is loaded
  useEffect(() => {
    if (product) {
      setValue("productName", product.name);
      setValue("description", product.description);
      setValue("price", product.price);
      setValue("stockQuantity", product.stockQuantity);
      setValue("category", product.category);
    }
  }, [product, setValue]);

  // onSubmit function for updating product
  const onSubmit = async (data: FieldValues) => {
    const toastId = toast.loading("Updating...");

    try {
      // Handle image upload only if a new image is provided
      let imgUrl = product?.image; // Default to existing image if no new image is uploaded
      if (data.img && data.img.length > 0) {
        const imgFile = data.img[0] as File;
        imgUrl = await uploadImageToImgBB(imgFile);
        if (!imgUrl) {
          throw new Error("Image upload failed");
        }
      }

      // Construct updated product information
      const productInfo = {
        name: data.productName, // Defaults to existing name since we set it in useEffect
        description: data.description, // Defaults to existing description
        price: Number(data.price), // Defaults to existing price
        stockQuantity: Number(data.stockQuantity), // Defaults to existing stock quantity
        category: data.category, // Defaults to existing category
        image: imgUrl, // Use updated or existing image URL
      };

      // Update product by ID
      const res = await updateProductById({
        id: productId?.id,
        productInfo,
      }).unwrap();

      if (res) {
        toast.success(res?.message, { id: toastId, duration: 3000 });
        reset();
        router.push("/admin-dashboard/product-list");
      }
    } catch (err) {
      const serverMsgErr = (err as Error)?.message || "Something went wrong";
      toast.error(serverMsgErr, { id: toastId, duration: 3000 });
    }
  };

  // Validation for minimum 1 image upload
  const validateFiles = (files: FileList): Promise<string | true> => {
    return new Promise((resolve) => {
      if (files.length > 1) {
        resolve("Only one image can be uploaded");
      }
      resolve(true);
    });
  };

  return (
    <div className="mx-auto w-full bg-white shadow-md rounded-lg p-8">
      <h2 className="text-2xl font-semibold text-indigo-700 text-center mb-4">
        Update Product
      </h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Product Name */}
        <div className="mb-5">
          <label
            htmlFor="product-name"
            className="mb-2 block text-sm font-medium text-indigo-700"
          >
            Product Name
          </label>
          <input
            type="text"
            {...register("productName", {
              required: "Product Name is required",
            })}
            id="product-name"
            placeholder="Product Name"
            className="w-full rounded-md border border-gray-300 bg-white py-3 px-4 text-sm font-medium text-gray-700 outline-none focus:border-indigo-500 focus:shadow-md"
          />
          {errors.productName && (
            <p className="text-red-500">
              {errors.productName.message as string}
            </p>
          )}
        </div>

        {/* Description */}
        <div className="mb-5">
          <label
            htmlFor="description"
            className="mb-2 block text-sm font-medium text-indigo-700"
          >
            Description
          </label>
          <textarea
            {...register("description", {
              required: "Description is required",
              maxLength: {
                value: 500,
                message: "Description cannot exceed 500 characters",
              },
            })}
            id="description"
            placeholder="Product Description"
            className="w-full rounded-md border border-gray-300 bg-white py-3 px-4 text-sm font-medium text-gray-700 outline-none focus:border-indigo-500 focus:shadow-md"
            rows={4}
          />
          {errors.description && (
            <p className="text-red-500">
              {errors.description.message as string}
            </p>
          )}
        </div>

        {/* Price */}
        <div className="mb-5">
          <label
            htmlFor="price"
            className="mb-2 block text-sm font-medium text-indigo-700"
          >
            Price
          </label>
          <input
            type="number"
            {...register("price", {
              required: "Price is required",
              min: { value: 0, message: "Price must be at least 0" },
            })}
            id="price"
            placeholder="Enter price"
            className="w-full rounded-md border border-gray-300 bg-white py-3 px-4 text-sm font-medium text-gray-700 outline-none focus:border-indigo-500 focus:shadow-md"
          />
          {errors.price && (
            <p className="text-red-500">{errors.price.message as string}</p>
          )}
        </div>

        {/* Stock Quantity */}
        <div className="mb-5">
          <label
            htmlFor="stock-quantity"
            className="mb-2 block text-sm font-medium text-indigo-700"
          >
            Stock Quantity
          </label>
          <input
            type="number"
            {...register("stockQuantity", {
              required: "Stock Quantity is required",
              min: { value: 0, message: "Stock Quantity cannot be negative" },
            })}
            id="stock-quantity"
            placeholder="Enter stock quantity"
            className="w-full rounded-md border border-gray-300 bg-white py-3 px-4 text-sm font-medium text-gray-700 outline-none focus:border-indigo-500 focus:shadow-md"
          />
          {errors.stockQuantity && (
            <p className="text-red-500">
              {errors.stockQuantity.message as string}
            </p>
          )}
        </div>

        {/* Category */}
        <div className="mb-5">
          <label
            htmlFor="category"
            className="mb-2 block text-sm font-medium text-indigo-700"
          >
            Category
          </label>
          <select
            {...register("category", { required: "Category is required" })}
            id="category"
            className="w-full rounded-md border border-gray-300 bg-white py-3 px-4 text-sm font-medium text-gray-700 outline-none focus:border-indigo-500 focus:shadow-md"
          >
            <option value="">Select a category</option>
            <option value="fish">Fish</option>
            <option value="duck">Duck</option>
            <option value="hen">Hen</option>
            <option value="cow">Cow</option>
            <option value="bird">Bird</option>
          </select>
          {errors.category && (
            <p className="text-red-500">{errors.category.message as string}</p>
          )}
        </div>

        {/* Product Image */}
        <div className="mb-5">
          <label
            htmlFor="product-image"
            className="mb-2 block text-sm font-medium text-indigo-700"
          >
            Product Image (optional)
          </label>
          <input
            type="file"
            {...register("img", { validate: validateFiles })}
            id="product-image"
            accept="image/*"
            className="w-full rounded-md border border-gray-300 bg-white py-3 px-4 text-sm font-medium text-gray-700 outline-none focus:border-indigo-500 focus:shadow-md"
          />
          <small className="text-gray-500">Upload a new image (optional)</small>
          {errors.img && (
            <p className="text-red-500">{errors.img.message as string}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full rounded-md bg-indigo-600 py-3 text-sm font-semibold text-white hover:bg-indigo-700 focus:outline-none"
        >
          Update Product
        </button>
      </form>
    </div>
  );
};

export default UpdateProduct;
