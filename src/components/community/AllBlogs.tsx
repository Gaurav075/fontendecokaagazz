import { BlogHero } from "./blogFolder/BlogHero";
import { blogs } from "../../data/blogs";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import BlogGrid from "./blogFolder/BlogGrid";

const AllBlogs = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <BlogHero />
      <div className="max-w-7xl mx-auto px-6 py-16">
        <a href="https://medium.com/"><BlogGrid blogs={blogs} /></a>
      </div>
      <Footer />
    </div>
  );
};

export default AllBlogs;
