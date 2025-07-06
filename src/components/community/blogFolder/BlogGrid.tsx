import { BlogCard } from "./BlogCard";
import { getAllBlogs } from "../../../data/blogs";

export const BlogGrid = ({blogs}) => {
  const blogPosts = getAllBlogs();

  return (
    <div className="space-y-8 bg-gray-50" >
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">Latest Articles</h2>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8">
        {blogPosts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default BlogGrid;