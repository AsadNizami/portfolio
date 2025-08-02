import profileImage from './assets/profile.jpeg';

const Home = () => {
  return (
    <section id="home" className="py-16 px-4 min-h-screen flex flex-col justify-center items-center text-center bg-light-background dark:bg-dark-background">
      <img 
        src={profileImage} 
        alt="Profile" 
        className="w-48 h-48 rounded-full object-cover mb-8 border-4 border-light-primary dark:border-dark-primary shadow-lg"
      />
      <h1 className="text-5xl font-extrabold mb-4 text-light-primary dark:text-dark-primary leading-tight">
        Hi, I'm Asad Nizami 👋
      </h1>
      <p className="text-xl max-w-4xl mb-8 text-light-text dark:text-dark-text opacity-90">
        I am actively seeking roles in Machine Learning, Deep Learning Research, Software Development, or Web Development.
        Explore my portfolio to see how my skills and projects align with your needs!
      </p>

      <div className="flex flex-wrap justify-center gap-6 mt-6">
        <a
          href="https://github.com/AsadNizami"
          target="_blank"
          className="px-6 py-3 border-2 border-light-primary dark:border-dark-primary rounded-full text-lg font-semibold text-light-primary dark:text-dark-primary hover:bg-light-primary hover:text-white dark:hover:bg-dark-primary dark:hover:text-dark-text transition-all duration-300 shadow-lg"
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/asad-nizami"
          target="_blank"
          className="px-6 py-3 border-2 border-light-primary dark:border-dark-primary rounded-full text-lg font-semibold text-light-primary dark:text-dark-primary hover:bg-light-primary hover:text-white dark:hover:bg-dark-primary dark:hover:text-dark-text transition-all duration-300 shadow-lg"
        >
          LinkedIn
        </a>
        <a
          href="mailto:asadnizami123@gmail.com"
          className="px-6 py-3 border-2 border-light-primary dark:border-dark-primary rounded-full text-lg font-semibold text-light-primary dark:text-dark-primary hover:bg-light-primary hover:text-white dark:hover:bg-dark-primary dark:hover:text-dark-text transition-all duration-300 shadow-lg"
        >
          Email
        </a>
      </div>
    </section>
  );
};

export default Home; 