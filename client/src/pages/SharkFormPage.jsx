import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import {
  createShark,
  deleteShark,
  updateShark,
  getShark,
} from "../api/shark.api";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-hot-toast";

export function SharkFormPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();
  const [selectedFile, setSelectedFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  const navigate = useNavigate();
  const params = useParams();

  const onSubmit = handleSubmit(async (data) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("species", data.species);
    if (selectedFile) {
      formData.append("image", selectedFile);
    }

    if (params.id) {
      await updateShark(params.id, formData);
      toast.success("Shark updated!", {
        duration: 4000,
        position: "top-right",
      });
    } else {
      await createShark(formData);
      toast.success("Shark added!", {
        duration: 4000,
        position: "top-right",
      });
    }
    navigate("/sharks");
  });

  useEffect(() => {
    async function loadShark() {
      if (params.id) {
        const { data } = await getShark(params.id);
        setValue("name", data.name);
        setValue("description", data.description);
        setValue("species", data.species);
        setValue("image", data.image);
        setImagePreview(data.image);
      }
    }
    loadShark();
  }, [params.id, setValue]);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
    setImagePreview(URL.createObjectURL(file));
  };

  return (
    <div className="max-w-xl mx-auto">
      <form onSubmit={onSubmit} className="space-y-4">
        <div>
          <label className="font-bold uppercase">Name</label>
          <input
            type="text"
            placeholder="Name"
            {...register("name", { required: true })}
            className="bg-gray-600 p-3 rounded-lg w-full block mb-3"
          />
          {errors.name && <span>This field is required</span>}
        </div>
        <div>
          <label className="font-bold uppercase">Description</label>
          <textarea
            rows="8"
            placeholder="Description"
            {...register("description", { required: true })}
            className="bg-gray-600 p-3 rounded-lg w-full block mb-3"
          />
          {errors.description && <span>This field is required</span>}
        </div>
        <div>
          <label className="font-bold uppercase">Species</label>
          <input
            type="text"
            placeholder="Species"
            {...register("species", { required: true })}
            className="bg-gray-600 p-3 rounded-lg w-full block mb-3"
          />
          {errors.species && <span>This field is required</span>}
        </div>
        <div>
          <label className="font-bold uppercase">Image</label>
          <input
            type="file"
            onChange={handleFileChange}
            className="bg-gray-600 p-3 rounded-lg w-full block mb-3"
          />
          {imagePreview && (
            <img
              src={imagePreview}
              alt="Selected"
              {...register("image", { required: true })}
              className="mt-2"
            />
          )}
        </div>
        <button className="bg-green-600 p-3 rounded-lg block w-full mt-3">
          Add
        </button>
      </form>
      {params.id && (
        <button
          className="bg-red-700 p-3 rounded-lg block w-full mt-3"
          onClick={async () => {
            const deleteConfirmation = window.confirm(
              "Are you sure you want to delete the it?"
            );
            if (deleteConfirmation) {
              await deleteShark(params.id);
              toast.success("Shark deleted", {
                duration: 4000,
                position: "top-right",
              });
              navigate("/sharks");
            }
          }}
        >
          Delete
        </button>
      )}
    </div>
  );
}
