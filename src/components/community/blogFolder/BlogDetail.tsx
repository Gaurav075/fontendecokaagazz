import { useParams, Link } from "react-router-dom";
import { blogs } from "../../../data/blogs";

const BlogDetail = () => {
  const { id } = useParams();
  const blog = blogs.find((b) => b.id.toString() === id);

  if (!blog) return <div>Blog not found</div>;

  return (
    <div className="max-w-3xl mx-auto px-6 py-16 bg-gray-50">
      {/* ✅ Back Link Inside JSX */}
      <Link
        to="/allblogs"
        className="inline-block text-amber-700 hover:text-amber-900 font-semibold mb-6 transition-colors duration-200"
      >
        ← Back to All Blogs
      </Link>

      <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
      <img src={blog.image} alt={blog.title} className="mb-6 rounded-lg h-[65vh] w-[45vw]" />
      <div
  className="prose max-w-none text-gray-800"
  dangerouslySetInnerHTML={{ __html: blog.content }}
/>

    </div>
  );
};

export default BlogDetail;
