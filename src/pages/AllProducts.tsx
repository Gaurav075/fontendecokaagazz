import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const categories = ["All", "Stationery", "Gift Sets", "Paper","Chitrayan"];

const AllProducts = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const initialCategory = queryParams.get("category") || "All";
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);

  // Sync state if URL changes (optional but robust)
  useEffect(() => {
    const cat = new URLSearchParams(location.search).get("category");
    if (cat && cat !== selectedCategory) {
      setSelectedCategory(cat);
    }
  }, [location.search]);

  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [products, setProducts] = useState([]);



  function capitalizeWords(str) {
  return str
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const url =
          selectedCategory === "All"
            ? `${import.meta.env.VITE_BACKEND_URL}/api/product/list`
            : `${import.meta.env.VITE_BACKEND_URL}/api/product/category/${selectedCategory}`;

        const res = await fetch(url);
        const data = await res.json();

        setProducts(data.products || []);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching products", err);
        setError("Failed to load products.");
        setLoading(false);
      }
    };

    fetchProducts();
  }, [selectedCategory]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="w-12 h-12 border-4 border-gray-300 border-t-black rounded-full animate-spin"></div>
      </div>
    );
  }

  if (error) {
    return <div className="text-center text-red-500 mt-10">{error}</div>;
  }

  return (
    <>
      <Header />

      <section className="bg-[#f6f4ef] px-6 py-10 font-serif text-[#1e1e1e]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-14 text-center">
            <h2 className="text-5xl font-bold tracking-tight">
              Ecokaagazz Collection
            </h2>
            <p className="mt-2 text-lg text-gray-600">
              Curated elegance. Sustainable luxury.
            </p>
          </div>

          {/* Mobile Filter Toggle Button */}
          <div className="lg:hidden mb-6 flex justify-end">
            <button
              onClick={() => setIsMobileFilterOpen(!isMobileFilterOpen)}
              className="flex items-center gap-2 px-4 py-2 text-sm border border-gray-300 rounded-full shadow-sm bg-white"
            >
              <IoFilter className="text-xl" />
              <span>Filter</span>
            </button>
          </div>

          {/* Layout Container */}
          <div className="flex gap-10 flex-col lg:flex-row">
            {/* Desktop Sidebar Filter */}
            <div className="hidden lg:block w-[250px] bg-white/70 backdrop-blur-sm p-6 rounded-2xl shadow-md border border-gray-200 sticky top-28 self-start">
              <h3 className="text-xl font-semibold mb-4 tracking-tight">
                Categories
              </h3>
              <ul className="space-y-3">
                {categories.map((cat) => (
                  <li
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`cursor-pointer text-sm px-3 py-1 rounded-full transition-all border 
                      ${
                        selectedCategory === cat
                          ? "bg-black text-white border-black"
                          : "bg-white text-gray-600 border-gray-300 hover:border-black"
                      }`}
                  >
                    {cat}
                  </li>
                ))}
              </ul>
            </div>

            {/* Mobile Filter Dropdown */}
            {isMobileFilterOpen && (
              <div className="lg:hidden bg-white p-4 rounded-xl shadow-md mb-6">
                <h3 className="text-lg font-semibold mb-3">Categories</h3>
                <ul className="space-y-3">
                  {categories.map((cat) => (
                    <li
                      key={cat}
                      onClick={() => {
                        setSelectedCategory(cat);
                        setIsMobileFilterOpen(false);
                      }}
                      className={`cursor-pointer text-sm px-3 py-1 rounded-full transition-all border 
                        ${
                          selectedCategory === cat
                            ? "bg-black text-white border-black"
                            : "bg-white text-gray-600 border-gray-300 hover:border-black"
                        }`}
                    >
                      {cat}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Product Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-10 w-full">
              {products.map((product) => (
                <Link
                  to={`/products/${product._id}`}
                  key={product._id}
                  className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all group"
                >
                  {/* Product Image */}
                  <div className="w-full aspect-[4/5] overflow-hidden">
                    <img
                      src={product.images?.[0]}
                      alt={product.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Product Content */}
                  <div className="p-4 space-y-2">
                    <h3 className="text-base font-semibold truncate">
                      {capitalizeWords(product.title)}
                    </h3>
                    <p className="text-xs text-gray-500 line-clamp-2">
                      {product.description}
                    </p>

                    <div className="text-yellow-500 text-xs">
                      {"★".repeat(Math.floor(product.rating || 4))}
                      <span className="text-gray-400 ml-1">
                        ({Math.floor(Math.random() * 2000) + 1000})
                      </span>
                    </div>

                    {/* Price or any other detail could go here */}
                    <div className="flex items-center gap-2 text-sm font-medium">

                      </span>
                    </div>

                    <button className="mt-2 px-3 py-1.5 bg-black text-white text-xs font-medium rounded-full hover:bg-gray-800 transition-all">
                      Shop Now
                    </button>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default AllProducts;
