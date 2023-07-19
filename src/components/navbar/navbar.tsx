import Image from "next/image";
import { type Path } from "@/utils/types";
import { images } from "@/assets/images";
import { useRouter } from "next/router";
import { clsx } from "clsx";
import { signIn, signOut, useSession } from "next-auth/react";

export const Navbar: React.FC = () => {
  const { pathname } = useRouter();
  const { data: sessionData } = useSession();

  const navbarPaths: Path[] = [
    { name: "Home", href: "/" },
    { name: "About us", href: "./" },
    { name: "Tools", href: "./" },
  ];

  return (
    <nav
      className="fixed left-0 top-0 z-20 w-full shadow-navbar backdrop-blur-sm"
      data-accent="violet"
    >
      <div className="mx-auto flex max-w-screen-xl justify-between p-4">
        <a href="./" className="flex items-center ">
          <Image
            src={images.logo_light.src}
            className="mr-3"
            width={32}
            height={32}
            alt="ShinyDexTracker"
          />
          <span className="text-xl font-bold text-white">ShinyDexTracker</span>
        </a>

        {/* Links */}
        <div
          className="hidden w-full translate-x-[-3rem] items-center md:order-1 md:flex md:w-auto"
          id="nav"
        >
          <ul className="flex space-x-8 font-semibold ">
            {navbarPaths.map((path, i) => (
              <li key={i}>
                <a
                  href={path.href}
                  className={clsx(
                    "block  text-white transition-colors md:bg-transparent",
                    pathname === path.href
                      ? "text-accent-500 hover:text-accent-500"
                      : "text-accent-100 hover:text-accent-400"
                  )}
                  aria-current="page"
                >
                  {path.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Login and Burger Btn */}
        <div className="flex md:order-2">
          <button
            onClick={
              sessionData ? () => void signOut() : () => void signIn("google")
            }
            type="button"
            className="mr-3 rounded-lg border-2 border-accent-600 bg-accent-500/10 px-4 py-2 text-center text-sm font-medium text-white transition-colors hover:bg-accent-500/20 focus:border-accent-700 md:mr-0"
          >
            {sessionData ? "Log out" : "Log in"}
          </button>

          {sessionData && (
            <Image
              src={sessionData?.user?.image ?? ""}
              alt="trainer profile picture"
              width={40}
              height={40}
              className="ml-4 hidden rounded-full md:flex"
            />
          )}

          <button
            data-collapse-toggle="nav"
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden"
            aria-controls="nav"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="h-5 w-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};
