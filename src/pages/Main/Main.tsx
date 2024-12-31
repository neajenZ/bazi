import { AboutMaster } from '@widjets/AboutMaster';
import { AboutMe } from '@widjets/AboutMe';
import { Apps } from '@widjets/Apps';
import { Feedback } from '@widjets/Feedback';
import { Intro } from '@widjets/Intro';
import { VideoSection } from '@widjets/VideoSection';

const MainPage = () => {
  return (
    <div className={'main-page'}>
      <Intro />
      <AboutMaster />
      <AboutMe />
      <Apps />
      <VideoSection />
      <Feedback />
    </div>
  );
};

export default MainPage;
