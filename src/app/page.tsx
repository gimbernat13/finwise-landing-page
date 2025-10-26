import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing/Pricing";
import FAQ from "@/components/FAQ";
import Benefits from "@/components/Benefits/Benefits";
import Container from "@/components/Container";
import Section from "@/components/Section";
import Stats from "@/components/Stats";
import MovieCarousel from "@/components/MovieCarousel";

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />

      <Container>
        <Section
          id="stats"
          title="Todo el contenido que necesitas"
          description="Miles de películas, series y canales en vivo disponibles 24/7"
        >
          <Stats />
        </Section>
      </Container>

      <MovieCarousel />

      <Container>
        <Benefits />

        <Section
          id="pricing"
          title="Nuestros Paquetes"
          description="Elige el plan perfecto para ti. Todos incluyen acceso completo al contenido."
        >
          <Pricing />
        </Section>

        <Section
          id="benefits"
          title="Instala fácil en cualquier dispositivo"
          description="Disponible en Smart TV, smartphones, tablets y computadoras."
        >
          {/* Additional installation info can go here */}
        </Section>

        <Section
          id="testimonials"
          title="Somos panel oficial de Kaelus TV"
          description="Contrata Seguro"
        >
          <Testimonials />
        </Section>

        <FAQ />
      </Container>
    </>
  );
};

export default HomePage;
