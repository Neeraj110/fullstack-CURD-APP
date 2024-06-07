import React, { useEffect, useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { useCreatePostMutation } from "../../slices/postsApiSlices";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import Loader from "../../components/Loader";

const AddPost = () => {
  const [caption, setCaption] = useState("");
  const [image, setImage] = useState(null);
  const [show, setShow] = useState([]);

  const navigate = useNavigate();

  const handleEditorChange = (event, editor) => {
    setCaption(editor.getData());
  };

  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
  };

  const [createPost, { isLoading }] = useCreatePostMutation();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const formData = new FormData();
      formData.append("caption", caption);
      if (image) formData.append("image", image);
      const res = await createPost(formData).unwrap();
      console.log();
      // dispatch(addPost(res));
      toast.success("Post created successfully");
      setShow([res, ...show]); // Add the new post to the show state
      setCaption("");
      setImage(null);
      navigate(`/post/${res.data._id}`);
    } catch (error) {
      toast.error(error?.data?.message || error.error);
    }
  };

  return (
    <div className=" flex items-center justify-center  p-4 mt-[4rem]">
      <div className="w-full md:w-4/5 lg:w-2/3 mb-12">
        <div className="bg-white shadow-md rounded p-6">
          <form onSubmit={handleSubmit}>
            <div className="mb-4 ">
              <label
                className="block text-2xl font-bold mb-2 "
                htmlFor="formContent"
              >
                Content
              </label>
              <CKEditor
                editor={ClassicEditor}
                data={caption}
                onChange={handleEditorChange}
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-2xl font-bold mb-2"
                htmlFor="formImage"
              >
                Image
              </label>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="w-full px-3 py-2 border rounded-md"
              />
            </div>
            {isLoading && <Loader />}
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
            >
              Post
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddPost;
