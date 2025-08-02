import Header from "../components/Header";
import Footer from "../components/Footer";
import BulkOrderForm from "../components/order/BulkForm";

const BulkOrder = () => {
  return (
    <>
      <Header />
      <div>
        <title>Bulk Order | Kaagazz</title>
      </div>

      <main className="bg-[#faf9f7] py-10 px-6">
        <section className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-semibold text-neutral-900 mb-4">
            Bulk Orders 
          </h1>
          <p className="text-neutral-600 text-lg md:text-xl">
            we’re here to help with
            your bulk order needs.
          </p>
        </section>
        <section className="max-w-4xl mx-auto">
          <BulkOrderForm />
        </section>
      </main>
      <Footer />
    </>
  );
};

export default BulkOrder;
