import {
  AppBackground,
  Container,
  CustomComponent,
  Footer,
  Heading,
  Hero,
  NavBar,
  Text,
  Prose
} from '../../lib/components';

import {HomeContent, LandingContent, LeftSideNavContent} from '../../lib/content';

const Home = () => (
  <AppBackground>
    <>
      <NavBar />
      <LandingContent />
      <Container
        leftSideNav={<LeftSideNavContent />}
        content={<HomeContent />}
      />
      <Footer />
    </>
  </AppBackground>
);

export default Home;
