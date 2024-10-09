import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

export default function MyInfo() {
  return (
    <footer className="bg-opacity-60 bg-gray-700 text-gray-100 py-6">
      <div className="container mx-auto text-center">
        {/* Name */}
        <h1 className="text-2xl md:text-3xl font-bold mb-2 ">Jaimin Chavda</h1>
        {/* Info */}
        <p className="text-gray-300 mb-4 text-sm md:text-base">
          Studying Software Development at SAIT!
        </p>
        {/* GitHub Link with Icon */}
        <Link 
          href="https://github.com/Jaimin090"
          className="inline-flex items-center text-green-400 hover:text-green-300 hover:underline transition duration-300 ease-in-out"
        >
          <FontAwesomeIcon icon={faGithub} className="mr-2 w-5 h-5" />
          <span className="text-sm md:text-xl">Jaimin090</span>
        </Link>
      </div>
    </footer>
  );
}
