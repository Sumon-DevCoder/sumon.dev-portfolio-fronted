"use client";
import { useCreateblogMutation } from "@/redux/features/blog/blogApi";
import { useRouter } from "next/navigation";
import { FieldValues, useForm } from "react-hook-form";
import { toast } from "sonner";

const CreateBlog = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [createBlog] = useCreateblogMutation();

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

  // onSubmit function
  const onSubmit = async (data: FieldValues) => {
    const toastId = toast.loading("Creating...");

    try {
      const imgFile = data.img[0] as File; // Get the first file only
      const imgUrl = await uploadImageToImgBB(imgFile);
      if (!imgUrl) {
        throw new Error("Image upload failed");
      }

      const date = new Date("November 15, 2024");
      const formattedDate = `${date.toLocaleString("default", {
        month: "long",
      })} ${date.getDate()}, ${date.getFullYear()}`;

      const BlogInfo = {
        title: data.title,
        description: data.description,
        img: imgUrl,
        date: formattedDate,
      };

      console.log(BlogInfo);

      // Send to database
      const res = await createBlog(BlogInfo).unwrap();

      if (res) {
        toast.success(res?.message, { id: toastId, duration: 3000 });
        reset();
        router.push("/admin-dashboard/blog-list");
      }

      console.log(res);
    } catch (err) {
      const serverMsgErr = (err as Error)?.message || "Something went wrong";

      toast.error(serverMsgErr, { id: toastId, duration: 3000 });
    }
  };

  // Validation for minimum 1 image upload
  const validateFiles = (files: FileList): Promise<string | true> => {
    return new Promise((resolve) => {
      if (files.length < 1) {
        resolve("At least 1 image is required");
      }
      resolve(true);
    });
  };

  return (
    <div className="mx-auto w-full bg-white shadow-md rounded-lg p-8">
      <h2 className="text-2xl font-semibold text-indigo-700 text-center mb-4">
        Create a Blog
      </h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Blog Title */}
        <div className="mb-5">
          <label
            htmlFor="title"
            className="mb-2 block text-sm font-medium text-indigo-700"
          >
            Blog Title
          </label>
          <input
            type="text"
            {...register("title", {
              required: "Blog title is required",
            })}
            id="title"
            placeholder="Blog title"
            className="w-full rounded-md border border-gray-300 bg-white py-3 px-4 text-sm font-medium text-gray-700 outline-none focus:border-indigo-500 focus:shadow-md"
          />
          {errors.title && (
            <p className="text-red-500">{errors.title.message as string}</p>
          )}
        </div>

        {/* Blog Description */}
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
            })}
            id="description"
            placeholder="Blog description"
            className="w-full rounded-md border border-gray-300 bg-white py-3 px-4 text-sm font-medium text-gray-700 outline-none focus:border-indigo-500 focus:shadow-md"
            rows={4}
          />
          {errors.description && (
            <p className="text-red-500">
              {errors.description.message as string}
            </p>
          )}
        </div>

        {/* Blog Image */}
        <div className="mb-5">
          <label
            htmlFor="Skills-image"
            className="mb-2 block text-sm font-medium text-indigo-700"
          >
            Blogs Image
          </label>
          <input
            type="file"
            {...register("img", {
              required: "An image is required",
              validate: validateFiles,
            })}
            id="Skills-image"
            accept="image/*"
            className="w-full rounded-md border border-gray-300 bg-white py-3 px-4 text-sm font-medium text-gray-700 outline-none focus:border-indigo-500 focus:shadow-md"
          />
          <small className="text-gray-500">Upload an image</small>
          {errors.img && (
            <p className="text-red-500">{errors.img.message as string}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="mt-4 w-full rounded-md bg-indigo-600 py-3 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none"
        >
          Create Blog
        </button>
      </form>
    </div>
  );
};

export default CreateBlog;
