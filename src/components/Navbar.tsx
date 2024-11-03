import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="bg-gradient-to-r from-blue-500 to-blue-700 text-white p-4 shadow-lg">
      <nav className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-bold cursor-pointer transition duration-200 hover:text-gray-200">
          <Link href="/">Educados</Link>
        </h1>
        <ul className="flex space-x-8">
          <li>
            <Link href="/upload-questions" className="relative group">
              <span className="hover:text-gray-200 transition duration-200">Cargar Preguntas</span>
              <span className="absolute left-0 -bottom-1 bg-white h-0.5 w-full scale-x-0 transition-transform duration-200 group-hover:scale-x-100"></span>
            </Link>
          </li>
          <li>
            <Link href="/take-quiz" className="relative group">
              <span className="hover:text-gray-200 transition duration-200">Tomar Quiz</span>
              <span className="absolute left-0 -bottom-1 bg-white h-0.5 w-full scale-x-0 transition-transform duration-200 group-hover:scale-x-100"></span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
