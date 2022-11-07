import { Header } from '../../components/header';
import { Footer } from '../../components/footer';

import { SubHeader } from './components/subHeader';
import { Score } from './components/score';
import { Service } from './components/service';
import { About } from './components/about';
import { Contact } from './components/contact';

function Landing() {
  return (
    <div className="w-screen h-screen">
      <Header />
      <SubHeader />
      <Score />
      <Service />
      <About />
      <Contact />
      <Footer />
    </div>

  );
}

export { Landing };
