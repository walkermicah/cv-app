import Header from './Header';
import Profile from './Profile';
import Experience from './Experience';
import Contact from './Contact';
import Education from './Education';
import Skills from './Skills';
import '../styles/CV.css';

export default function CV() {
  return (
    <div className="CV">
      <div className="CV-main">
        <Header />
        <Profile />
        <Experience />
      </div>
      <div className="CV-sidebar">
        <Contact />
        <Education />
        <Skills />
      </div>
    </div>
  );
}
