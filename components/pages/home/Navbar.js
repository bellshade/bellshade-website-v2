import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Icon } from "@iconify/react";

const Navbar = () => {
  const [isDarkMode, setisDarkMode] = useState(false);
  const [navbarResponsive, setNavbarResponsive] = useState(false);

  return (
    <nav className="bg-white drop-shadow mx-auto">
      <div className="hidden xl:block max-w-[1920px] mb-40 py-5 px-10">
        <div className="flex justify-between">
          <div className="flex items-center space-x-16">
            <div>
              <Link href="/">
                <a className="flex items-center">
                  <Image
                    src={"/img/bellshade-logo.png"}
                    alt="Bellshade Logo"
                    width={"178px"}
                    height={"48px"}
                  />
                </a>
              </Link>
            </div>
            <div className="space-x-7">
              <Link href="/">
                <a className="hover:text-main">
                  <Icon
                    icon="ic:round-school"
                    width={24}
                    height={24}
                    className="inline mr-3"
                  />
                  Learning Jurney
                </a>
              </Link>
              <Link href="/">
                <a className="hover:text-main">
                  <Icon
                    icon="mdi:sword-cross"
                    width={24}
                    height={24}
                    className="inline mr-3"
                  />
                  Challenges
                </a>
              </Link>
              <Link href="/">
                <a className="hover:text-main">
                  <Icon
                    icon="ic:baseline-leaderboard"
                    width={24}
                    height={24}
                    className="inline mr-3"
                  />
                  Leaderboard
                </a>
              </Link>
              <Link href="/">
                <a className="hover:text-main">
                  <Icon
                    icon="ri:team-fill"
                    width={24}
                    height={24}
                    className="inline mr-3"
                  />
                  Team
                </a>
              </Link>
            </div>
          </div>
          <div className="flex items-center space-x-8">
            <div className="flex items-center">
              <button
                onClick={() => setisDarkMode(!isDarkMode)}
                className="p-2.5 border shadow rounded-lg"
              >
                <Icon
                  icon={isDarkMode ? "clarity:moon-solid" : "clarity:sun-line"}
                  width={32}
                  height={32}
                />
              </button>
            </div>
            <button
              style={{ background: "#637FE3" }}
              className="text-white p-2.5 h-10 rounded-lg flex items-center "
            >
              <a href="https://github.com/bellshade">Github</a>
            </button>
          </div>
        </div>
      </div>

      <div className="xl:hidden flex items-center mb-10 py-5 px-10 justify-between">
        <div className="flex items-center space-x-16">
          <div className="flex items-center">
            <Image
              src={"/img/bellshade-logo.png"}
              alt="Bellshade Logo"
              width={"178px"}
              height={"48px"}
            />
          </div>
        </div>
        <div>
          <button
            onClick={() => setNavbarResponsive(!navbarResponsive)}
            className="menu-btn"
          >
            <Icon icon="charm:menu-hamburger" width={32} height={32} />
          </button>
        </div>
      </div>
      <div
        className={`mobile-menu drop-shadow xl:hidden ${
          navbarResponsive ? "" : "hidden"
        }`}
      >
        <Link href="/">
          <a className="block py-4 px-6 hover:bg-gray-200 hover:text-main">
            <Icon
              icon="ic:round-school"
              width={24}
              height={24}
              className="inline mr-3"
            />
            Learning Jurney
          </a>
        </Link>
        <Link href="/">
          <a className="block py-4 px-6 hover:bg-gray-200 hover:text-main">
            <Icon
              icon="mdi:sword-cross"
              width={24}
              height={24}
              className="inline mr-3"
            />
            Challenges
          </a>
        </Link>
        <Link href="/">
          <a className="block py-4 px-6 hover:bg-gray-200 hover:text-main">
            <Icon
              icon="ic:baseline-leaderboard"
              width={24}
              height={24}
              className="inline mr-3"
            />
            Leaderboard
          </a>
        </Link>
        <Link href="/">
          <a className="block py-4 px-6 hover:bg-gray-200 hover:text-main">
            <Icon
              icon="ri:team-fill"
              width={24}
              height={24}
              className="inline mr-3"
            />
            Team
          </a>
        </Link>
        <div className="flex justify-between space-x-8 py-6 px-6">
          <div className="flex items-center">
            <button
              onClick={() => setisDarkMode(!isDarkMode)}
              className="p-2.5 border shadow rounded-lg"
            >
              <Icon
                icon={isDarkMode ? "clarity:moon-solid" : "clarity:sun-line"}
                width={32}
                height={32}
              />
            </button>
          </div>
          <button
            style={{ background: "#637FE3" }}
            className="text-white p-2.5 h-10 rounded-lg flex items-center "
          >
            <a href="https://github.com/bellshade">Github</a>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
