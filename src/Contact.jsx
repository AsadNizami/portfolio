const Contact = () => {
  return (
    <section id="contact" className="py-16 px-4 bg-light-secondary dark:bg-dark-secondary text-light-text dark:text-dark-text">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-light-primary dark:text-dark-primary mb-6">Contact Me</h1>
        <p className="text-lg mb-8 opacity-90">If you're interested in collaborating or just want to say hello, feel free to reach out!</p>

        <ul className="space-y-4 mb-8 text-lg">
          <li>
            📧 Email: <a href="mailto:asadnizami123@gmail.com" className="text-light-accent dark:text-dark-accent hover:underline transition-colors duration-300">asadnizami123@gmail.com</a>
          </li>
          <li>
            💼 LinkedIn: <a href="https://linkedin.com/in/asad-nizami" target="_blank" className="text-light-accent dark:text-dark-accent hover:underline transition-colors duration-300">linkedin.com/in/asad-nizami</a>
          </li>
          <li>
            💻 GitHub: <a href="https://github.com/AsadNizami" target="_blank" className="text-light-accent dark:text-dark-accent hover:underline transition-colors duration-300">github.com/AsadNizami</a>
          </li>
        </ul>

        <p className="mt-8 text-lg opacity-90">
          You can also check out my latest CV 👉 
          <a 
            href="https://drive.google.com/file/d/1xYT1mHcAy3gw8nq0nO7m3D7vmk9WypLT/view"
            target="_blank"
            className="ml-2 px-6 py-3 bg-light-primary text-white dark:bg-dark-primary dark:text-dark-text rounded-full text-base font-medium hover:opacity-90 transition-opacity duration-300 shadow-lg"
          >
            View Resume (PDF)
          </a>
        </p>
      </div>
    </section>
  );
};

export default Contact; 