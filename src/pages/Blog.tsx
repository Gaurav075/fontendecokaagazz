
import Header from "../components/Header";
import Footer from "../components/Footer";
import ComingSoon from "../components/ComingSoon";

const Blog = () => {
  return (
    <div className="min-h-screen bg-kaagazz-background">
      <Header />
      <ComingSoon pageName="Blog" />
      <Footer />
    </div>
  );
};

export default Blog;