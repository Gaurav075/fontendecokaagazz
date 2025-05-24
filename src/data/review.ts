export interface Review {
  id: string;
  author: string;
  role: string;
  company: string;
  quote: string;
  rating: number;
  image: string;
  featured?: boolean;
  dateAdded?: string;
  industry?: string;
}

export const reviews: Review[] = [
  {
    id: "review-001",
    author: "Sarah Chen",
    role: "Environmental Director",
    company: "GreenTech Solutions",
    quote: "EcoKaagazz has revolutionized how we think about sustainable packaging. Their paper from waste materials doesn't compromise on quality while making a real environmental impact.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b830?w=150&h=150&fit=crop&crop=face",
    featured: true,
    dateAdded: "2024-01-15",
    industry: "Technology"
  },
  {
    id: "review-002",
    author: "Michael Rodriguez",
    role: "Sustainability Manager",
    company: "EcoFirst Industries",
    quote: "The innovation behind turning waste into premium paper is remarkable. We've reduced our carbon footprint by 40% since switching to EcoKaagazz products.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    featured: true,
    dateAdded: "2024-01-20",
    industry: "Manufacturing"
  },
  {
    id: "review-003",
    author: "Dr. Priya Sharma",
    role: "Research Scientist",
    company: "Sustainable Materials Lab",
    quote: "From a scientific perspective, EcoKaagazz represents the future of material science. Their process is both innovative and environmentally responsible.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face",
    featured: true,
    dateAdded: "2024-02-01",
    industry: "Research"
  },
  {
    id: "review-004",
    author: "James Thompson",
    role: "CEO",
    company: "PrintGreen Co.",
    quote: "Quality meets sustainability perfectly. Our clients love knowing their printed materials come from waste that would otherwise harm the environment.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face",
    featured: false,
    dateAdded: "2024-02-10",
    industry: "Printing"
  },
  {
    id: "review-005",
    author: "Linda Park",
    role: "Operations Director",
    company: "EcoPackaging Ltd",
    quote: "EcoKaagazz didn't just provide us with sustainable paper - they gave us a story to tell our customers about making a real difference.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=face",
    featured: false,
    dateAdded: "2024-02-15",
    industry: "Packaging"
  },
  {
    id: "review-006",
    author: "David Kumar",
    role: "Procurement Head",
    company: "Sustainable Office Solutions",
    quote: "The transition to EcoKaagazz paper was seamless. Our team noticed the quality immediately, and knowing it's made from waste makes us proud of our choice.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    featured: false,
    dateAdded: "2024-02-20",
    industry: "Office Supplies"
  },
  {
    id: "review-007",
    author: "Emma Wilson",
    role: "Brand Manager",
    company: "Creative Arts Studio",
    quote: "As a creative agency, we're always looking for materials that align with our values. EcoKaagazz delivers exceptional print quality while supporting environmental sustainability.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
    featured: false,
    dateAdded: "2024-02-25",
    industry: "Creative Services"
  },
  {
    id: "review-008",
    author: "Robert Zhang",
    role: "Supply Chain Director",
    company: "Global Logistics Partners",
    quote: "EcoKaagazz has transformed our packaging operations. The durability and eco-friendly nature of their products have exceeded our expectations while reducing costs.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?w=150&h=150&fit=crop&crop=face",
    featured: false,
    dateAdded: "2024-03-01",
    industry: "Logistics"
  }
];