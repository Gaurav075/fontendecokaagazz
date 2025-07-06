
import { Card, CardContent } from "../../ui/card";
import { Button } from "../../ui/button";
import { Link } from "react-router-dom";
import { getLatestBlogs } from "../../../data/blogs";
// import OtherWebsitesSection from "./OtherWebsitesSection";

export const FeatureBlocks = () => {
  const latestBlogs = getLatestBlogs();

  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
             Kaagazz Blogs
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12 ">
          {latestBlogs.map((blog) => (
            <Card key={blog.id} className="group hover:shadow-lg transition-all duration-300 border-0 bg-white ">
              <CardContent className="p-0">
                <Link to={`/blog/${blog.id}`}>
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img 
                      src={blog.image} 
                      alt={blog.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <div className="mb-3">
                      <span className=" text-amber-800 text-xs font-semibold px-3 py-1 rounded-full">
                        {blog.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-amber-700 transition-colors">
                      {blog.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {blog.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <span>{blog.date}</span>
                      <span>{blog.readTime}</span>
                    </div>
                  </div>
                </Link>
              </CardContent>
            </Card>

))}
        </div>

{/* <OtherWebsitesSection/> */}
        <div className="text-center">
          <Link to="/allBlogs">
            <Button className="px-8 py-3 text-lg hover:bg-amber-800 text-white">
              View All
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
