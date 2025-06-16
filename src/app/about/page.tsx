export default function About() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white px-6 py-12 transition-colors duration-500 ease-in-out">
      <section className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg shadow-md p-8 max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">Tentang Saya</h1>
        <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-4">
          Saya adalah seorang <span className="font-semibold text-blue-600 dark:text-blue-400">software developer</span> dengan pengalaman di pengembangan aplikasi
          <span className="font-medium"> Web2 & Web3</span>. Saya menikmati proses membangun aplikasi dari frontend hingga backend.
        </p>
        <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-4">
          Teknologi yang saya gunakan meliputi <span className="font-semibold">Next.js, React, Node.js, SQL</span>, dan <span className="font-semibold">Tailwind CSS</span>.
          Saya juga menguasai bahasa pemrograman <span className="font-semibold">C</span> dan memiliki pemahaman dalam membangun aplikasi yang bersih, efisien, dan responsif.
        </p>
        <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
          Saat ini saya sedang fokus pada pengembangan proyek pribadi dan terus belajar memperdalam keterampilan saya dalam pengembangan full-stack modern.
        </p>
      </section>
    </main>
  );
}
