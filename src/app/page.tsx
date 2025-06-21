import ThemeToggle from "@/components/themeToggle";

export default function Home() {
  const year = new Date().getFullYear();
  const projects = [
    {
      title: "Personal Portfolio Website",
      description: "Website portofolio saya menggunakan Next.js dan Tailwind CSS.",
      link: "https://your-portfolio.vercel.app",
    },
    {
      title: "Todo App",
      description: "Aplikasi pencatatan tugas menggunakan React dan TypeScript.",
      link: "https://github.com/yourusername/todo-app",
    },
    {
      title: "REST API with Node.js",
      description: "Membangun REST API menggunakan Node.js dan Express.",
      link: "https://github.com/yourusername/rest-api",
    },
  ];

  const skills = [
    { name: "JavaScript", icon: "https://cdn.simpleicons.org/javascript" },
    { name: "TypeScript", icon: "https://cdn.simpleicons.org/typescript/3178C6" },
    { name: "React", icon: "https://cdn.simpleicons.org/react/61DAFB" },
    { name: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs/339933" },
    { name: "HTML5", icon: "https://cdn.simpleicons.org/html5/E34F26" },
    { name: "CSS3", icon: "https://cdn.simpleicons.org/css3/1572B6" },
    { name: "SQL", icon: "https://cdn.simpleicons.org/mysql/4479A1" },
    { name: "C", icon: "https://cdn.simpleicons.org/c/00599C" },
    { name: "Next.js", icon: "https://cdn.simpleicons.org/nextdotjs/000000" },
  ];

  return (
    <>
      <main className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white px-6 py-12 transition-colors duration-500 ease-in-out">
        <div className="flex justify-end mb-6">
          <ThemeToggle />
        </div>

        <section className="text-center mb-20">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white">Joshua Christopher Hartawan</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">Full Stack Web Developer</p>
          <a href="#projects" className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition">
            Lihat Proyek Saya
          </a>
        </section>

        <section className="mb-20" id="about">
          <div className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg shadow-md p-6 transition-colors duration-300">
            <h2 className="text-3xl font-semibold mb-4 text-gray-900 dark:text-white">Tentang Saya</h2>
            <p className="text-gray-700 dark:text-gray-300 max-w-xl">
              Saya seorang pengembang web dengan keahlian di JavaScript, TypeScript, C, Node.js, SQL, React, Next.js, HTML, dan CSS. Saya suka membangun aplikasi modern yang cepat dan responsive.
            </p>
          </div>
        </section>

        <section className="mb-20" id="skill">
          <div className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg shadow-md p-6 transition-colors duration-300">
            <h2 className="text-3xl font-semibold mb-4 text-gray-900 dark:text-white">Skill</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {skills.map((skill) => (
                <div key={skill.name} className="flex items-center space-x-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded text-gray-800 dark:text-gray-200">
                  <img src={skill.icon} alt={skill.name} className="w-6 h-6" />
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mb-20" id="projects">
          <div className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg shadow-md p-6 transition-colors duration-300">
            <h2 className="text-3xl font-semibold mb-6 text-gray-900 dark:text-white">Proyek Saya</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {projects.map((project, index) => (
                <div key={index} className="bg-white dark:bg-gray-900 shadow-md border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:shadow-lg transition">
                  <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{project.title}</h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">{project.description}</p>
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline font-medium">
                    Lihat Proyek →
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 py-6 mt-10">
        <div className="max-w-6xl mx-auto px-6 text-center text-sm text-gray-600 dark:text-gray-400">© {year} Joshua Christopher Hartawan. All rights reserved.</div>
      </footer>
    </>
  );
}
