import SocialMediaSection from "./SocialMediaSection";

const AboutCommunity = () => (
  <>
    <div>
      <h2 className="text-lg sm:text-xl font-semibold mb-2">Welcome to our Community 👋🌿✨</h2>
      <p className="text-sm sm:text-base mb-4 text-gray-700">
        Welcome to the World of Kaagazz! This is more than just a space—it’s a movement...
      </p>
      <details className="mb-4">
        <summary className="cursor-pointer text-sm font-medium text-gray-800">
          What is this community for?
        </summary>
        <p className="mt-2 text-sm text-gray-700">
          By being a part of this community, you gain access to a world of creativity...
        </p>
      </details>
      <p className="text-sm sm:text-base font-medium">
        Join us as we redefine the future of sustainable stationery and craftsmanship...
      </p>
    </div>
    <SocialMediaSection/>
    </>
    
  );
  
  export default AboutCommunity;
  