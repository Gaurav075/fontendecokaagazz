import Footer from '../components/Footer'
import Header from '../components/Header'
import MyOrderList from '../components/order/MyOrderList'

const MyOrder = () => {
  return (
    <>
        <Header/>
        <div>
        <title>Place Your | Kaagazz</title>
      </div>
      <main className="py-5 px-6">
      <section className="max-w-4xl mx-auto text-center mt-10">
          <h1 className="text-4xl md:text-5xl font-serif font-semibold text-neutral-900 mb-4">
            Thanks for choosing Kaagazz
          </h1>
          <p className="text-neutral-600 text-lg md:text-xl">
            Fill your details for placing the order
          </p>
        </section>
        <section className="max-w-4xl mx-auto">
            <MyOrderList/>
        </section>
        </main>
        <Footer/>
    </>
  )
}

export default MyOrder
