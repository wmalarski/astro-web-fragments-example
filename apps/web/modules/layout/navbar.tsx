import { paths } from "@awfe/paths";
import Image from "next/image";
import Link from "next/link";
import ImgHome from "./assets/home.svg";
import ImgMagnifier from "./assets/magnifier.svg";
import ImgMovie from "./assets/movie.svg";
import ImgTv from "./assets/tv.svg";

export const Navbar = () => {
  return (
    <nav className="bg-black px-6 py-8 text-black">
      <ul className="flex justify-around gap-10 md:flex-col md:justify-start">
        <li className="hover:opacity-80">
          <Link href={paths.index}>
            <Image alt="Home" className="h-6 w-6" src={ImgHome} />
          </Link>
        </li>
        <li className="hover:opacity-80">
          <Link href={paths.movies}>
            <Image alt="Movies" className="h-6 w-6" src={ImgMovie} />
          </Link>
        </li>
        <li className="hover:opacity-80">
          <Link href={paths.tv}>
            <Image alt="TV" className="h-6 w-6" src={ImgTv} />
          </Link>
        </li>
        <li className="hover:opacity-80">
          <Link href={paths.search}>
            <Image alt="Search" className="h-6 w-6" src={ImgMagnifier} />
          </Link>
        </li>
      </ul>
    </nav>
  );
};
