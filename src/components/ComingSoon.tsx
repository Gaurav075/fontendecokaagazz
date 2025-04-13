
import { Link } from "react-router-dom";

const ComingSoon = ({ pageName }: { pageName: string }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-kaagazz-background p-4">
      <div className="text-center max-w-xl">
        <h1 className="text-4xl font-bold mb-6">Coming Soon</h1>
        <div className="w-20 h-1 bg-kaagazz-brown mx-auto mb-6"></div>
        <p className="text-xl mb-8">
          Our <span className="font-bold">{pageName}</span> page is under construction.
        </p>
        <p className="mb-10">
          We're working hard to bring you amazing sustainable content. Please check back soon!
        </p>
        <Link to="/" className="btn-primary">
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default ComingSoon;