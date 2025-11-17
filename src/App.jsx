import React from "react";

const Header = () => (
  <header className="header">
    <h1>Rinu Manoj</h1>
    <p className="tagline">Aspiring Full-Stack Developer</p>
  </header>
);

const About = () => (
  <section>
    <h2>About Me</h2>
    <p>
      Hello — I'm Rinu Manoj. I'm currently learning web development and
      building projects with React and Vite. I study at Yenepoya and enjoy
      building useful and attractive user interfaces.
    </p>
  </section>
);

const Hobby = ({ title, desc }) => (
  <div className="hobby">
    <h4>{title}</h4>
    <p>{desc}</p>
  </div>
);

const Hobbies = () => (
  <section>
    <h2>Hobbies & Interests</h2>
    <div className="hobby-list">
      <Hobby
        title="Coding"
        desc="Building web apps, learning new frameworks."
      />
      <Hobby
        title="Photography"
        desc="Capturing candid moments and landscapes."
      />
      <Hobby title="Reading" desc="Fiction and tech blogs to stay inspired." />
    </div>
  </section>
);

const Skills = () => (
  <section>
    <h2>Skills</h2>
    <ul>
      <li>JavaScript (ES6+), React</li>
      <li>HTML5 & CSS3 — responsive design</li>
      <li>Git & GitHub — version control</li>
    </ul>
  </section>
);

const Footer = () => (
  <footer>
    <p>© {new Date().getFullYear()} Rinu Manoj</p>
  </footer>
);

export default function App() {
  return (
    <div className="container">
      <Header />
      <main>
        <About />
        <Hobbies />
        <Skills />
      </main>
      <Footer />
    </div>
  );
}
