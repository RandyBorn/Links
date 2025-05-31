export default function ProjectsPage() {
  return (
    <div className="max-w-md mx-auto bg-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-purple-500/90 transition-shadow duration-300">
      <a
        href="https://auto-nextjs-project-ebon.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        <div className="p-6">
          <h3 className="text-2xl font-bold text-white mb-2">
            Auto Next.js Projekt
          </h3>
          <p className="text-gray-300 mb-4">
            Ein modernes Next.js Projekt mit Tailwind CSS. Responsives Design
            und optimiert für Performance. Ideal für Automobil- oder
            Showcase-Zwecke.
          </p>
          <span className="inline-block px-4 py-2 text-sm font-medium text-white bg-amber-300 rounded hover:bg-green-600 transition">
            Projekt ansehen →
          </span>
        </div>
      </a>
    </div>
  );
}
