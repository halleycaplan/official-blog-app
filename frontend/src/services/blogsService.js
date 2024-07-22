const getBlogs = async () => {
  try {
    const res = await fetch("http://localhost:8000/api/blogs");
    if (!res.ok) {
      throw Error(res.statusText);
    }
    const data = await res.json();
    return data;
  } catch (err) {
    throw Error(err);
  }
};

const getBlogsByCategoryId = async (categoryId) => {
  let categoryIdReq = categoryId ? categoryId : null;
  try {
    const res = await fetch(
      "http://localhost:8000/api/blogs/category/" + categoryIdReq
    );
    if (!res.ok) {
      throw Error(res.statusText);
    }
    const data = await res.json();
    return data;
  } catch (err) {
    throw Error(err);
  }
};


const createBlog = async (blog) => {
  try {
    const res = await fetch("http://localhost:8000/api/blogs",  {
      method: "POST",
      body: JSON.stringify(blog),});
    if (!res.ok) {
      throw Error(res.statusText);
    }
    const data = await res.json();
    return data;
  } catch (err) {
    throw Error(err);
  }
};


const updateBlog = async (blog) => {
  try {
    const res = await fetch("http://localhost:8000/api/blogs",  {
      method: "PUT",
      body: JSON.stringify(blog),});
    if (!res.ok) {
      throw Error(res.statusText);
    }
    const data = await res.json();
    return data;
  } catch (err) {
    throw Error(err);
  }
};

const deleteBlog = async (id) => {
  try {
    const res = await fetch("http://localhost:8000/api/blogs",  {
      method: "DELETE",
      body: JSON.stringify(id),});
    if (!res.ok) {
      throw Error(res.statusText);
    }
    const data = await res.json();
    return data;
  } catch (err) {
    throw Error(err);
  }
};

const blogsService = {
  getBlogs,
  getBlogsByCategoryId,
  createBlog,
  updateBlog,
  deleteBlog,
};

export default blogsService;
