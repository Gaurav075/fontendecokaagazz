export type Product = {
  id: string;
  title: string;
  description: string;
  price: number;
  discountedPrice: number;
  stockLeft: number;
  isBulkAvailable: boolean;
  bulkMinQty?: number;
  rating: number;
  rank: number;
  image: string;
  images: string[];
  category: string;
  certifiedSustainable: boolean;
};

export const products: Product[] = [
  {
    id: "prod-001",
    title: "A5 Stapled Notepad",
    description: "Sleek, compact, and crafted for everyday efficiency. Made from upcycled agricultural waste, ideal for professionals and creatives who care about conscious choices.",
    price: 200,
    discountedPrice: 150,
    stockLeft: 60,
    isBulkAvailable: true,
    bulkMinQty: 20,
    rating: 4.6,
    rank: 2,
    image: "/stapled.jpg",
    images: ["/stapled.jpg","/stapled1.jpg"],
    category: "Stationery",
    certifiedSustainable: true,
  },
  {
    id: "prod-002",
    title: "A5 Spiral Notepad",
    description: "Vertical and horizontal spiral notepads made with sturdy binding and premium eco-paper. Ideal for free-form writing, sketching, and planning.",
    price: 250,
    discountedPrice: 180,
    stockLeft: 45,
    isBulkAvailable: true,
    bulkMinQty: 15,
    rating: 4.7,
    rank: 3,
    image: "/A5_Spiral.jpg",
    images: ["/A5_Spiral.jpg","/spiral_notepad_vertical.jpg", "/spiral_notepad_horizontal.jpg"],
    category: "Stationery",
    certifiedSustainable: true,
  },
  {
    id: "prod-003",
    title: "A4 Size Sheets (70 GSM)",
    description: "Clean, smooth sheets ideal for printing, sketching, and corporate use. Made from responsibly sourced agri-fiber.",
    price: 400,
    discountedPrice: 320,
    stockLeft: 100,
    isBulkAvailable: true,
    bulkMinQty: 25,
    rating: 4.5,
    rank: 4,
    image: "/A4_sheets.jpg",
    images: ["/A4_sheets.jpg"],
    category: "Paper",
    certifiedSustainable: true,
  },
  {
    id: "prod-004",
    title: "Seed Pencils",
    description: "Made from recycled paper and embedded with seeds that grow into herbs, flowers, or vegetables.",
    price: 50,
    discountedPrice: 35,
    stockLeft: 150,
    isBulkAvailable: true,
    bulkMinQty: 30,
    rating: 4.9,
    rank: 5,
    image: "/seed_pencils.jpg",
    images: ["/seed_pencils.jpg"],
    category: "Stationery",
    certifiedSustainable: true,
  },
  {
    id: "prod-005",
    title: "A5 Cork Diary",
    description: "Made with biodegradable cork and premium eco-paper. Ideal for journaling and corporate gifting.",
    price: 350,
    discountedPrice: 280,
    stockLeft: 40,
    isBulkAvailable: true,
    bulkMinQty: 10,
    rating: 4.8,
    rank: 6,
    image: "/cork_diary.jpg",
    images: ["/cork_diary.jpg"],
    category: "Stationery",
    certifiedSustainable: true,
  },
  {
    id: "prod-006",
    title: "Artisanal Paper",
    description: "Handmade by rural artisans, each sheet has unique texture and character. Ideal for invitations, art, or branding.",
    price: 500,
    discountedPrice: 350,
    stockLeft: 48,
    isBulkAvailable: true,
    bulkMinQty: 10,
    rating: 4.8,
    rank: 1,
    image: "/artisanal.png",
    images: ["/artisanal.png", "/paper2.jpg", "/paper3.jpg", "/paper4.jpg"],
    category: "Stationery",
    certifiedSustainable: true,
  }
];
