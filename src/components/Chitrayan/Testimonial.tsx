const testimonials = [
  {
    name: "Priya Sharma",
    date: "2 months ago",
    rating: 5,
    comment:
      "I absolutely loved the Madhubani kit! The instructions were clear, and the materials were of excellent quality. My painting turned out beautiful!",
    likes: 12,
    comments: 2,
    avatar: "https://i.pravatar.cc/40?img=47",
  },
  {
    name: "Arjun Patel",
    date: "3 months ago",
    rating: 4,
    comment:
      "The Kalamkari kit was a great experience. It was challenging but rewarding. The finished piece is a stunning addition to my home decor.",
    likes: 8,
    comments: 1,
    avatar: "https://i.pravatar.cc/40?img=12",
  },
];

const Testimonial = () => {
  return (
    <section className="bg-white py-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto relative w-full rounded-xl overflow-hidden">
      <h2 className="font-semibold text-3xl sm:text-4xl md:text-4xl mb-10 text-center">
        Customer Testimonials
      </h2>
      <div className="space-y-8 sm:space-y-10">
        {testimonials.map((t, index) => (
          <div key={index} className="space-y-3">
            {/* Header */}
            <div className="flex items-center space-x-3">
              <img
                src={t.avatar}
                alt={t.name}
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <div className="text-sm font-semibold">{t.name}</div>
                <div className="text-xs text-gray-500">{t.date}</div>
              </div>
            </div>

            {/* Comment */}
            <p className="text-sm sm:text-base text-gray-800 leading-relaxed">
              {t.comment}
            </p>

            {/* Divider */}
            {index < testimonials.length - 1 && (
              <div className="border-b border-gray-200 pt-4" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
