import { BookOpen } from "lucide-react";

const OurStory = () => (
  <section className="text-center px-6 py-16 max-w-3xl mx-auto">
    <h2 className="text-2xl sm:text-3xl font-bold text-[#5C5044] tracking-wide uppercase mb-4">
      Our Story
    </h2>
    <div className="flex justify-center mb-6 text-5xl text-[#1F1F1F]">
      <BookOpen strokeWidth={1.5} size={60} />
    </div>

    <p className="text-sm text-gray-800 leading-relaxed mb-4">
      It all began in June 2022, under the blistering summer sun of New Delhi. We watched a
      ragpicker silently working—painstakingly separating plastic from domestic waste. The
      plastic found its way into recycling, but the organic waste was simply tossed aside,
      left to decay.
    </p>

    <p className="text-sm text-gray-800 leading-relaxed mb-4">
      Just a few feet away, stray animals scavenged through the discarded waste, often
      falling sick. The surrounding community bore the brunt too, with rising cases of
      disease and foul odors in the air. In that moment, we saw a clear gap—while plastic
      recycling is widely acknowledged, organic waste remains forgotten.
    </p>

    <p className="text-sm text-gray-800 leading-relaxed mb-4">
      Despite being called “Swachhagrahis” by India’s Prime Minister, ragpickers often lack
      the tools and opportunities to fully harness the waste they collect. No meaningful
      efforts existed to upcycle household organic or wet waste. Yet, this waste carries
      enormous untapped potential.
    </p>

    <p className="text-sm text-gray-800 leading-relaxed">
      That day sparked a vision—to transform what’s ignored into something impactful. By
      turning organic waste into high-quality recycled paper, we aim not only to promote
      sustainability but also to uplift the unsung heroes of our cities: the ragpickers.
    </p>
  </section>
);

export default OurStory;
