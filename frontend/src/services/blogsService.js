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

const blogsService = {
  getBlogs,
  getBlogsByCategoryId,
};

export default blogsService;
