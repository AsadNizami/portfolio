const projects = [
  {
    title: 'Synthetic Dataset Generator for LLM Finetuning',
    organization: 'Jawaharlal Nehru University',
    link: 'https://github.com/AsadNizami/Dataset-generator-for-LLM-finetuning',
    description: [
      'Developed a web application to generate high-quality question-answer pairs from documents for fine-tuning large language models (LLMs).',
      'The app integrates with Ollama for local LLM interactions, supports multiple LLMs, interactive display, and exports datasets in JSON.',
      'Runs fully locally — ideal for researchers seeking privacy and customization.'
    ]
  },
  {
    title: 'Y-Net: Dual-stream network for image forgery localization',
    organization: 'Jawaharlal Nehru University',
    link: 'https://drive.google.com/file/d/1wGcArqZHmy4NVKHW447rbAWRRI3AVwhp/view?usp=sharing',
    description: [
      'Designed a dual-stream encoder-decoder network (Y-Net) using TensorFlow, processing RGB and Error Level Analysis (ELA) images.',
      'Achieved F1 score of 68.74% on CASIA and 82.49% on Fantastic Reality dataset.',
      'Targeted applications in digital forensics and forgery detection.'
    ]
  },
  {
    title: 'Solutions to Understanding Deep Learning by Simon J.D. Prince',
    organization: 'Self-initiated',
    link: 'https://github.com/AsadNizami/Solutions-to-UnderstandingDeepLearning',
    description: [
      'Compiled and documented complete solutions up to Chapter 12 of the book.',
      'Demonstrated strong theoretical and applied understanding of deep learning.'
    ]
  },
  {
    title: 'NS3-Simulation',
    organization: 'Self-initiated',
    link: 'https://github.com/AsadNizami/NS3-Simulation',
    description: [
      'Understanding the impact of MAC scheduling algorithms, numerology, and mobility in 5G NR.',
      'Implemented using NS3.'
    ]
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-16 px-4 bg-light-secondary dark:bg-dark-secondary text-light-text dark:text-dark-text">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-light-primary dark:text-dark-primary mb-10 text-center">Projects</h1>
        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <div key={index} className="border border-light-secondary dark:border-dark-secondary rounded-lg p-6 shadow-lg bg-light-background dark:bg-dark-background transform transition-transform duration-300 hover:scale-105">
              <h2 className="text-2xl font-semibold mb-2 text-light-accent dark:text-dark-accent">{project.title}</h2>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">{project.organization}</p>
              <ul className="list-disc list-inside text-base space-y-1 text-light-text dark:text-dark-text opacity-90">
                {project.description.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
              <a
                href={project.link}
                target="_blank"
                className="inline-block mt-4 px-4 py-2 bg-light-primary text-white dark:bg-dark-primary dark:text-dark-text rounded-full text-sm font-medium hover:opacity-90 transition-opacity duration-300"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 