import { useState } from "react";

const Signup = () => {
  const [form, setForm] = useState({
    fullname: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    otp: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [otpSent, setOtpSent] = useState(false);
  const [showOtpField, setShowOtpField] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!form.fullname.trim()) newErrors.fullname = "Full name is required.";
    if (!form.email.match(/^\S+@\S+\.\S+$/)) newErrors.email = "Invalid email.";
    if (!form.phone.match(/^[0-9]{10}$/)) newErrors.phone = "Phone must be 10 digits.";
    if (!form.password) newErrors.password = "Password is required.";
    if (form.password.length < 6) newErrors.password = "Minimum 6 characters.";
    if (form.password !== form.confirmPassword) newErrors.confirmPassword = "Passwords do not match.";
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      console.log("Form submitted", form);
    }
  };

  const handleSendOtp = () => {
    if (!form.phone.match(/^[0-9]{10}$/)) {
      setErrors({ ...errors, phone: "Enter a valid 10-digit phone number." });
      return;
    }

    setOtpSent(true);
    setShowOtpField(true);
    // Simulate OTP sent
    setTimeout(() => {
      alert("OTP sent to " + form.phone);
    }, 500);
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-b from-[#FBE9E7] to-[#FFF8E1] py-10">
      <div className="bg-white max-w-xl w-full p-8 rounded-2xl shadow-lg border border-[#E0CFC3]">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#5C4033] text-center mb-6">
          Create Account
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="text-sm font-medium text-[#3A3A3A]">Full Name</label>
            <input
              type="text"
              name="fullname"
              value={form.fullname}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-4 py-2 mt-1"
              placeholder="Enter your full name"
            />
            {errors.fullname && <p className="text-red-500 text-xs mt-1">{errors.fullname}</p>}
          </div>

          <div>
            <label className="text-sm font-medium text-[#3A3A3A]">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-4 py-2 mt-1"
              placeholder="example@domain.com"
            />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
          </div>

          <div>
            <label className="text-sm font-medium text-[#3A3A3A]">Phone Number</label>
            <div className="flex flex-nowrap gap-2 mt-1">
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md px-4 py-2 mt-1"
                placeholder="10-digit phone number"
              />
              {!otpSent && (
                <button
                  type="button"
                  onClick={handleSendOtp}
                  className="whitespace-nowrap bg-[#5D4037] text-white px-4 py-2 rounded-md hover:opacity-90 transition"
                >
                  Send OTP
                </button>
              )}
            </div>
            {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
          </div>

          {showOtpField && (
            <div>
              <label className="text-sm font-medium text-[#3A3A3A]">Enter OTP</label>
              <input
                type="text"
                name="otp"
                value={form.otp}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md px-4 py-2 mt-1"
                placeholder="Enter the OTP"
              />
            </div>
          )}

          <div>
            <label className="text-sm font-medium text-[#3A3A3A]">Password</label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-4 py-2 mt-1"
              placeholder="Choose a password"
            />
            {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
          </div>

          <div>
            <label className="text-sm font-medium text-[#3A3A3A]">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              value={form.confirmPassword}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-4 py-2 mt-1"
              placeholder="Repeat your password"
            />
            {errors.confirmPassword && <p className="text-red-500 text-xs mt-1">{errors.confirmPassword}</p>}
          </div>

          <button
            type="submit"
            className="w-full bg-[#5D4037] text-white py-3 rounded-full text-lg font-medium shadow-md hover:opacity-90 transition mt-4"
          >
            Sign Up
          </button>
        </form>
      </div>
    </section>
  );
};

export default Signup;
