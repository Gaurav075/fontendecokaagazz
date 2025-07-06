
import { Navigation } from "@/components/Navigation";
import { BlogHero } from "@/components/blog/BlogHero";
import { BlogGrid } from "@/components/blog/BlogGrid";
import { BlogSidebar } from "@/components/blog/BlogSidebar";

const Blog = () => {
  return (
    <div className="min-h-screen bg-amber-50">
      <Navigation />
      <BlogHero />
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <BlogGrid />
          </div>
          <div className="lg:col-span-1">
            <BlogSidebar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
