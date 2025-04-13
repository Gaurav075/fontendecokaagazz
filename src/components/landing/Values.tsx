

const Values = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-center text-3xl font-bold uppercase mb-12">OUR VALUES</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Eco-Conscious */}
          <div className="flex flex-col items-center text-center">
            <div className="mb-4">
              <img 
                src="/lovable-uploads/f6e183e4-f8cf-4b2c-9afb-f4490c3e7f77.png" 
                alt="Eco-Conscious"
                className="w-24 h-24 object-contain"
              />
            </div>
            <h3 className="text-lg font-medium">Eco-Conscious</h3>
          </div>

          {/* Reduce, Reuse, Recycle */}
          <div className="flex flex-col items-center text-center">
            <div className="mb-4">
              <img 
                src="/lovable-uploads/f6e183e4-f8cf-4b2c-9afb-f4490c3e7f77.png" 
                alt="Reduce, Reuse, Recycle"
                className="w-24 h-24 object-contain"
              />
            </div>
            <h3 className="text-lg font-medium">Reduce, Reuse, Recycle</h3>
          </div>

          {/* Global Cooperation */}
          <div className="flex flex-col items-center text-center">
            <div className="mb-4">
              <img 
                src="/lovable-uploads/f6e183e4-f8cf-4b2c-9afb-f4490c3e7f77.png" 
                alt="Global Cooperation"
                className="w-24 h-24 object-contain"
              />
            </div>
            <h3 className="text-lg font-medium">Global Cooperation</h3>
          </div>

          {/* Circular Economy */}
          <div className="flex flex-col items-center text-center">
            <div className="mb-4">
              <img 
                src="/lovable-uploads/f6e183e4-f8cf-4b2c-9afb-f4490c3e7f77.png" 
                alt="Circular Economy"
                className="w-24 h-24 object-contain"
              />
            </div>
            <h3 className="text-lg font-medium">Circular Economy</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Values;