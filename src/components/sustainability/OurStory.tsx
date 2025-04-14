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
      In June 2022, under New Delhi’s scorching sun, we observed a ragpicker tirelessly
      collecting domestic waste. He carefully separated plastic for recycling but discarded
      organic waste by the roadside. Nearby, suffering scavenged through the waste, often
      falling ill. Communities also suffered from diseases linked to improper disposal.
    </p>
    <p className="text-sm text-gray-800 leading-relaxed mb-4">
      This scene revealed a glaring gap: while plastic recycling is prioritized, organic
      waste remains largely ignored. No major efforts exist to upcycle household organic and
      wet waste. Yet, waste holds immense potential unexploited. Ragpickers, hailed as
      “Swachhagrahis” by India’s Prime Minister, lack resources to fully utilize the waste
      they collect.
    </p>
    <p className="text-sm text-gray-800 leading-relaxed">
      This challenge is global, but solutions can start locally. We aspire to address this by
      creating high-quality recycled paper products from organic waste, promoting
      sustainability and economically empowering ragpickers.
    </p>
  </section>
);

export default OurStory;
