import clsx from "clsx";
import styles from "./Header.module.scss";
import { forwardRef, useEffect, useState } from "react";

// Header component using forwardRef to allow parent access to the header DOM node
export const Header = forwardRef<HTMLDivElement>((_props, ref) => {
  // List of section IDs for navigation and scroll tracking
  const sections = ["home", "skills", "projects", "contact"];
  // State to keep track of which section is currently active (in view)
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    // Create an IntersectionObserver to detect which section is in view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // If a section is at least 50% visible, set it as active
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.5, // Section is considered visible when 50% is in viewport
      }
    );

    // Observe each section by its ID
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    // Cleanup observer on unmount
    return () => observer.disconnect();
  }, []);

  return (
    // Header is fixed at the top, styled with SCSS module
    <header className={clsx(styles.header, 'w-full shadow-xs shadow-secondary')} ref={ref}>
      <nav className={clsx(styles.nav, "md:flex bg-primary text-white text-base")}>
        {/* Logo or site title */}
        <h1 className={clsx(styles.navlogo, "capitalize hidden md:block")}>
          Thanh Tuyen - Intern frontend{" "}
        </h1>
        {/* Navigation list */}
        <ul
          className={clsx(
            styles.navList,
            "flex bg-secondary border rounded-sm border-secondary-light px-5 py-5 "
          )}
        >
          {/* Render navigation links for each section */}
          {sections.map((section) => (
            <li key={section} className={clsx(styles.navItem, "nav-link")}>
              <a
                href={`#${section}`}
                className={clsx(
                  styles.navLink,
                  activeSection === section && styles.active // Highlight active section
                )}
              >
                {section}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
});
