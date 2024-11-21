"use client";
import {
  useUpdateprojectByIdMutation,
  useGetSingleprojectQuery,
} from "@/redux/features/project/projectApi";
import { useParams, useRouter } from "next/navigation";
import { FieldValues, useForm } from "react-hook-form";
import { toast } from "sonner";
import { useState, useEffect } from "react";

const UpdateProject = () => {
  const router = useRouter();
  const { id } = useParams();

  const { data: projectData } = useGetSingleprojectQuery(id);
  const [updateProject] = useUpdateprojectByIdMutation();
  const [technologies, setTechnologies] = useState<string[]>([]);
  const [techInput, setTechInput] = useState("");

  const project = projectData?.data;

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  useEffect(() => {
    if (projectData) {
      reset({
        title: project?.title,
        description: project?.description,
        clientCode: project?.clientCode,
        serverCode: project?.serverCode,
        liveLink: project?.liveLink,
      });
      setTechnologies(projectData.technologies || []);
    }
  }, [projectData, reset]);

  const handleAddTechnology = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && techInput.trim() !== "") {
      e.preventDefault();
      if (!technologies.includes(techInput.trim())) {
        setTechnologies((prev) => [...prev, techInput.trim()]);
      }
      setTechInput("");
    }
  };

  const handleRemoveTechnology = (tech: string) => {
    setTechnologies((prev) => prev.filter((t) => t !== tech));
  };

  const onSubmit = async (data: FieldValues) => {
    const toastId = toast.loading("Updating...");

    try {
      const updatedProjectInfo = {
        title: data.title,
        description: data.description,
        technologies,
        clientCode: data.clientCode,
        serverCode: data.serverCode,
        liveLink: data.liveLink,
      };

      console.log(updatedProjectInfo);

      const res = await updateProject({
        id: project?._id,
        data: updatedProjectInfo,
      }).unwrap();

      if (res) {
        toast.success(res?.message || "Project updated successfully", {
          id: toastId,
          duration: 3000,
        });
        router.push("/admin-dashboard/project-list");
      }
    } catch (err) {
      const serverMsgErr = (err as Error)?.message || "Something went wrong";
      toast.error(serverMsgErr, { id: toastId, duration: 3000 });
    }
  };

  return (
    <div className="mx-auto w-full bg-white shadow-md rounded-lg p-8">
      <h2 className="text-2xl font-semibold text-indigo-700 text-center mb-4">
        Update Project
      </h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Project Title */}
        <div className="mb-5">
          <label
            htmlFor="title"
            className="mb-2 block text-sm font-medium text-indigo-700"
          >
            Project Title
          </label>
          <input
            type="text"
            {...register("title", { required: "Project title is required" })}
            id="title"
            placeholder="Project title"
            className="w-full rounded-md border border-gray-300 bg-white py-3 px-4 text-sm font-medium text-gray-700 outline-none focus:border-indigo-500 focus:shadow-md"
          />
          {errors.title && (
            <p className="text-red-500">{errors.title.message as string}</p>
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
            })}
            id="description"
            placeholder="Project description"
            className="w-full rounded-md border border-gray-300 bg-white py-3 px-4 text-sm font-medium text-gray-700 outline-none focus:border-indigo-500 focus:shadow-md"
            rows={4}
          />
          {errors.description && (
            <p className="text-red-500">
              {errors.description.message as string}
            </p>
          )}
        </div>

        {/* Technologies */}
        <div className="mb-5">
          <label
            htmlFor="technologies"
            className="mb-2 block text-sm font-medium text-indigo-700"
          >
            Technologies
          </label>
          <div className="flex items-center gap-2">
            <input
              type="text"
              id="technologies"
              value={techInput}
              onChange={(e) => setTechInput(e.target.value)}
              onKeyDown={handleAddTechnology}
              placeholder="Enter a technology and press Enter"
              className="flex-1 rounded-md border border-gray-300 bg-white py-3 px-4 text-sm font-medium text-gray-700 outline-none focus:border-indigo-500 focus:shadow-md"
            />
          </div>
          <div className="mt-2 flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="inline-flex items-center gap-1 rounded-full bg-indigo-200 py-1 px-3 text-sm font-medium text-indigo-700"
              >
                {tech}
                <button
                  type="button"
                  className="text-red-500"
                  onClick={() => handleRemoveTechnology(tech)}
                >
                  &times;
                </button>
              </span>
            ))}
          </div>
        </div>

        {/* Client Code URL */}
        <div className="mb-5">
          <label
            htmlFor="clientCode"
            className="mb-2 block text-sm font-medium text-indigo-700"
          >
            Client Code URL
          </label>
          <input
            type="url"
            {...register("clientCode", {
              required: "Client code URL is required",
            })}
            id="clientCode"
            placeholder="https://github.com/your-client-repo"
            className="w-full rounded-md border border-gray-300 bg-white py-3 px-4 text-sm font-medium text-gray-700 outline-none focus:border-indigo-500 focus:shadow-md"
          />
          {errors.clientCode && (
            <p className="text-red-500">
              {errors.clientCode.message as string}
            </p>
          )}
        </div>

        {/* Server Code URL */}
        <div className="mb-5">
          <label
            htmlFor="serverCode"
            className="mb-2 block text-sm font-medium text-indigo-700"
          >
            Server Code URL
          </label>
          <input
            type="url"
            {...register("serverCode", {
              required: "Server code URL is required",
            })}
            id="serverCode"
            placeholder="https://github.com/your-server-repo"
            className="w-full rounded-md border border-gray-300 bg-white py-3 px-4 text-sm font-medium text-gray-700 outline-none focus:border-indigo-500 focus:shadow-md"
          />
          {errors.serverCode && (
            <p className="text-red-500">
              {errors.serverCode.message as string}
            </p>
          )}
        </div>

        {/* Live Link */}
        <div className="mb-5">
          <label
            htmlFor="liveLink"
            className="mb-2 block text-sm font-medium text-indigo-700"
          >
            Live Link
          </label>
          <input
            type="url"
            {...register("liveLink", {
              required: "Live link is required",
            })}
            id="liveLink"
            placeholder="https://your-live-project.com"
            className="w-full rounded-md border border-gray-300 bg-white py-3 px-4 text-sm font-medium text-gray-700 outline-none focus:border-indigo-500 focus:shadow-md"
          />
          {errors.liveLink && (
            <p className="text-red-500">{errors.liveLink.message as string}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="mt-4 w-full rounded-md bg-indigo-600 py-3 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none"
        >
          Update Project
        </button>
      </form>
    </div>
  );
};

export default UpdateProject;
