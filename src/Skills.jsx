const skills = [
  {
    category: 'Machine Learning & AI',
    items: [
      'PyTorch',
      'TensorFlow',
      'Scikit-learn',
      'LLMs',
      'Ollama',
      'Computer Vision Systems',
      'Deep Learning',
      'Survival Analysis',
      'LSTM',
    ],
  },
  {
    category: 'Web Development',
    items: [
      'React',
      'Django',
      'HTML',
      'CSS',
      'JavaScript',
      'Tailwind CSS',
    ],
  },
  {
    category: 'Programming Languages',
    items: [
      'Python',
      'C++',
      'JavaScript',
    ],
  },
  {
    category: 'Tools & Technologies',
    items: [
      'Git',
      'GitHub',
      'Sphinx',
    ],
  },
  {
    category: 'Networking',
    items: [
      'NS3',
      'TCP',
      'UDP',
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-16 px-4 bg-light-background dark:bg-dark-background text-light-text dark:text-dark-text">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-light-primary dark:text-dark-primary mb-10 text-center">Skills</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skillCategory, index) => (
            <div key={index} className="border border-light-secondary dark:border-dark-secondary rounded-lg p-6 shadow-lg bg-light-secondary dark:bg-dark-secondary transform transition-transform duration-300 hover:scale-105">
              <h2 className="text-2xl font-semibold mb-4 text-light-accent dark:text-dark-accent">{skillCategory.category}</h2>
              <ul className="list-disc list-inside space-y-2 text-base opacity-90">
                {skillCategory.items.map((skill, i) => (
                  <li key={i}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills; 