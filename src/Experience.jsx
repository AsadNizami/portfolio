const experiences = [
  {
    title: 'Research Intern',
    company: 'Indian Institute of Technology Kharagpur',
    duration: 'June 2024 – Aug 2024',
    description: [
      'Benchmarked UNI, Phikon, and ResNet18 encoders for survival analysis from breast cancer WSIs.',
      'Built a pipeline in PyTorch using Scikit-learn and Lifelines to extract features, aggregate them, and feed into an LSTM-based risk predictor.'
    ]
  },
  {
    title: 'Software Developer Intern',
    company: 'Third Origin LLC',
    duration: 'Apr 2022 – Sep 2022',
    description: [
      'Built connector APIs for real-time data exchange between proprietary and third-party systems.',
      'Wrote developer documentation using Sphinx and performed unit testing in Python.'
    ]
  },
  {
    title: 'Doubt Solver',
    company: 'CodeChef',
    duration: 'Apr 2022 – Mar 2023',
    description: [
      'Resolved programming issues, debugged, and provided users with hints to solve algorithmic problems.',
      'Assisted over 200 users in total in solving programming problems.'
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-16 px-4 bg-light-background dark:bg-dark-background text-light-text dark:text-dark-text">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-light-primary dark:text-dark-primary mb-10 text-center">Professional Experience</h1>
        <div className="space-y-8">
          {experiences.map((exp, i) => (
            <div key={i} className="border border-light-secondary dark:border-dark-secondary rounded-lg p-6 shadow-lg bg-light-secondary dark:bg-dark-secondary transform transition-transform duration-300 hover:scale-105">
              <h2 className="text-2xl font-semibold mb-2 text-light-accent dark:text-dark-accent">{exp.title} @ {exp.company}</h2>
              <p className="text-base text-gray-600 dark:text-gray-400 mb-3">{exp.duration}</p>
              <ul className="list-disc list-inside text-base space-y-1 text-light-text dark:text-dark-text opacity-90">
                {exp.description.map((point, j) => (
                  <li key={j}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience; 