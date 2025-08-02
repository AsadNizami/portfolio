const achievements = [
  {
    title: 'Codeforces Specialist',
    description: 'Solved 850+ problems. Max rating: 1483 (highest in university).',
    link: 'https://codeforces.com/profile/FrozenKandy'
  },
  {
    title: 'CodeChef 5-Star',
    description: 'Solved 200+ problems. Max rating: 2041 (highest in university).',
    link: 'https://www.codechef.com/users/frozencandy'
  },
  {
    title: 'TCS Codevita Global Rank 240',
    description: 'Secured a global rank of 240 in Season 10.',
    link: 'https://drive.google.com/file/d/1AF_2TimQctLglWcMROw0ZVdB39CUW5OC/view?usp=sharing'
  }
];

const Achievements = () => {
  return (
    <section id="achievements" className="py-16 px-4 bg-light-background dark:bg-dark-background text-light-text dark:text-dark-text">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-light-primary dark:text-dark-primary mb-10 text-center">Achievements</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((a, i) => (
            <div key={i} className="border border-light-secondary dark:border-dark-secondary rounded-lg p-6 shadow-lg bg-light-secondary dark:bg-dark-secondary transform transition-transform duration-300 hover:scale-105">
              <h2 className="text-2xl font-semibold mb-2 text-light-accent dark:text-dark-accent">{a.title}</h2>
              <p className="text-base mb-3 text-light-text dark:text-dark-text opacity-90">{a.description}</p>
              <a href={a.link} target="_blank" className="inline-block mt-4 px-4 py-2 bg-light-primary text-white dark:bg-dark-primary dark:text-dark-text rounded-full text-sm font-medium hover:opacity-90 transition-opacity duration-300">
                View
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements; 