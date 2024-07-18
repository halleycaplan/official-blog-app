import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import "./index.css";

import Navbar from "../../components/Navbar";
import Heading from "../../components/Heading";
import BlogList from "../../components/BlogList";
import Footer from "../../components/Footer";
import CategoriesScrollList from "../../components/CategoriesScrollList";
import Loader from "../../components/Loader";

import blogsService from "../../services/blogsService";
import categoriesService from "../../services/categoryService";

export default function BlogsPage() {
  const { categoryId } = useParams();

  const [displayCategoryId, setDisplayCategoryId] = useState(
    categoryId && parseInt(categoryId)
  );
  const [blogs, setBlogs] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const blogRes = await blogsService.getBlogsByCategoryId(
        displayCategoryId
      );
      const categoryRes = await categoriesService.getCategories();
      if (blogRes.data.length) {
        setBlogs(blogRes.data);
      }
      if (categoryRes.data.length) {
        setCategories(categoryRes.data);
      }
      setLoading(false);
    }
    fetchData();
  }, [displayCategoryId]);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <Navbar />
      <div className="container">
        <Heading />
        <div className="scroll-menu">
          <CategoriesScrollList
            categories={categories}
            categoryId={categoryId}
            setCategoryId={setDisplayCategoryId}
          />
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <p className="page-subtitle">Blog Posts</p>
        </div>
        <BlogList blogs={blogs} />
      </div>
      <Footer />
    </>
  );
}
