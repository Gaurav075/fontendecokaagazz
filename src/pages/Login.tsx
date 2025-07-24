import { useState } from "react";
import{useNavigate} from "react-router-dom";
import { AuthContext } from "../context/authContext";
import { useContext } from "react";

const Login = () => {
  const [form, setForm] = useState({
    identifier: "",
    otp:"" // email or phone
  });
const { setUser } = useContext(AuthContext);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [codeSent, setCodeSent] = useState(false);
const navigate = useNavigate();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

 const handleSendCode = async () => {
  const value = form.identifier.trim();
  const isEmail = /^\S+@\S+\.\S+$/.test(value);
  const isPhone = /^[0-9]{10}$/.test(value);

  if (!isEmail && !isPhone) {
    setErrors({ identifier: "Enter a valid email or 10-digit phone number." });
    return;
  }

  try {
    const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      // credentials: "include",
      body: JSON.stringify({
        email: isEmail ? value : undefined,
        phone: isPhone ? value : undefined,
      }),
    });

    const data = await res.json();
    if (!res.ok) throw new Error(data.message || "Failed to send code");

    setCodeSent(true);
    setErrors({});
    alert("Code sent successfully ✔");
  } catch (err: any) {
    setErrors({ identifier: err.message || "Send code failed" });
  }
};
const handleVerifyCode = async () => {
  const value = form.identifier.trim();
  const { otp } = form;
  const isEmail = /^\S+@\S+\.\S+$/.test(value);
  const isPhone = /^[0-9]{10}$/.test(value);

  const newErrors: Record<string, string> = {};

  if (!otp || otp.length !== 6) {
    newErrors.otp = "Enter a valid 6-digit code.";
  }

  if (!isEmail && !isPhone) {
    newErrors.identifier = "Invalid identifier.";
  }

  setErrors(newErrors);
  if (Object.keys(newErrors).length > 0) return;

  try {
    const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/auth/verify-otp`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      // credentials: "include",
      body: JSON.stringify({
        email: isEmail ? value : undefined,
        phone: isPhone ? value : undefined,
        otp,
      }),
    });

    const data = await res.json();
    if (!res.ok) throw new Error(data.message || "Verification failed");

    alert("Login successful 🎉");
    localStorage.setItem("token", data.token);
    setUser(data.user); // ✅ updates header reactively
    navigate("/");
    // Optionally: save token, redirect, etc.
  } catch (err: any) {
    setErrors({ otp: err.message || "Login failed" });
  }
};
const handleResendOtp = async () => {
  if (!form.identifier.trim()) {
    setErrors((prev) => ({
      ...prev,
      identifier: "Please enter your email or phone first.",
    }));
    return;
  }

  const isEmail = /^\S+@\S+\.\S+$/.test(form.identifier);
  const isPhone = /^[0-9]{10}$/.test(form.identifier);

  if (!isEmail && !isPhone) {
    setErrors((prev) => ({
      ...prev,
      identifier: "Enter a valid email or 10-digit phone number.",
    }));
    return;
  }

  try {
    const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/auth/resend-otp`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: isEmail ? form.identifier : undefined,
        phone: isPhone ? form.identifier : undefined,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Failed to resend OTP.");
    }

    alert("OTP resent successfully ✔");
  } catch (error: any) {
    alert(error.message || "Something went wrong while resending OTP.");
  }
};


  return (
    <section className="min-h-screen flex flex-col">
      {/* Top Logo and Texture Background */}
      <div className="bg-[url('/bg1.png')] bg-cover bg-center w-full py-4 px-6">
        <img src="/logo.png" alt="Kaagazz Logo" className="h-10" />
      </div>

      {/* Login Headings */}
      <div className="px-6 pt-6 md:px-16">
        <h1 className="text-3xl font-bold mb-1">SIGN IN</h1>
        <p className="text-sm text-gray-600 mb-8">
          To explore the world of sustainable possibilities!
        </p>
      </div>

      {/* Login Card Section */}
     <div className="flex flex-col md:flex-row justify-center items-center px-6 md:px-16 my-12">
  <div className="bg-white w-full md:max-w-4xl flex rounded-xl shadow-lg overflow-hidden border border-gray-200">
    
    {/* Left image */}
    <div className="w-full md:w-1/2 h-[300px] md:h-[500px]">
      <img
        src="/login.jpg"
        alt="Visual"
        className="w-full h-full object-cover object-center"
      />
    </div>

    {/* Right form */}
    <div className="w-full md:w-1/2 p-8 flex items-center justify-center relative">
  <form
    onSubmit={(e) => e.preventDefault()}
    className="space-y-5 w-full max-w-sm"
  >
    {/* Identifier input */}
    <div>
      <label className="text-sm font-medium">Email or Phone:</label>
      <input
        type="text"
        name="identifier"
        value={form.identifier}
        onChange={handleChange}
        className="w-full border-b border-gray-400 py-2 focus:outline-none"
        placeholder="Enter email or 10-digit phone"
      />
      {errors.identifier && (
        <p className="text-red-500 text-xs">{errors.identifier}</p>
      )}
    </div>

    {/* Show "Login with Code" only if OTP not sent */}
    {!codeSent && (
      <div>
        <button
          type="button"
          onClick={handleSendCode}
          className="w-full bg-black text-white py-2 rounded-md transition hover:opacity-90"
        >
          Login with Code
        </button>
      </div>
    )}

    {/* OTP input and verify */}
    {codeSent && (
      <div className="space-y-4">
        <div>
          <label className="text-sm font-medium">Enter OTP:</label>
          <input
            type="text"
            name="otp"
            value={form.otp}
            onChange={handleChange}
            className="w-full border-b border-gray-400 py-2 focus:outline-none"
            placeholder="6-digit code"
          />
          {errors.otp && (
            <p className="text-red-500 text-xs">{errors.otp}</p>
          )}
        </div>

        {/* Verify button styled like login button */}
        <button
          type="button"
          onClick={handleVerifyCode}
          className="w-full bg-black text-white py-2 rounded-md transition hover:opacity-90"
        >
          Verify & Login
        </button>

        {/* Resend OTP */}
        <p
          className="text-xs text-blue-500 mt-1 cursor-pointer hover:underline w-fit"
          onClick={handleResendOtp}
        >
          Resend OTP
        </p>
      </div>
    )}

    {/* Signup link */}
    <p className="text-sm text-center mt-4">
      Didn’t have an account?{" "}
      <a href="/signup" className="text-black font-semibold underline">
        Sign up
      </a>
    </p>
  </form>
</div>
  </div>
</div>


      {/* Footer */}
      <footer className="bg-[url('/bg1.png')] bg-cover bg-center mt-auto border-t border-black text-center">
        <div className="flex flex-col items-center justify-center px-4 py-8">
          {/* Social Icons */}
          <div className="flex gap-6 text-black mb-4">
            <a href="#" aria-label="Instagram" className="hover:opacity-70">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm8.5 1.5h-8.5A4.25 4.25 0 003.5 7.75v8.5A4.25 4.25 0 007.75 20.5h8.5A4.25 4.25 0 0020.5 16.25v-8.5A4.25 4.25 0 0016.25 3.5zM12 7a5 5 0 110 10 5 5 0 010-10zm0 1.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7zm4.75-.88a1.13 1.13 0 110 2.25 1.13 1.13 0 010-2.25z" />
              </svg>
            </a>
            <a href="#" aria-label="LinkedIn" className="hover:opacity-70">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M4.98 3.5C4.98 5 3.9 6 2.5 6S0 5 0 3.5 1.08 1 2.5 1s2.48 1 2.48 2.5zM.5 24h4V7h-4v17zM8.5 7h3.7v2.4h.05c.52-.92 1.8-1.9 3.7-1.9 3.9 0 4.6 2.5 4.6 5.8v10.7h-4V15.2c0-2.3-.04-5.2-3.17-5.2-3.2 0-3.7 2.5-3.7 5v9h-4V7z" />
              </svg>
            </a>
            {/* Add more icons as needed */}
          </div>

          {/* Copyright */}
          <p className="text-2xs text-gray-700 mb-6">
            © {new Date().getFullYear()} KAAGAZZ. All Rights Reserved.
          </p>

          {/* Tagline */}
          <div className="text-3xs font-bold text-black leading-snug tracking-wide">
            PEELTO KAAGAZZ <br />
            ORGANIC PAPER
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Login;
