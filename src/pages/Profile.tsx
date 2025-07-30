import { useEffect, useState,useContext } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { AuthContext } from "../context/authContext";

interface User {
  fullname?: string;
  email?: string;
  phone?: string;
  profilePic?: string;
}

const Profile = () => {
  const { user, setUser, loading } = useContext(AuthContext);
  const [form, setForm] = useState<User>({});
  const navigate = useNavigate();



  const handleLogout = async () => {
    try {
      const latestToken = localStorage.getItem("token"); 
      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/auth/logout`, {
        method: "POST",
        headers: {
        Authorization: `Bearer ${latestToken}`,
      },
        credentials: "include",
      });
      if (!res.ok) throw new Error("Logout failed");
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      setUser(null);
      navigate("/");
    } catch (err) {
      console.error(err);
      alert("Logout failed");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleUpdateProfile = async () => {
    try {
      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/auth/update-profile`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        credentials: "include",
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Failed to update");

      const updatedUser = await res.json();
      alert("Profile updated ✅");
      setUser(updatedUser.user);
      localStorage.setItem("user", JSON.stringify(updatedUser.user));
    } catch (err) {
      console.error(err);
      alert("Update failed");
    }
  };

//   useEffect(() => {
//   if (!loading && user) {
//     setForm(user);
//   }
//   if (!loading && !user) {
//     navigate("/login");
//   }
// }, [user, loading]);
useEffect(() => {
  if (!loading && user) {
    setForm(user); // get user from context, no need to hit /me again
  }

  if (!loading && !user) {
    console.warn("User not authenticated");
    navigate("/login");
  }
}, [user, loading]);



  if (loading) return <div className="text-center mt-10">Loading profile...</div>;
  if (!user) return null;

  return (
    <>
      <Header />

      <main className="min-h-[calc(100vh-160px)] bg-[#fefaf4] flex justify-center items-center px-4">
        <div className="bg-white rounded-2xl shadow-md max-w-md w-full p-6 space-y-4">
          <div className="text-center">
            <img
              src={user.profilePic || "/dummy-men.png"}
              alt="Profile"
              className="w-24 h-24 rounded-full mx-auto shadow"
            />
          </div>

          {/* Editable Form */}
          <div className="space-y-4">
            <input
              type="text"
              name="fullname"
              placeholder="Full Name"
              value={form.fullname || ""}
              onChange={handleChange}
              className="w-full border px-4 py-2 rounded"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email || ""}
              disabled
              className="w-full border px-4 py-2 rounded"
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone"
              value={form.phone || ""}
              onChange={handleChange}
              className="w-full border px-4 py-2 rounded"
            />

            <button
              onClick={handleUpdateProfile}
              className="w-full bg-[#3d3121] text-white py-2 rounded hover:bg-[#5a4835]"
            >
              Save Changes
            </button>

            <button
              onClick={handleLogout}
              className="w-full mt-2 bg-red-500 text-white py-2 rounded hover:bg-red-600"
            >
              Logout
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Profile;
