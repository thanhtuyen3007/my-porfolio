import clsx from "clsx";
import styles from "./Header.module.scss";
import { forwardRef } from "react";

// Header component using forwardRef to allow parent access to the header DOM node
export const Header = forwardRef<HTMLDivElement>((_props, ref) => {
  // List of section IDs for navigation and scroll tracking
  const sections = ["home", "skills", "projects", "contact"];

  return (
    // Header is fixed at the top, styled with SCSS module
    <header
      className={clsx(styles.header, "w-full shadow-lg shadow-secondary")}
      ref={ref}
    >
      <nav
        className={clsx(styles.nav, "md:flex bg-primary text-white text-base")}
      >
        {/* Logo or site title */}
        <h1 className={clsx(styles.navlogo, "capitalize hidden md:block")}>
          Thanh Tuyen - Intern frontend{" "}
        </h1>
        {/* Navigation list */}
        <ul
          className={clsx(
            styles.navList,
            "flex w-fit bg-secondary text-black border rounded-sm border-secondary-light px-5 py-5 "
          )}
        >
          {/* Render navigation links for each section */}
          {sections.map((section) => (
            <li key={section} className={clsx(styles.navItem, "nav-link ")}>
              <a href={`#${section}`} className={clsx(styles.navLink)}>
                {section}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
});
