const publications = [
  {
    title: 'Benchmarking Vision Encoders for Survival Analysis Using Histopathological Images',
    authors: 'Asad Nizami, Arita Halder',
    date: 'Aug 2024',
    link: 'https://doi.org/10.1101/2024.08.23.24312362'
  },
  {
    title: 'Y-Net - A Dual Stream Encoder-Decoder Network for Image Forgery Localization',
    authors: 'Asad Nizami, Ankit Kumar Jaiswal, Rajeev Srivastava',
    date: 'Submitted: March 2024',
    link: '' // same DOI used; replace if different
  }
];

const Publications = () => {
  return (
    <section id="publications" className="py-16 px-4 bg-light-secondary dark:bg-dark-secondary text-light-text dark:text-dark-text">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-light-primary dark:text-dark-primary mb-10 text-center">Publications</h1>
        <div className="space-y-8">
          {publications.map((pub, i) => (
            <div key={i} className="border border-light-secondary dark:border-dark-secondary rounded-lg p-6 shadow-lg bg-light-background dark:bg-dark-background transform transition-transform duration-300 hover:scale-105">
              <h2 className="text-2xl font-semibold mb-2 text-light-accent dark:text-dark-accent">{pub.title}</h2>
              <p className="text-base text-gray-500 dark:text-gray-400">{pub.authors}</p>
              <p className="text-sm text-gray-600 dark:text-gray-500 mb-3">{pub.date}</p>
              <a href={pub.link} target="_blank" className="inline-block mt-4 px-4 py-2 bg-light-primary text-white dark:bg-dark-primary dark:text-dark-text rounded-full text-sm font-medium hover:opacity-90 transition-opacity duration-300">
                View Publication
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications; 