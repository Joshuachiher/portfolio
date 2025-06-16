// app/projects/page.tsx

export default function ProjectsPage() {
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

  return (
    <main className="min-h-screen px-6 py-12 bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <h1 className="text-4xl font-bold mb-8 text-center">Proyek Saya</h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 shadow-md border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:shadow-lg transition"
          >
            <h2 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
              {project.title}
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              {project.description}
            </p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
            >
              Lihat Proyek →
            </a>
          </div>
        ))}
      </div>
    </main>
  );
}
