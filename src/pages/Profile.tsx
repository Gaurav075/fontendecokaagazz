import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

interface User {
  name?: string;
  email?: string;
  phone?: string;
  profilePic?: string;
}

const Profile = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const fetchUser = async () => {
    try {
      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/auth/me`, {
        credentials: "include",
      });
      if (!res.ok) throw new Error("Not authenticated");
      const data = await res.json();
      setUser(data);
    } catch (err) {
      console.error(err);
      navigate("/login");
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    try {
      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/auth/logout`, {
        credentials: "include",
      });
      if (!res.ok) throw new Error("Logout failed");
      navigate("/login");
    } catch (err) {
      console.error(err);
      alert("Logout failed");
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  if (loading) return <div className="text-center mt-10">Loading profile...</div>;

  if (!user) return null;

  return (
    <>
      <Header />

      <main className="min-h-[calc(100vh-160px)] bg-[#fefaf4] flex justify-center items-center px-4">
        <div className="bg-white rounded-2xl shadow-md max-w-md w-full p-6 text-center space-y-4">
          <img
            src={user.profilePic || "/dummy-men.png"}
            alt="Profile"
            className="w-24 h-24 rounded-full mx-auto shadow"
          />
          <h2 className="text-xl font-semibold text-[#3d3121]">{user.name || "User"}</h2>
          <p className="text-gray-600">{user.email || user.phone}</p>

          <button
            onClick={handleLogout}
            className="mt-4 bg-[#3d3121] text-white px-4 py-2 rounded-full hover:bg-[#5a4835]"
          >
            Logout
          </button>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Profile;
