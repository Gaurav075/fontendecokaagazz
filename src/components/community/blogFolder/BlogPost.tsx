
import { useParams, Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { getBlogById } from "@/data/blogs";

const BlogPost = () => {
  const { id } = useParams();
  const post = id ? getBlogById(id) : undefined;

  if (!post) {
    return (
      <div className="min-h-screen bg-amber-50">
        <Navigation />
        <div className="max-w-4xl mx-auto px-6 py-16 text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Post Not Found</h1>
          <Link to="/blog">
            <Button variant="outline" className="border-amber-300 text-amber-700 hover:bg-amber-50">
              Back to Blog
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-amber-50">
      <Navigation />
      
      <article className="max-w-4xl mx-auto px-6 py-16">
        <Link to="/blog" className="inline-flex items-center text-amber-700 hover:text-amber-800 mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Blog
        </Link>
        
        <header className="mb-8">
          <div className="mb-4">
            <span className="bg-amber-100 text-amber-800 text-sm font-semibold px-3 py-1 rounded-full">
              {post.category}
            </span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {post.title}
          </h1>
          <div className="flex items-center text-gray-600 mb-6">
            <span>{post.author}</span>
            <span className="mx-2">•</span>
            <span>{post.date}</span>
            <span className="mx-2">•</span>
            <span>{post.readTime}</span>
          </div>
          <img 
            src={post.image} 
            alt={post.title}
            className="w-full h-64 lg:h-96 object-cover rounded-2xl shadow-lg"
          />
        </header>
        
        <div 
          className="prose prose-lg max-w-none text-gray-700 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </article>
    </div>
  );
};

export default BlogPost;
