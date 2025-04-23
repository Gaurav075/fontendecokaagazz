import React, { useState } from 'react'

const OrderForm = () => {
      const [formData, setFormData] = useState({
        name: '',
        address: '',
        email: '',
        products: [],
        phone: '',
      });

const handleSubmit = () => {
  console.log(formData);
}

const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
      ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
      };
  return (
    <section className="py-16 px-6">
    <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl p-10 border border-neutral-200">
      <h2 className="text-3xl font-serif font-semibold text-neutral-900 text-center mb-8 tracking-tight">
        Order Checkout
      </h2>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="flex flex-col">
          <label className="text-sm font-medium text-neutral-700 mb-1">Full Name</label>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="border border-neutral-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black bg-[#fcfcfc]"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-sm font-medium text-neutral-700 mb-1">Full address</label>
          <input
            type="text"
            name="company"
            required
            value={formData.address}
            onChange={handleChange}
            className="border border-neutral-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black bg-[#fcfcfc]"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-sm font-medium text-neutral-700 mb-1">Email</label>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="border border-neutral-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black bg-[#fcfcfc]"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-sm font-medium text-neutral-700 mb-1">Phone Number</label>
          <input
            type="tel"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            className="border border-neutral-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black bg-[#fcfcfc]"
          />
        </div>
        <div className="md:col-span-2 text-center">
          <button
            type="submit"
            // disabled={isSubmitting}
            className="bg-black text-white font-semibold px-8 py-3 rounded-full shadow-md hover:bg-neutral-800 transition-all duration-300"
          >
            {/* {isSubmitting ? 'Submitting...' : 'Submit Request'} */}
            Order
          </button>
        <p className="mt-4 text-sm text-neutral-600"></p>
        </div>
      </form>
    </div>
  </section>
  )
}

export default OrderForm
