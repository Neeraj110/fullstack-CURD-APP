import React, { useState, useEffect } from "react";
import axios from "axios";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { toast } from "react-toastify";
import Loader from "../../components/Loader";
import { Link, useNavigate, useParams } from "react-router-dom";

function EditPost({ show, setShow }) {
  const [editingPost, setEditingPost] = useState(null);
  const [caption, setCaption] = useState("");
  const [image, setImage] = useState(null);
  const [load, setLoad] = useState(false);
  const { postId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const { data } = await axios.get(`/api/v1/posts/${postId}`);
        setEditingPost(data.data);
        setCaption(data.data.caption);
        setImage(data.data.image);
      } catch (error) {
        toast.error("Error fetching post data");
      }
    };

    fetchPost();
  }, [postId]);

  const handleEditorChange = (event, editor) => {
    const data = editor.getData();
    setCaption(data);
  };

  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
  };

  const handleEditSubmit = async (event) => {
    event.preventDefault();
    setLoad(true);

    try {
      const formData = new FormData();
      formData.append("caption", caption);
      if (image && image !== editingPost.image) {
        formData.append("image", image);
      }
      const response = await axios.patch(`/api/v1/posts/${postId}`, formData);
      toast.success("Post updated successfully");
      setEditingPost(null);
      setCaption("");
      setImage(null);
      setLoad(false);
      navigate(`/post/${postId}`)
    } catch (error) {
      toast.error(error.response?.data?.message || "Error updating post");
      setLoad(false);
    }
  };

  if (!editingPost) {
    return <Loader />;
  }

  return (
    <div className="flex justify-center p-3 mt-[5rem]">
      <div className="w-full md:w-4/5 lg:w-2/3 mb-12">
        <div className="bg-white shadow-md rounded p-6">
          <form onSubmit={handleEditSubmit}>
            <div className="mb-4">
              <label
                className="block text-2xl font-bold mb-2"
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
            {load && <Loader />}

            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
            >
              Edit Post
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EditPost;
