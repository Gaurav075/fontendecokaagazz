import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/authContext";
import { useContext } from "react";

const Signup = () => {
  const [form, setForm] = useState({
    fullname: "",
    inputValue: "",
    email: undefined,
    phone:undefined,
    otp: "",
});

  const { setUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [otpSent, setOtpSent] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [resendStatus, setResendStatus] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  const { name, value } = e.target;

  if (name === "inputValue") {
    const isPhone = /^[0-9]{10}$/.test(value);
    setForm({
      ...form,
      inputValue: value,
      email: isPhone ? undefined : value,
      phone: isPhone ? value : undefined,
    });
  } else {
    setForm({ ...form, [name]: value });
  }
};


const handleSendOtp = async () => {
  const input = form.inputValue?.trim() || "";
  const fullname = form.fullname?.trim() || "";
  const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input);

  const newErrors: Record<string, string> = {};
  if (!fullname) newErrors.fullname = "Full name is required.";
  if (!input || !isEmail) {
    newErrors.inputValue = "Enter a valid email address.";
  }

  setErrors(newErrors);
  if (Object.keys(newErrors).length > 0) return;

  try {
    const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/auth/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        fullname,
        email: input,
      }),
    });

    const data = await res.json();
    if (!res.ok) throw new Error(data.message || "Failed to send OTP");

    // Update form state with email only
    setForm((prev) => ({
      ...prev,
      email: input,
    }));

    setOtpSent(true);
    setErrors({});
    alert("OTP sent successfully ✔");
  } catch (err: any) {
    setErrors({ inputValue: err.message });
  }
};



const handleResendOtp = async () => {
  try {
    setResendStatus("Sending OTP...");

    const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/auth/resend-otp`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: form.email || undefined,
        phone: form.phone || undefined,
      }),
    });

    const data = await response.json();

    if (response.ok && data.success) {
      setResendStatus("OTP sent successfully.");
    } else {
      setResendStatus(data.message || "Failed to send OTP. Try again.");
    }
  } catch (error) {
    console.error("Resend OTP error:", error);
    setResendStatus("Error sending OTP.");
  }

  setTimeout(() => setResendStatus(""), 5000);
};

const handleSignup = async (e: React.FormEvent) => {
  e.preventDefault();
  const newErrors: Record<string, string> = {};

  const { fullname, email, phone, otp } = form;
  const trimmedEmail = email?.trim() || "";
  const trimmedPhone = phone?.trim() || "";

  const isEmail = /^\S+@\S+\.\S+$/.test(trimmedEmail);
  const isPhone = /^[0-9]{10}$/.test(trimmedPhone);

  if (!fullname.trim()) newErrors.fullname = "Full name is required.";

  if (!isEmail && !isPhone) {
    newErrors.inputValue = "Enter a valid email or phone number.";
  }

  if (!otp || otp.length !== 6) {
    newErrors.otp = "Enter a valid 6-digit OTP.";
  }

  setErrors(newErrors);

  if (Object.keys(newErrors).length === 0) {
    const payload = {
      fullname: fullname.trim(),
      email: isEmail ? trimmedEmail : null,
      phone: isPhone ? trimmedPhone : null,
      otp: otp || null,
    };

    try {
      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/auth/verify-otp`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Signup failed");

      alert("Signup successful 🎉");
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));
    setUser(data.user); // ✅ updates header reactively
    navigate("/");
    } catch (err: any) {
      alert(err.message || "Signup error");
    }
  }
};
  return (
    <section className="min-h-screen flex flex-col">
      {/* Header */}
      <div className="bg-[url('/bg1.png')] bg-cover bg-center w-full py-4 px-6">
        <img src="/logo.png" alt="Kaagazz Logo" className="h-10" />
      </div>

      {/* Title */}
      <div className="px-6 pt-6 md:px-16">
        <h1 className="text-3xl font-bold mb-1">SIGN UP</h1>
        <p className="text-sm text-gray-600 mb-8">Join us in our sustainable journey.</p>
      </div>

      {/* Form Section */}
      <div className="flex flex-col md:flex-row justify-center items-center px-6 md:px-16 mb-12">
        <div className="bg-white w-full md:max-w-4xl flex flex-col md:flex-row rounded-xl shadow-lg overflow-hidden border border-gray-200">
          {/* Left Image */}
          <div className="w-full md:w-1/2 h-[250px] md:h-[450px]">
            <img
              src="/login.jpg"
              alt="Visual"
              className="w-full h-full object-cover object-center"
            />
          </div>

          {/* Right Form */}
          <div className="w-full md:w-1/2 p-8 flex items-center justify-center">
            <form onSubmit={handleSignup} className="space-y-4 w-full">
              <div>
                <label className="text-sm font-medium">Full Name:</label>
                <input
                  type="text"
                  name="fullname"
                  value={form.fullname}
                  onChange={handleChange}
                  className="w-full border-b border-gray-400 py-2 focus:outline-none"
                  placeholder="Enter Full Name"
                />
                {errors.fullname && <p className="text-red-500 text-xs">{errors.fullname}</p>}
              </div>

              <div>
                  <label className="text-sm font-medium">Email:</label>
                  <div className="flex gap-2">
                    <input
                      type="email" // ✅ Only accepts email input
                      name="inputValue"
                      value={form.inputValue}
                      onChange={handleChange}
                      className="flex-grow border-b border-gray-400 py-2 focus:outline-none"
                      placeholder="Enter your email"
                    />
                    <button
                      type="button"
                      onClick={handleSendOtp}
                      disabled={otpSent}
                      className={`text-sm px-4 py-2 rounded ${
                        otpSent
                          ? "bg-gray-400 text-white cursor-not-allowed"
                          : "bg-black text-white hover:opacity-90"
                      }`}
                    >
                      {otpSent ? "OTP Sent" : "Send OTP"}
                    </button>
                  </div>
                  {errors.inputValue && (
                    <p className="text-red-500 text-xs">{errors.inputValue}</p>
                  )}
                </div>


                {otpSent && (
                <div>
                  <label className="text-sm font-medium">OTP:</label>
                  <input
                    type="text"
                    name="otp"
                    value={form.otp}
                    onChange={handleChange}
                    className="w-full border-b border-gray-400 py-2 focus:outline-none"
                    placeholder="Enter OTP"
                  />
                  {errors.otp && <p className="text-red-500 text-xs">{errors.otp}</p>}

                  {/* Resend OTP link */}
                  <p
                    className="text-xs text-blue-500 mt-2 cursor-pointer hover:underline w-fit"
                    onClick={handleResendOtp}
                  >
                    Resend OTP
                  </p>

                  {resendStatus && (
                    <p className="text-xs mt-1 text-green-500">{resendStatus}</p>
                  )}
                </div>
              )}
              <button
                type="submit"
                className="w-full bg-black text-white py-2 rounded-md mt-4 hover:opacity-90 transition"
              >
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[url('/bg1.png')] bg-cover bg-center mt-auto border-t border-black text-center">
        <div className="flex flex-col items-center justify-center px-4 py-8">
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
          </div>

          <p className="text-2xs text-gray-700 mb-6">
            © {new Date().getFullYear()} KAAGAZZ. All Rights Reserved.
          </p>

          <div className="text-3xs font-bold text-black leading-snug tracking-wide">
            PEELTO KAAGAZZ <br />
            ORGANIC PAPER
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Signup;
