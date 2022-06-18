import {AppBackground} from '../lib/components';
import AppContainer from '../lib/components/appcontainer';
import {HomeContent, LandingContent, LeftSideNavContent} from '../lib/content';

const leftSideNavContent = <LeftSideNavContent />;
const primaryContent = <HomeContent />;

const Home = () => (
  <AppBackground>
    <LandingContent />
    <AppContainer leftSideNav={leftSideNavContent} content={primaryContent} />
  </AppBackground>
);

export default Home;
