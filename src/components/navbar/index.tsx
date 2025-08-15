import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };
  const isActive = (path: string) => router.pathname === path;

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <nav
        className={`flex fixed z-10 w-full justify-between px-5 py-2 md:px-28 text-xl items-center transition-all duration-300 ${
          isScrolled ? "shadow-lg bg-white" : "bg-white"
        } text-black`}
      >
        <Link href="/">
          <div className="title cursor-pointer">
            <Image src="/tbrand.png" alt="brand" width={120} height={120} />
          </div>
        </Link>
        <div className="menu relative">
          <button className="md:hidden" onClick={toggleDropdown}>
            <span className="text-3xl">{isDropdownOpen ? "×" : "☰"}</span>
          </button>

          {/* Menu Dropdown */}
          {isDropdownOpen && (
            <div className="absolute right-0 bg-black bg-opacity-50 rounded-md shadow-lg z-10 md:hidden">
              <ul className="flex flex-col text-center">
                <li
                  className={`px-4 py-2 cursor-pointer ${
                    isActive("/")
                      ? "text-orange-400 text-opacity-70"
                      : "hover:text-orange-400"
                  }`}
                >
                  <Link href="/">Home</Link>
                </li>
                <li
                  className={`px-4 py-2 cursor-pointer ${
                    isActive("/about")
                      ? "text-orange-400 text-opacity-70"
                      : "hover:text-orange-400"
                  }`}
                >
                  <Link href="/barang">Barang</Link>
                </li>
                <li className="px-4 py-2 cursor-pointer flex justify-center">
                  <a
                    href="https://wa.me/62881037361961?text=Swastiastu%20Jikmin,"
                    target="_blank"
                  >
                    <Image
                      src="/wa-logo.svg"
                      alt="Chat Admin"
                      width={40}
                      height={40}
                    />
                  </a>
                </li>
              </ul>
            </div>
          )}
          <ul className="hidden md:flex text-center items-center">
            <li
              className={`px-3 cursor-pointer ${
                isActive("/")
                  ? "text-orange-400 text-opacity-70"
                  : "hover:text-orange-400 "
              }`}
            >
              <Link href="/">Home</Link>
            </li>
            <li
              className={`px-3 cursor-pointer ${
                isActive("/about")
                  ? "text-orange-400 text-opacity-70"
                  : "hover:text-orange-400"
              }`}
            >
              <Link href="/barang">Barang</Link>
            </li>
            <li
              className={`px-4 py-2 cursor-pointer flex items-center ${
                isActive("/about")
                  ? "text-orange-400 text-opacity-70"
                  : "hover:text-orange-400"
              }`}
            >
              <a
                href="https://wa.me/62881037361961?text=Swastiastu%20Jikmin,"
                target="_blank"
              >
                <Image
                  src="/wa-logo.svg"
                  alt="Chat Admin"
                  width={40}
                  height={40}
                />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
