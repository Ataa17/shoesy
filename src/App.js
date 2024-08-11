import { Subscribe, Hero, Footer, CustomerReviews, PopularProducts, Services, SpecialOffers } from "./sections/index";
import { Nav } from "./components/index";

function App() {
  return (
    <main className="relative">
      <Nav />
      <section classname="xl:padding-l wide:padding-r padding-b">
        <Hero />
      </section>
      <section className="padding">
        <PopularProducts />
      </section>
      <section className="padding py-10">
        <Services />
      </section>
      <section className="padding">
        <SpecialOffers />
      </section>
      <section className="padding bg-blue-100 ">
        <CustomerReviews />
      </section>
      <section className="padding">
        <Subscribe />
      </section>
      <section className="bg-blue-950 padding-x padding text-white">
        <Footer  />
      </section>

    </main>
  );
}

export default App;
