import Link from "next/link";
import { useEffect, useState } from "react";
import Accessibility from "./Accessibility";
import { useAccessibility } from "@/contex/AccessibilityContext";
import { useRouter } from "next/router";
import { FaBars } from "react-icons/fa6";

const Header: React.FC = () => {
  const { contrast } = useAccessibility();
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const { pathname } = useRouter();
  const router = useRouter();

  const [search, setSearch] = useState("");
  useEffect(() => {
    router.query.search
      ? setSearch(router.query.search.toString())
      : setSearch("");
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedSearch = search.trim();

    if (trimmedSearch !== "") {
      router.push({
        pathname: "/search",
        query: {
          search: trimmedSearch,
        },
      });
    } else {
      router.push("/");
    }
  };
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const handleDropdownToggle = () => {
    console.log("clicked");
    setDropdownOpen(!isDropdownOpen);
  };
  const handleDropdownClose = () => {
    console.log("hovered out");
    setDropdownOpen(false);
  };

  return (
    <>
      <header>
        <div
          className={` top-bar ${contrast ? "defaultBlackBg  " : "darkGreyBg"}`}
        >
          <div className="inner top-bar-inner">
            <div className="top-bar-left">
              <span>
                <Link href="/newsletter">Newsletter</Link>
              </span>
              <form action="" onSubmit={handleSubmit}>
                <input
                  type="search"
                  placeholder="Search"
                  className="search-bar"
                  value={search}
                  onChange={(e) => {
                    setSearch(e.target.value);
                    if (e.target.value.trim() === "") {
                      router.push("/");
                    }
                  }}
                />
              </form>
            </div>
            <div className="top-bar-right">
              <p className="lenguage">En/Mkd</p>
              <Link href="/shop" className="e-shop">
                E-shop
              </Link>
            </div>
          </div>
        </div>
        <nav
          className={` ${contrast ? "contrastYellowBg " : "defaultYellowBg"}`}
        >
          <div className="inner">
            <div className="logo-wrapper">
              <Link href="/">
                <img src="/images/logo-krik.png" alt="IMG-LOGO" />
              </Link>
            </div>
            <div className="nav-menu">
              <ul>
                <li
                  className={`dropdown ${isDropdownOpen ? "open" : ""}`}
                  onClick={handleDropdownToggle}
                  onMouseLeave={handleDropdownClose}
                >
                  За нас
                  <img
                    src="/images/arrow-dropdown.png"
                    alt="arrow"
                    className="arrow-menu"
                  />
                  <div
                    className={`dropdown-content ${
                      isDropdownOpen ? "links-active" : ""
                    }`}
                    onMouseLeave={handleDropdownClose}
                  >
                    <Link href="/" className="for-us">
                      За нас
                      <img
                        src="/images/arrowDownWhite.png"
                        alt="arrow"
                        className="arrow-menu-white"
                      />
                    </Link>
                    <Link href="/about">За Kрик</Link>
                    <Link href="/ourTeam">Нашиот Tим</Link>
                    <Link href="/volunteers">Волонтери</Link>
                    <Link href="/archive">Архива</Link>
                  </div>
                </li>
                <li>
                  <Link href="/servicesPage"> Услуги</Link>
                </li>
                <li className={pathname === "/" ? "active-menu" : ""}>
                  <Link
                    href="/projects"
                    className={pathname === "/" ? "bold-text" : ""}
                  >
                    Проекти
                  </Link>
                </li>
                <li>
                  {" "}
                  <Link href="#footer"> Контакт</Link>
                </li>
                <li>
                  <button
                    className={` donate ${
                      contrast ? "contrastPurpleBg " : "defaultBlackBg"
                    }`}
                  >
                    <Link href="/donation">Донирај</Link>
                  </button>
                </li>
              </ul>
            </div>
            <div className={`hamburger-menu ${menuOpen ? "open" : ""}`}>
              <Link href="/">
                <img
                  src="/images/logo-krik.png"
                  alt="IMG-LOGO"
                  className="logo-mobile"
                />
              </Link>
              <ul className="menu-items">
                <li>
                  <Link href="/">За нас</Link>
                </li>
                <li>
                  <Link href="/ourTeam">Нашиот Tим</Link>
                </li>

                <li>
                  <Link href="/volunteers">Волонтери</Link>
                </li>
                <li>
                  {" "}
                  <Link href="/archive">Архива</Link>
                </li>
                <li>
                  {" "}
                  <Link href="/servicesPage"> Услуги</Link>
                </li>
                <li>
                  <Link href="/projects">Проекти</Link>
                </li>
                <li>
                  <Link href="#footer"> Контакт</Link>
                </li>
                <li>
                  <Link href="/donation">Донирај</Link>
                </li>
              </ul>
              <div onClick={toggleMenu}>
                <FaBars className="icon" />
              </div>
            </div>
          </div>
        </nav>
        <Accessibility />
      </header>
    </>
  );
};

export default Header;
