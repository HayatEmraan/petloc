import Breeding from "@/components/breeding/breeding";
import Contact from "@/components/contact/contact";
import CustomerStats from "@/components/customerstats/customerstats";
import Delivery from "@/components/delivery/delivery";
import Hero from "@/components/hero/hero";
import Services from "@/components/services/services";
import Testimonials from "@/components/testimonials/testimonials";

export default function Home() {
  return (
    <main>
      <Hero />
      <CustomerStats />
      <Services />
      <Breeding />
      <Delivery />
      <Testimonials />
      <Contact />
    </main>
  );
}
