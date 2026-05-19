import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/common/Footer';
import { Header } from './components/common/Header';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';

// 根组件：组合个人作品集所有展示模块。
function App() {
  return (
    <div className="min-h-screen bg-dark text-light">
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
