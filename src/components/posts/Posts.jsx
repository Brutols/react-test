import React, { useEffect, useState } from "react";
import AxiosClient from "../../client/client";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [formData, setFormData] = useState({
    category: "",
    title: "",
    author: {
      name: "",
    },
    content: "",
  });
  const client = new AxiosClient();
  console.log(formData);

  const getPosts = async () => {
    const posts = await client.get("/blogPosts?pageSize=5");
    setPosts(posts);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const newFormData = {
      ...formData,
      [name]: value,
    };
    setFormData(newFormData);
  };

  const handleNameChange = (e) => {
    setFormData({
      ...formData,
      author: { name: e.target.value },
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await client.post("/blogPosts", formData);
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="category"
          placeholder="category"
          value={formData.category}
          onChange={handleChange}
        />
        <input
          type="text"
          name="title"
          placeholder="title"
          value={formData.title}
          onChange={handleChange}
        />
        <input
          type="text"
          name="name"
          placeholder="name"
          value={formData.author.name}
          onChange={handleNameChange}
        />
        <input
          type="text"
          name="content"
          placeholder="content"
          value={formData.content}
          onChange={handleChange}
        />
        <button type="submit">submit</button>
      </form>
      <ul>
        {posts.map((post, i) => {
          return <li key={i}>{post.content}</li>;
        })}
      </ul>
    </>
  );
};

export default Posts;
