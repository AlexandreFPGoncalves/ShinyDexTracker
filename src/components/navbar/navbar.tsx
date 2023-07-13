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
    <nav className="absolute w-full" data-accent="violet">
      <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
        <a href="./" className="flex items-center">
          <Image
            src={images.logo_light.src}
            className="mr-3"
            width={32}
            height={32}
            alt="ShinyDexTracker Logo"
          />
          <span className="whitespace-nowrap text-2xl font-bold dark:text-white">
            ShinyDexTracker
          </span>
        </a>

        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden"
          aria-controls="navbar-default"
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

        <div className="hidden w-full md:block md:w-auto " id="navbar-default">
          <ul className="flex flex-col p-4 text-lg font-semibold md:flex-row md:space-x-8">
            {navbarPaths.map((path, i) => (
              <li key={i}>
                <a
                  href={path.href}
                  className={clsx(
                    "transition-colors",
                    pathname === path.href
                      ? "text-accent-500 hover:text-accent-600"
                      : "text-accent-50 hover:text-accent-300"
                  )}
                >
                  {path.name}
                </a>
              </li>
            ))}

            <button
              onClick={
                sessionData ? () => void signOut() : () => void signIn("google")
              }
              className={
                "text-accent-50 transition-colors hover:text-accent-300"
              }
            >
              {sessionData ? "Logout" : "Login"}
            </button>
            {sessionData && (
              <Image
                src={sessionData?.user?.image ?? ""}
                alt="trainer profile picture"
                width={32}
                height={32}
                className="rounded-full"
              />
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};
