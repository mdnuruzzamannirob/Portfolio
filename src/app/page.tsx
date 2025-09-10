import Banner from '@/components/Banner';
import AboutMe from '@/components/AboutMe';
import Container from '@/components/Container';

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

      {/* Content */}
      <Container>
        <Banner />
        <AboutMe />
      </Container>
    </div>
  );
};

export default HomePage;
