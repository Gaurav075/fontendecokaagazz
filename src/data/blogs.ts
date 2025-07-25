export interface BlogPost {
  id: string;
  title: string;
  content: string;
  image: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  readTime: string;
}

// This simulates your folder structure - add new blogs here
export const blogs: BlogPost[] = [
  {
    id: "digital-transformation-future",
    title: "The Future of Digital Transformation in Small Businesses",
    excerpt: "Exploring how small businesses are leveraging digital tools to create sustainable growth and competitive advantages in the modern marketplace.",
    content: `
      <div class="prose max-w-none">
        <p>The landscape of business and technology is constantly evolving, driven by emerging trends that reshape how we work, interact, and create value. Understanding these trends is crucial for organizations looking to stay competitive and relevant in an increasingly dynamic marketplace.</p>
        
        <h3>Digital Transformation Acceleration</h3>
        <p>The pandemic has accelerated digital transformation across industries, pushing companies to adopt new technologies and reimagine their business models. From remote work solutions to AI-powered automation, organizations are leveraging technology to enhance efficiency and create new opportunities.</p>
        
        <h3>Cloud-First Strategies</h3>
        <p>Small businesses are increasingly adopting cloud-first strategies to reduce infrastructure costs and improve scalability. This shift enables them to compete with larger organizations by accessing enterprise-level tools and capabilities.</p>
        
        <h3>Data-Driven Decision Making</h3>
        <p>Modern businesses are leveraging analytics and data insights to make informed decisions. Small businesses that embrace data-driven approaches often see significant improvements in efficiency and customer satisfaction.</p>

        <p> For more read at <a href="https://medium.com/">medium</a></p>
      </div>
    `,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    date: "December 15, 2024",
    author: "Kaagazz Team",
    category: "Digital Transformation",
    readTime: "5 min read"
  },
  {
    id: "sustainable-business-practices",
    title: "Sustainable Business Practices: A Complete Guide",
    excerpt: "Learn how companies are implementing eco-friendly practices while maintaining profitability and creating positive environmental impact.",
    content: `
      <div class="prose max-w-none">
        <p>Environmental consciousness is no longer just a nice-to-have – it's becoming a business imperative. Companies are integrating sustainable practices into their core operations, from supply chain management to product development.</p>
        
        <h3>Green Supply Chain Management</h33
        <p>Organizations are reimagining their supply chains to reduce environmental impact while maintaining efficiency. This includes working with eco-friendly suppliers and optimizing logistics for minimal carbon footprint.</p>
        
        <h3>Circular Economy Principles</h3>
        <p>Businesses are adopting circular economy principles, focusing on waste reduction, recycling, and creating products designed for longevity and reusability.</p>
        
        <h3>Measuring Impact</h3>
        <p>Successful sustainable businesses implement robust measurement systems to track their environmental impact and progress toward sustainability goals.</p>
      </div>
    `,
    image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    date: "December 12, 2024",
    author: "Kaagazz Team",
    category: "Sustainability",
    readTime: "8 min read"
  },
  {
    id: "community-driven-business",
    title: "Building Community-Driven Business Models",
    excerpt: "Discover how successful businesses are creating value by putting community engagement at the center of their strategy.",
    content: `
      <div class="prose max-w-none">
        <p>Community-driven business models are revolutionizing how companies create value and build lasting relationships with their customers. By putting community at the center of their strategy, businesses can create more meaningful connections and sustainable growth.</p>
        
        <h3>Customer-Centric Approach</h3>
        <p>Successful community-driven businesses prioritize customer needs and feedback in their decision-making processes. This approach leads to products and services that truly resonate with their target audience.</p>
        
        <h3>Building Engagement</h3>
        <p>Creating meaningful engagement requires authentic communication and value creation for community members. This includes educational content, networking opportunities, and collaborative initiatives.</p>
        
        <h3>Long-term Value Creation</h3>
        <p>Community-driven models focus on long-term relationship building rather than short-term transactions, leading to higher customer lifetime value and brand loyalty.</p>
      </div>
    `,
    image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    date: "December 10, 2024",
    author: "Kaagazz Team",
    category: "Community",
    readTime: "6 min read"
  },
  {
    id: "remote-work-innovation",
    title: "Innovation in Remote Work Technologies",
    excerpt: "The latest trends and tools that are shaping the future of remote work and distributed teams across industries.",
    content: `
      <div class="prose max-w-none">
        <p>Remote work has evolved from a temporary solution to a permanent fixture in the modern workplace. Organizations are investing in innovative technologies to support distributed teams and maintain productivity.</p>
        
        <h3>Collaboration Tools Evolution</h3>
        <p>Modern collaboration platforms are becoming more sophisticated, offering seamless integration between communication, project management, and productivity tools.</p>
        
        <h3>Virtual Reality in Remote Work</h3>
        <p>VR technologies are beginning to transform remote work by creating immersive meeting experiences and virtual office environments that foster bett3r collaboration.</p>
        
        <h3>Security and Compliance</h3>
        <p>As remote work becomes permanent, organizations are investing heavily in security infrastructure and compliance solutions to protect sensitive data and maintain regulatory standards.</p>
      </div>
    `,
    image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    date: "December 8, 2024",
    author: "Kaagazz Team",
    category: "Technology",
    readTime: "7 min read"
  },
  {
    id: "purpose-driven-entrepreneurship",
    title: "The Rise of Purpose-Driven Entrepreneurship",
    excerpt: "How modern entrepreneurs are building businesses that prioritize social impact alongside financial success.",
    content: `
      <div class="prose max-w-none">
        <p>Purpose-driven entrepreneurship is transforming the business landscape, with entrepreneurs increasingly focusing on creating positive social and environmental impact alongside financial returns.</p>
        
        <h3>Social Impact Measurement</h3>
        <p>Modern purpose-driven businesses implement robust systems to measure and report their social impact, ensuring accountability and transparency in their mission-driven work.</p>
        
        <h3>Stakeholder Capitalism</h3>
        <p>These businesses embrace stakeholder capitalism, considering the needs of employees, customers, communities, and the environment in their decision-making processes.</p>
        
        <h3>Building Sustainable Growth</h3>
        <p>Purpose-driven entrepreneurs focus on building sustainable business models that can create long-term value for all stakeholders while maintaining profitability.</p>
      </div>
    `,
    image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    date: "December 5, 2024",
    author: "Kaagazz Team",
    category: "Entrepreneurship",
    readTime: "4 min read"
  },
];

// Get latest 3 blogs for the homepage
export const getLatestBlogs = (): BlogPost[] => {
  return blogs
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);
};

// Get all blogs sorted by date
export const getAllBlogs = (): BlogPost[] => {
  return blogs.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
};

// Get blog by ID
export const getBlogById = (id: string): BlogPost | undefined => {
  return blogs.find(blog => blog.id === id);
};