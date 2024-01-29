// components/Navbar.tsx
import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-950 p-4 h-auto">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <Link className="text-white font-extrabold text-lg font-main" href="/">
            REVIVAL
          </Link>
        </div>
        <div className="space-x-4">
          <Link className="text-white" href="/">
            Home
          </Link>
          <Link className="text-white" href="/about">
            About US
          </Link>
          <Link className="text-white" href="/about">
            About US
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
