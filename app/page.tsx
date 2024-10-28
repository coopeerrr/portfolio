import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Navigation from '@/components/Navigation';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-500/20 via-purple-500/20 to-pink-500/20 backdrop-blur-3xl">
      <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      <div className="absolute right-0 top-0 -z-10 h-[1000px] w-[1000px] rounded-full bg-purple-400 opacity-20 blur-[128px]"></div>
      <div className="absolute left-0 bottom-0 -z-10 h-[1000px] w-[1000px] rounded-full bg-indigo-400 opacity-20 blur-[128px]"></div>
      
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </div>
    </main>
  );
}