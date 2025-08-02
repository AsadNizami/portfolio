import { useState, useEffect } from 'react';

const navItems = [
  { path: '#home', label: 'Home' },
  { path: '#skills', label: 'Skills' },
  { path: '#education', label: 'Education' },
  { path: '#projects', label: 'Projects' },
  { path: '#experience', label: 'Experience' },
  { path: '#publications', label: 'Publications' },
  { path: '#achievements', label: 'Achievements' },
  { path: '#contact', label: 'Contact' }
];

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(() =>
    localStorage.getItem('theme') === 'dark'
  );
  const [activeSection, setActiveSection] = useState('#home');

  useEffect(() => {
    const html = document.documentElement;
    if (darkMode) {
      html.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      html.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      let currentActive = '';

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - sectionHeight / 3) {
          currentActive = `#${section.id}`;
          break;
        }
      }
      setActiveSection(currentActive);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call once on mount to set initial active section

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className="sticky top-0 z-50 flex justify-between items-center px-8 py-4 bg-light-background dark:bg-dark-background border-b border-light-secondary dark:border-dark-secondary shadow-md">
      <div className="text-xl font-semibold text-light-accent dark:text-dark-accent">Asad Nizami</div>
      <div className="flex items-center space-x-6">
        {navItems.map(({ path, label }) => (
          <a
            key={path}
            href={path}
            className={`relative text-light-text dark:text-dark-text hover:text-light-primary dark:hover:text-dark-primary transition-colors 
              ${activeSection === path ? 'font-bold after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-full after:bg-light-primary dark:after:bg-dark-primary' : ''}
            `}
            onClick={(e) => {
              e.preventDefault();
              document.querySelector(path).scrollIntoView({
                behavior: 'smooth'
              });
              setActiveSection(path);
            }}
          >
            {label}
          </a>
        ))}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="ml-4 px-3 py-1.5 border border-light-secondary dark:border-dark-secondary rounded-full text-sm bg-light-secondary dark:bg-dark-secondary text-light-text dark:text-dark-text hover:bg-light-primary hover:text-white dark:hover:bg-dark-primary dark:hover:text-dark-text transition-all duration-300"
        >
          {darkMode ? '☀️ Light' : '🌙 Dark'}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
