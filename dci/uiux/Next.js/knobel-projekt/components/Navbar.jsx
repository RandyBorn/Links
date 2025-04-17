import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-gray-800 p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">
          <Link href="/">Landingpage</Link>
        </div>
        <ul className="flex space-x-4">
          <li>
            <Link href="/aboutPages" className="hover:text-gray-300">
              About U
            </Link>
          </li>
          <li>
            <Link href="/Filmbibliothek" className="hover:text-gray-300">
              Film Bibliothek
            </Link>
          </li>
          <li>
            <Link href="/gallerie" className="hover:text-gray-300">
              Zur Gallerie
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
