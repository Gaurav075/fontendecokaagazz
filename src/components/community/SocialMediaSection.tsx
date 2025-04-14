const SocialMediaSection = () => {
    const instagramPosts = [
      'https://www.instagram.com/p/DIZLNNNSM6f/embed',
      'https://www.instagram.com/p/DHY_9MVyALR/embed',
      'https://www.instagram.com/p/DIWkQiYyaF0/embed',
    ];
  
    return (
      <div className="p-4 sm:p-6 bg-white border-t mt-8">
        <h3 className="text-base sm:text-lg font-semibold mb-4">Latest from Instagram</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {instagramPosts.map((url, index) => (
            <div
              key={`ig-${index}`}
              className="aspect-w-1 aspect-h-[1.5] bg-gray-100 border border-gray-200 rounded-xl overflow-hidden"
            >
              <iframe
                src={url}
                className="w-full h-full"
                allowTransparency
                allow="encrypted-media"
                frameBorder="0"
                scrolling="no"
                title={`Instagram Post ${index + 1}`}
              ></iframe>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default SocialMediaSection;
  