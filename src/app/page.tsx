import Banner from '@/components/Banner';
import AboutMe from '@/components/AboutMe';
import Container from '@/components/Container';
import TechStack from '@/components/TechStack';
import Projects from '@/components/Projects';
import ContactMe from '@/components/ContactMe';
import ScrollToTopButton from '@/components/ScrollToTobButton';

const HomePage = () => {
  return (
    <div className="aurora-bg">
      {/* Aurora Blobs */}
      <div className="aurora-blob aurora-blob-1"></div>
      <div className="aurora-blob aurora-blob-2"></div>
      <div className="aurora-blob aurora-blob-3"></div>
      <div className="aurora-blob aurora-blob-4"></div>
      <div className="aurora-blob aurora-blob-5"></div>
      <div className="aurora-blob aurora-blob-6"></div>

      {/* Grid Overlay */}
      <div className="bg-grid fixed inset-0"></div>

      {/* <CircularText /> */}

      <ScrollToTopButton />

      {/* Content */}
      <Container>
        <Banner />
        <AboutMe />
        <TechStack />
        <Projects />
        <ContactMe />
      </Container>
    </div>
  );
};

export default HomePage;
