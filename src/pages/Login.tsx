import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [showReset, setShowReset] = useState(false);
  const [resetEmail, setResetEmail] = useState("");
  const [resetError, setResetError] = useState("");

  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!form.email.match(/^\S+@\S+\.\S+$/)) {
      newErrors.email = "Invalid email address.";
    }
    if (!form.password) {
      newErrors.password = "Password is required.";
    }
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      localStorage.setItem("user", JSON.stringify({ email: form.email }));
      alert("✅ Login successful!");
      navigate("/");
    }
  };

  const handleResetPassword = () => {
    if (!resetEmail.match(/^\S+@\S+\.\S+$/)) {
      setResetError("Enter a valid email address.");
      return;
    }

    // Simulate reset
    alert("🔁 Password reset link sent to " + resetEmail);
    setShowReset(false);
    setResetEmail("");
    setResetError("");
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-b from-[#FBE9E7] to-[#FFF8E1] py-10">
      <div className="bg-white max-w-md w-full p-8 rounded-2xl shadow-lg border border-[#E0CFC3]">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#5C4033] text-center mb-6">
          Welcome Back
        </h2>

        {!showReset ? (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="text-sm font-medium text-[#3A3A3A]">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md px-4 py-2 mt-1"
                placeholder="you@example.com"
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">{errors.email}</p>
              )}
            </div>

            <div>
              <label className="text-sm font-medium text-[#3A3A3A]">Password</label>
              <input
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md px-4 py-2 mt-1"
                placeholder="Your password"
              />
              {errors.password && (
                <p className="text-red-500 text-xs mt-1">{errors.password}</p>
              )}
              <p
                onClick={() => setShowReset(true)}
                className="text-right text-sm text-blue-600 hover:underline mt-2 cursor-pointer"
              >
                Forgot Password?
              </p>
            </div>

            <button
              type="submit"
              className="w-full bg-[#5D4037] text-white py-3 rounded-full text-lg font-medium shadow-md hover:opacity-90 transition mt-4"
            >
              Log In
            </button>
          </form>
        ) : (
          <div className="space-y-5">
            <div>
              <label className="text-sm font-medium text-[#3A3A3A]">
                Enter your email to reset password
              </label>
              <input
                type="email"
                value={resetEmail}
                onChange={(e) => {
                  setResetEmail(e.target.value);
                  setResetError("");
                }}
                className="w-full border border-gray-300 rounded-md px-4 py-2 mt-1"
                placeholder="you@example.com"
              />
              {resetError && (
                <p className="text-red-500 text-xs mt-1">{resetError}</p>
              )}
            </div>
            <div className="flex gap-3">
              <button
                onClick={handleResetPassword}
                className="w-full bg-[#5D4037] text-white py-3 rounded-full text-base font-medium shadow-md hover:opacity-90 transition"
              >
                Send Reset Link
              </button>
              <button
                onClick={() => setShowReset(false)}
                className="w-full bg-gray-200 text-[#3C2F2F] py-3 rounded-full text-base font-medium shadow-md hover:bg-gray-300 transition"
              >
                Cancel
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Login;
