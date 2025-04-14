// pages/partner.tsx
import Head from 'next/head';
import PartnerForm from '../components/partner/PartnerForm';
import Header from '../components/Header';
import Footer from '../components/Footer';

const PartnerPage = () => {
  return (
    <>
    <Header />
      <Head>
        <title>Partner With Us | Kaagazz</title>
      </Head>

      <main className="bg-[#faf9f7] py-10 px-6">
        <section className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-semibold text-neutral-900 mb-4">
            Let’s Build Something Together
          </h1>
          <p className="text-neutral-600 text-lg md:text-xl">
            Whether it's a CSR campaign, a sustainability initiative, or a creative print collab — we’re all ears.
          </p>
        </section>
        <section className="max-w-4xl mx-auto">
          <PartnerForm />
        </section>
      </main>
      <Footer/>
    </>
  );
};

export default PartnerPage;
