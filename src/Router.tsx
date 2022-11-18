import { Route, Routes } from 'react-router-dom';
import { About } from './pages/about/about';
import { Services } from './pages/services/sevices';
import { Landing } from './pages/landing/landing';
import { Testimonial } from './pages/testimonial/testimonial';

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/testimonial" element={<Testimonial />} />
    </Routes>
  );
}
