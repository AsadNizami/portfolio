const Education = () => {
  return (
    <section id="education" className="py-16 px-4 bg-light-secondary dark:bg-dark-secondary text-light-text dark:text-dark-text">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-light-primary dark:text-dark-primary mb-10">Education</h1>
        <div className="bg-light-background dark:bg-dark-background rounded-lg p-8 shadow-lg transform transition-transform duration-300 hover:scale-105">
          <h2 className="text-3xl font-semibold mb-2 text-light-accent dark:text-dark-accent">Jawaharlal Nehru University, New Delhi</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-3">Integrated B.Tech and M.Tech in Computer Science</p>
          <p className="text-lg mb-2 opacity-90">GPA: 7.49/9.0</p>
          <p className="text-lg mb-6 text-gray-500 dark:text-gray-400">Aug 2019 – June 2024</p>
          <h3 className="text-xl font-semibold mb-3 text-light-accent dark:text-dark-accent text-center">Relevant Coursework:</h3>
          <ul className="list-disc list-inside text-base space-y-1 text-light-text dark:text-dark-text opacity-90 mx-auto max-w-2xl text-center">
            <li>Computer Vision</li>
            <li>Data Structures and Algorithms</li>
            <li>Computer Architecture</li>
            <li>Artificial Intelligence</li>
            <li>Machine Learning</li>
            <li>Digital Image Processing</li>
            <li>Computer Networks</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Education; 