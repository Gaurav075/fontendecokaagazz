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
    author: "Suman",
    role: "",
    company: "Kaagazz",
    quote: "Kaagazz enabled me to gain independence and cover hospital expenses",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    dateAdded: "2025-06-02",
  },
  {
    id: "review-002",
    author: "Arti",
    role: "",
    company: "Kaagazz",
    quote: "Thanks to Kaagazz, I could afford my children's education and secure their future",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/2.jpg",
    dateAdded: "2025-06-02",
  },
  {
    id: "review-003",
    author: "Nagma",
    role: "",
    company: "Kaagazz",
    quote: "Kaagazz enabled me to rebuild my life after losing my husband and father-in-law",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/3.jpg",
    dateAdded: "2025-06-02",
  },
  {
    id: "review-004",
    author: "Chulbuli",
    role: "",
    company: "Kaagazz",
    quote: "Kaagazz empowered me to save for emergencies and secure my family’s well-being",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/4.jpg",
    dateAdded: "2025-06-02",
  },
  {
    id: "review-005",
    author: "Babli",
    role: "",
    company: "Kaagazz",
    quote: "With Kaagazz, I can now buy basic necessities for my family of eight members",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/5.jpg",
    dateAdded: "2025-06-02",
  },
  {
    id: "review-006",
    author: "Uma",
    role: "",
    company: "Kaagazz",
    quote: "With Kaagazz's help, I was able to start a new chapter in life after my divorce",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/6.jpg",
    dateAdded: "2025-06-02",
  }
];
