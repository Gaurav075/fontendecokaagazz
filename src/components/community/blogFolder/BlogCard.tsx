import { Clock, ArrowRight } from "lucide-react";
import { Button } from "../../ui/button";
import { Link } from "react-router-dom";
import { BlogPost } from "../../../data/blogs";
import BlogDetail from "./BlogDetail";

interface BlogCardProps {
  post: BlogPost;
}

export const BlogCard = ({ post }: BlogCardProps) => {
  return (
    <Link to={`/blog/${post.id}`}>
      <article className="group cursor-pointer border border-black-200 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 bg-white">
        <div className="md:flex">
          <div className="md:w-1/3">
            <img 
              src={post.image} 
              alt={post.title}
              className="w-full h-64 md:h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="md:w-2/3 p-8">
            <div className="flex items-center space-x-4 mb-4">
              <span className="text-amber-800 text-xs font-semibold px-3 py-1 rounded-full">
                {post.category}
              </span>
              <div className="flex items-center text-gray-500 text-sm">
                <Clock className="w-4 h-4 mr-1" />
                {post.readTime}
              </div>
            </div>
            
            <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-amber-700 transition-colors">
              {post.title}
            </h3>
            
            <p className="text-gray-600 mb-4 leading-relaxed">
              {post.excerpt}
            </p>
            
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-500">{post.date}</span>
              <Button variant="ghost" size="sm" className="text-amber-700 hover:text-amber-800">
                Read More <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
};